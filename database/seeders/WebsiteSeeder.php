<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WebsiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Website::factory()->create([
            'name' => env('APP_NAME', 'Example Website'),
            'ads' => 'moderate',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dicta culpa molestiae aliquid. Voluptas beatae a soluta molestiae accusamus! Debitis magnam explicabo illo quam vero ducimus nemo. Voluptatibus at perspiciatis et provident facere, quis, asperiores non temporibus laborum, id blanditiis ad ipsam quam repellat? Cumque nobis saepe, vitae et tempore, doloremque excepturi beatae explicabo, magni totam quidem voluptate iusto cupiditate voluptatum expedita sint. Omnis quae deleniti excepturi amet, consectetur tenetur explicabo aut eos quaerat nihil, quam nam pariatur aliquam quod unde ratione aperiam, asperiores nemo in ad? Quae officiis quidem minima quasi, dicta autem labore dignissimos, suscipit, assumenda ea adipisci ducimus corporis consectetur natus vero. Corporis quas illum et necessitatibus eligendi ab, minus architecto? Magni iure nostrum reprehenderit cum aperiam exercitationem deserunt perferendis tempore eum architecto, amet, soluta voluptatem blanditiis aspernatur sed pariatur quisquam neque ipsa commodi rem! Ad dignissimos expedita alias, labore quod nulla aperiam laborum suscipit eligendi, odio quasi animi vitae. Distinctio, odio suscipit? Earum aspernatur maiores repudiandae provident molestias. Error consectetur enim quasi tempore voluptatem. Saepe voluptatibus praesentium unde earum ratione quae quod nulla repellat! Consectetur laborum veritatis iure accusamus ipsam? Sint, ullam reprehenderit! Delectus consectetur tempora est accusantium, earum ab in expedita harum consequatur quam veniam veritatis nihil voluptates deleniti aliquam. Tempore maxime hic quam perferendis est ratione impedit fugiat voluptatem fugit assumenda reiciendis deserunt facere officia aliquid doloremque nesciunt architecto quod non quae, nisi laborum necessitatibus eveniet beatae. Hic rerum quidem officia harum repellendus repellat eum veritatis adipisci ratione nam suscipit voluptates esse aliquid, voluptas sapiente minima nesciunt nostrum placeat animi commodi asperiores exercitationem ullam? Repellat, repudiandae! Eaque quaerat laboriosam natus quia quisquam blanditiis repellendus, odio distinctio ipsam ullam ratione molestias dolorum voluptates iste, eius minus, autem inventore nihil! Nesciunt aperiam dolorem accusantium ex, nostrum ipsum architecto minima explicabo, reprehenderit placeat doloribus enim perferendis quia veritatis! Ullam, minima minus cum sunt quia quisquam maiores aspernatur molestias et impedit voluptate dolorum ipsa numquam quam deleniti iusto veniam nisi fugiat veritatis modi voluptates, dicta velit. Quas dignissimos debitis libero quisquam suscipit sit quibusdam vitae rerum velit nulla laboriosam porro hic recusandae similique odit, aperiam voluptatum sint! Beatae corporis quia atque aut, ex eum soluta repellendus. Deserunt magni molestiae nulla assumenda aperiam quo quibusdam qui incidunt culpa rem omnis aut adipisci necessitatibus temporibus quaerat ab molestias dolorem repellendus, sunt, veritatis suscipit possimus nam quod. Quae sed fugit eius error itaque nostrum modi veniam. Ducimus excepturi nesciunt placeat. Distinctio ut reprehenderit totam provident natus eum dolore eos, illo maxime tempore, atque inventore minima, vitae veniam. Inventore nostrum non pariatur corrupti ad, consequuntur ex magni quasi aliquid. Architecto asperiores voluptatibus veritatis tenetur corrupti expedita reprehenderit eum. Odio nobis placeat repudiandae qui veritatis sit fugit, animi perferendis. Maiores excepturi exercitationem consectetur libero provident aperiam saepe dolorum dignissimos assumenda, voluptatibus atque incidunt quidem!',
        ]);
    }
}
