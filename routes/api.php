<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocalController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register',[LocalController ::class,'register']);
Route::post('login',[LocalController ::class,'login']);
Route::post('admin',[LocalController ::class,'adminlogin']);
Route::post('sort/{by}',[LocalController::class,'sort']);
Route::post('delete',[LocalController::class,'delete']);
Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::post('edit/{id}',[LocalController ::class,'edit']);
    Route::post('admin',[LocalController ::class,'adminlogin']);
});
