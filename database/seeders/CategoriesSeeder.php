<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Categories;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$data = [
            'Home and Living',
            'Clothing',
            'Groceries',
            'Health and Personal Care',
            'Apparels',   
    	];

    	foreach ($data as $key => $value) {  
            Categories::updateOrCreate(
                [ 'name' =>  $value ],
                [ 'name' =>  $value ]
            );
    	}
    }
}
