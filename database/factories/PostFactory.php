<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use League\CommonMark\Normalizer\SlugNormalizer;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "user_id" => "1",
            "title" => $this->faker->sentence(),
            "slug" => (new SlugNormalizer())->normalize($this->faker->sentence()),
            "is_published" => $this->faker->boolean(),
            "excerpt" => $this->faker->paragraph(),
            "body" => $this->faker->paragraph(),
            "img_tmb" => null,
        ];
    }
}
