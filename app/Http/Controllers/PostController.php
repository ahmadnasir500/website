<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($page = 1)
    {
        $data['datas'] = Post::where(['user_id' => auth()->id(), 'status' => true])
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return inertia('Dashboard/Post/Index', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Dashboard/Post/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = FacadesValidator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'img_tmb' => 'nullable|image|max:2048',
            'status' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return Inertia::render('Dashboard/Post/Create')->with('flash.error', $validator->errors()->all());
        }

        $validated = $validator->validated();
        $post = new Post();
        $post->user_id = auth()->id();
        $post->title = $validated['title'];
        $post->slug = \Str::slug($validated['title']) . '-' . uniqid();
        $post->content = $validated['content'];
        if ($request->hasFile('img_tmb')) {
            $filename =  date('Y-m-d') . '-' . uniqid() . '.' . $request->file('img_tmb')->getClientOriginalExtension();
            $imageStream = Image::make($request->file('img_tmb'))->resize(1024, 768, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->stream($request->file('img_tmb')->getClientOriginalExtension(), 80);
            Storage::disk('public')->put('images/' . $filename, $imageStream);
            $post->img_tmb = $filename;
        }
        $post->status = $validated['status'];
        $post->save();

        return redirect()->route('post.index')->with('flash.success', 'Post created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data['data'] = Post::findOrFail($id);

        return inertia('Dashboard/Post/Edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = FacadesValidator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'img_tmb' => 'nullable|image|max:2048',
            'status' => 'required|boolean',
        ]);
        if ($validator->fails()) {
            return Inertia::render('Dashboard/Post/Edit', ['data' => Post::findOrFail($id)])
                ->with('flash.error', $validator->errors()->all());
        }
        $validated = $validator->validated();
        $post = Post::findOrFail($id);
        // hapus image jika ada
        if ($post->img_tmb && $request->hasFile('img_tmb')) {
            $imagePath = public_path('storage/images/' . $post->img_tmb);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }
        $post->title = $validated['title'];
        $post->content = $validated['content'];
        $post->status = $validated['status'];

        if ($request->hasFile('img_tmb')) {
            $filename =  date('Y-m-d') . '-' . uniqid() . '.' . $request->file('img_tmb')->getClientOriginalExtension();
            $imageStream = Image::make($request->file('img_tmb'))->resize(1024, 768, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            })->stream($request->file('img_tmb')->getClientOriginalExtension(), 80);
            Storage::disk('public')->put('images/' . $filename, $imageStream);
            $post->img_tmb = $filename;
        }
        $post->save();
        $data['data'] = $post;
        // dd($request->all());

        return redirect()->route('post.index')->with('flash.success', 'Post updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        if ($post->img_tmb) {
            $imagePath = public_path('storage/images/' . $post->img_tmb);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
        }

        $post->delete();

        return redirect()->route('post.index')->with('flash.success', 'Post deleted successfully.');
    }
}
