<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    function index()
    {

        $post = Post::where('status', true)
            ->orderBy('created_at', 'desc')
            ->paginate(6);

        SEOTools::setTitle("Gtmov.xyz");
        SEOTools::setDescription("website seputar teknologi dan finansial");

        $datas['dataminimal'] = Post::where('status', true)
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get();
        $datas["datas"] = $post;
        $datas["seo"] = [
            'title' => SEOMeta::getTitle(),
            'description' => SEOMeta::getDescription(),
            'keywords' => SEOMeta::getKeywords(),
            'canonical' => SEOMeta::getCanonical(),
        ];

        return Inertia::render('Guest/Index', $datas);
    }

    public function show($slug, Request $request)
    {
        $post = Post::where('slug', $slug)->first();
        SEOTools::setTitle($post->title);
        SEOTools::setDescription(substr(strip_tags($post->excerpt), 0, 160));

        $datas['data'] = $post;
        $datas['url'] = $request->url ?? null;
        $datas['dataminimal'] = Post::where('status', true)
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get();
            
        $datas["seo"] = [
            'title' => SEOMeta::getTitle(),
            'description' => SEOMeta::getDescription(),
            'keywords' => SEOMeta::getKeywords(),
            'canonical' => SEOMeta::getCanonical(),
        ];
        return Inertia::render('Guest/Show', $datas);
    }
}
