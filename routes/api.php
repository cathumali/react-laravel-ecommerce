<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ItemsController;
use App\Http\Controllers\API\CategoriesController;

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



Route::middleware('api')->group(function () {
    Route::resource('items', Api\ItemsController::class); 
    // Route::get('items', [ItemsController::class, 'index']);
    Route::resource('categories', Api\CategoriesController::class); 

});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
