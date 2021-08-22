<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Items;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$count = 1;
    	while ($count <= 26) {
 
            $data = [
                'name' => $this->getRandomString(10),
                'description' => $this->getRandomString(20),
                'price' => rand(1, 100),
                'category_id' => rand(1, 4),
                'image' => '/images/items/'.$count.'.jpg',
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
