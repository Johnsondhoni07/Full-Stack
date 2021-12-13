<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Adminseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('admins')->insert([[
        //     'email'=>'admin1@gmail.com',
        //     'password'=>Hash::make('123'),
        //     'created_at'=>now(),
        //     'updated_at'=>now()
        // ],
        // [
        //     'email'=>'admin2@gmail.com',
        //     'password'=>Hash::make('321'),
        //     'created_at'=>now(),
        //     'updated_at'=>now()
        // ]]
        // );
        $var=[
            'email'=>'adminjohn@gmail.com',
            'password'=>Hash::make('123'),
            'created_at'=>now(),
            'updated_at'=>now()
        ];
        $var1=[
            'email'=>'adminsanjay@gmail.com',
            'password'=>Hash::make('321'),
            'created_at'=>now(),
            'updated_at'=>now()
        ];
        DB::table('admins')->insert([$var,$var1]);
    }
}
