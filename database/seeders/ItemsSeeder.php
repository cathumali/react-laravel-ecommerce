<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Items;
use Illuminate\Support\Str;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create();


        $count = 1;
    	while ($count <= 26) {
            $description = $faker->paragraph;
            $data = [
                'name' => Str::random(10),
                'short_description' => Str::of( $description )->limit(40, ' ...'),
                'description' => $description,
                'price' => rand(1, 100),
                'category_id' => rand(1, 4),
                'image' => '/images/items/product'.$count.'.jpg',
            ];
            $items = Items::create($data);
            $count++;
    	}
    }

    private function getRandomString($n) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $randomString = '';
	  
	    for ($i = 0; $i < $n; $i++) {
	        $index = rand(0, strlen($characters) - 1);
	        $randomString .= $characters[$index];
	    }
	  
	    return $randomString;
	}
}
