<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use App\Models\Order;

class RoomController extends Controller
{
    //
	public function index() {
		$rooms = Room::all();

		return $rooms;
	}

	public function order(Request $request) {
		$name = $request->name;
		$roomId = $request->roomId;
		$duration = $request->duration;
		$date = $request->date;
		$startTime = $request->startTime;

		$order = new Order();
		$order->name = $name;
		$order->roomId = $roomId;
		$order->duration = $duration;
		$order->date = $date;
		$order->startTime = $startTime;

		$order->save();

		return $order;
	}

	public function listBooked() {
		$rooms = Order::all();

		$result = [];

		for($i=0; $i<count($rooms); $i++){
			$room = Room::where('id', $rooms[$i]->roomId)->first();
			$temp = [
				"room" => $room,
				"order" => $rooms[$i]
			];
			array_push($result, $temp);
		}

		return $result;
	}

	public function completeBooked() {
		// function to complete if order passed the time
	}

	public function checkCollision(Request $request) {
		// function to check by datetime if the order collide with room had been booked
		$orders = Order::all();
		return $m;
	}

	public function showAvailableRoomToday() {
		// function to return available room today
	}


}
