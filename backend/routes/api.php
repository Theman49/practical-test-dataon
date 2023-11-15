<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoomController;

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

Route::get("/rooms", [RoomController::class, "index"]);
Route::post("/order", [RoomController::class, "order"]);
Route::get("/list-booked", [RoomController::class, "listBooked"]);
Route::get("/check-collision", [RoomController::class, "checkCollision"]);
