<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use App\Models\Doctors;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'phone' => $faker->e164PhoneNumber,
        'whatsapp' => $faker->e164PhoneNumber,
        'active'=> 1
    ];
});
$factory->define(App\Models\Doctors::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween(1, 100),
        'name' => $faker->name,
        'name_ar' => $faker->text,
    ];
});
$factory->define(App\Models\Patient::class, function (Faker $faker) {
    return [
        'refered_by' => $faker->numberBetween(12, 19),
        'name_en' => $faker->name,
        'name_ar' => $faker->name,
    ];
});
$factory->define(App\Models\ScanCateg::class, function (Faker $faker) {
    return [

        'categ_name' => $faker->name,
        'points' => $faker->numberBetween(0, 200),
        'notes'=>''
    ];
});
$factory->define(App\Models\Scan::class, function (Faker $faker) {
    return [
        'Categ_id' => $faker->numberBetween(1, 5),
        'scan_item' => json_encode(["name" => $faker->name(), "type" => "option"]),
        // 'json' => json_encode(["key" => $faker->randomNumber()] ) {"name":"Water View","type":"option"}

    ];
});

$factory->define(App\Models\ScanPurpose::class, function (Faker $faker) {
    return [

        'purpose' => $faker->name,

    ];
});
