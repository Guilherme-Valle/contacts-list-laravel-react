<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PersonContact extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('person_contact', function(Blueprint $table){
            $table->increments('id');
            $table->string('value');
            $table->integer('person_id')->unsigned();
            $table->foreign('person_id')->references('id')->on('person');
            $table->integer('contact_type_id')->unsigned();
            $table->foreign('contact_type_id')->references('id')->on('contact_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
