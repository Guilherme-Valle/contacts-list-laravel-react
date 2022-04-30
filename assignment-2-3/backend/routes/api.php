<?php

use App\Http\Controllers\ContactTypeController;
use App\Http\Controllers\PersonContactController;
use App\Http\Controllers\PersonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['name' => 'v1', 'prefix' => 'v1'], function(){
    Route::resource('/person', PersonController::class);
    
    Route::resource('/person_contact', PersonContactController::class);

    Route::resource('/contact_type', ContactTypeController::class);
});
