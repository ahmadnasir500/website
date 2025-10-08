<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use League\CommonMark\Normalizer\SlugNormalizer;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            [
                "title" => "Zippyshare Quits After 17 Years (2006-2023)",
                "slug" => (new SlugNormalizer())->normalize('Zippyshare Quits After 17 Years (2006-2023)'),
                "is_published" => true
            ],
            [
                "title" => "4 Easy Steps How To Fix HP Printer Error 49.4c02",
                "slug" => (new SlugNormalizer())->normalize('4 Easy Steps How To Fix HP Printer Error 49.4c02'),
                "is_published" => true
            ],

        ];
        foreach($items as $item){
            Post::factory()->create($item);
        }

        Post::factory(50)->create();
    }
}
