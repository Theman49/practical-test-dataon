import {useState, useEffect} from "react"
//import data from "../data.json"
import axios from 'axios'
import moment from 'moment'


const Order = () => {
	//const availableData = data.filter((item) => item.status === 'available')
	const [listRoom, setListRoom] = useState([])

	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [duration, setDuration] = useState(1);
	const [room, setRoom] = useState(1);
	const [orders, setOrders] = useState([]);


	const checkIsBooked = (date, time, roomId) => {
		const dt = `${date} ${time}`
		const startTime = moment(dt).unix()
		const endTime = moment(dt).add(time, "h").unix()
		const check = orders.filter((item) => {
			const tempDt = `${item.order.date} ${item.order.startTime}`
			const tempStartTime = moment(tempDt).unix()
			const tempEndTime = moment(tempDt).add(item.order.duration, "h").unix()
			if(roomId == item.order.roomId){
				if((startTime >= tempStartTime && startTime <= tempEndTime) || (endTime >= tempStartTime && endTime <= tempEndTime)){
					return item
				}
			}
		})
		return check
	}

	

	const order = async(e) => {
		e.preventDefault()
		console.log(name)
		console.log(date)
		console.log(time)
		console.log(duration)
		console.log(room)
		

		let body = new FormData()
		body.append("name", name)
		body.append("date", date)
		body.append("startTime", time)
		body.append("duration", duration)
		body.append("roomId", room)

		const check = checkIsBooked(date, time, room)
		if(check.length === 0){
			const res = await axios.post("http://127.0.0.1:8000/api/order", body)
			alert("your order success")
			const res2 = await axios.get("http://127.0.0.1:8000/api/list-booked")
			setOrders(res2.data)
		}else{
			alert("your ordered room had been booked")
		}


		
	}

	useEffect(() => {
		const getRooms =  async() => {
			const res = await axios.get("http://127.0.0.1:8000/api/rooms")
			console.log(res)
			setListRoom(res.data)
		}
		const getOrders =  async() => {
			const res = await axios.get("http://127.0.0.1:8000/api/list-booked")
			console.log(res)
			setOrders(res.data)
		}
		getRooms()
		getOrders()
	},[]);


	  return (
	    <form className="flex flex-col gap-2 w-fit ">
		<div className="flex flex-col gap-2">
		  <div>
		      <label>Enter your name:<br/>
			<input
		  	  required
			  type="text"
			  value={name}
			  onChange={(e) => setName(e.target.value)}
			  className="border rounded w-full"
			/>
		      </label>
		  </div>
		  <div>
		      <label>Date:<br/>
			<input
		  	  required
			  type="date"
			  value={date}
			  onChange={(e) => setDate(e.target.value)}
			  className="border rounded w-full"
			/>
		      </label>
		  </div>
		  <div>
		      <label>Start Hours:<br/>
			<input
		  	  required
			  type="time"
			  value={time}
			  onChange={(e) => setTime(e.target.value)}
			  className="border rounded w-full"
			/>
		      </label>
		  </div>
		  <div>
		      <label>Duration:<br/>
			<input
		  	  required
		  	  min="0"
			  type="number"
			  value={duration}
			  onChange={(e) => setDuration(e.target.value)}
			  className="border rounded w-full"
			/>
		      </label>
		  </div>
		</div>
		  <div>
		      <label>Select Room:<br/>
		  	<select value="room" onChange={(e) => setRoom(e.target.value)}>
		  		{listRoom.map((item) => {
					return(
						<option key={item.id} value={item.id}>{item.name}{item.id}</option>
					)
				})}
		  	</select>
		      </label>
		  </div>
		<button onClick={order} className="w-fit bg-gray-500 rounded w-full text-white p-2">Order</button>
	    </form>
	    )
}

export default Order;
