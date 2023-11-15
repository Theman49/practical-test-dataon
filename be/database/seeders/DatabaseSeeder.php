<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
	
	for($i=1; $i<=6; $i++){
		$name = "A";
		$floor = 1;
		if($i > 3){
			$name = "B";
			$floor = 2;
		}
		\App\Models\Room::factory()->create([
			'name' => $name,
			'floor' => $floor,
		]);
	}
    }
}
