<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViewUsersDoctors extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // $data = "CREATE VIEW `users_doctors` AS SELECT users.id AS `uid`,users.name AS `user_name`,users.email AS `user_email`,users.active AS `user_active`,users.role,doctors.* FROM users INNER JOIN doctors ON doctors.user_id = users.id ";
        $data = "CREATE VIEW `users_doc` AS SELECT users.id AS `uid`,users.name AS `user_name`,users.email AS `user_email`,users.active AS `user_active`,users.role,doctors.* FROM users INNER JOIN doctors ON doctors.user_id = users.id ";
        DB::statement($data);
    }




    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        DB::statement('DROP VIEW users_doc');
    }
}

/**
 * composer require staudenmeir/laravel-migration-views:"^1.0"
 * use Staudenmeir\LaravelMigrationViews\Facades\Schema;

$query = DB::table('users')->where('active', true);

Schema::createView('active_users', $query);
You can provide the view's columns as the third argument:

use Staudenmeir\LaravelMigrationViews\Facades\Schema;

$query = 'select id from users where active = 1';

Schema::createView('active_users', $query, ['key']);
Use createOrReplaceView() to create a view or replace the existing one:

use Staudenmeir\LaravelMigrationViews\Facades\Schema;

$query = DB::table('users')->where('active', true);

Schema::createOrReplaceView('active_users', $query);
Renaming Views
Use renameView() to rename a view:

use Staudenmeir\LaravelMigrationViews\Facades\Schema;

Schema::renameView('active_users', 'users_active');
Dropping Views
Use dropView() or dropViewIfExists() to drop a view:

use Staudenmeir\LaravelMigrationViews\Facades\Schema;

Schema::dropView('active_users');

Schema::dropViewIfExists('active_users');
If you are using php artisan migrate:fresh, you can drop all views with --drop-views (Laravel 5.6.26+).

Checking For View Existence
Use hasView() to check whether a view exists:

use Staudenmeir\LaravelMigrationViews\Facades\Schema;

if (Schema::hasView('active_users')) {
    //
}
Listing View Columns
Use getViewColumnListing() to get the column listing for a view:

use Staudenmeir\LaravelMigrationViews\Facades\Schema;

$columns = Schema::getViewColumnListing('active_users');
 */
