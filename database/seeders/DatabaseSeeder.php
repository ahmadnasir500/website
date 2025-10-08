<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test admin',
            'email' => 'admin@app.com',
            'username' => 'admin',
            'password' => bcrypt('password'), // password
        ]);
        $this->call(SettingSeeder::class);
        $this->call(PostSeeder::class);
    }
}
