<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Artesaos\SEOTools\Facades\SEOMeta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    function meta()
    {
        return [
            'title' => 'halaman',
            'description'  => 'For those who helped create the Genki Dama', // set false to total remove
            'separator'    => ' - ',
            'keywords'     => [],
            'canonical'    => false, // Set to null or 'full' to use Url::full(), set to 'current' to use Url::current(), set false to total remove
            'robots'       => false, // Set to 'all', 'none' or any combination of index/noindex and follow/nofollow
        ];
    }
    function index()
    {
        $meta = $this->meta();
        $meta['title'] = 'halaman beranda';
        $meta['description'] = 'halaman beranda';

        $datas["data"] = Post::all();
        $datas["website"] = $meta;
        return Inertia::render('Guest/Index', $datas);
    }

    public function show($slug)
    {
        $datas['data'] = Post::where('slug', $slug)->first();

        $meta = $this->meta();
        $meta['title'] = 'halaman beranda';
        $meta['description'] = $datas['data']->excerpt;
        $datas["website"] = $meta;

        return Inertia::render('Guest/Show', $datas);
    }
}
