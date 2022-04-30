<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'Email'],
            ['name' => 'Phone'],
            ['name' => 'Whatsapp'],
        ];

        foreach ($data as $datum) {
            DB::table('contact_type')->insert($datum);
        }
    }
}
