<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sub = [
            [
                'name' => 'website_name',
                'value' => 'Gtmov.xyz',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'website_description',
                'value' => 'website seputar teknologi dan finansial',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'website_ads',
                'value' => 'moderate',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'website_author',
                'value' => 'Ahmad Nasir',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];
        Setting::insert($sub);
    }
}
