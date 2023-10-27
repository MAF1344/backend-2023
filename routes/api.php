<?php

use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    echo $request->user();
});

// Method Get
Route::get('/animals', [AnimalController::class, 'index']);
Route::get('/students', [StudentController::class, 'index']);

// Method Post
Route::post('/animals', [AnimalController::class, 'store']);
Route::post('/students', [StudentController::class, 'store']);

// Method Put
Route::put('/animals/{id}', [AnimalController::class, 'update']);
Route::put('/students/{id}', [StudentController::class, 'update']);

// Method Delete
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);
Route::delete('/students/{id}', [StudentController::class, 'destroy']);
