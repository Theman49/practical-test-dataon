import { Link } from "react-router-dom"
import axios from "axios"
import {useState, useEffect} from "react"

const ListBookedRoom = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		const getDataBooked = async() => {
			const res = await axios.get("http://127.0.0.1:8000/api/list-booked")
			console.log(res)
			setData(res.data)
		}
		getDataBooked()
	},[])
	return (
		<div className="flex flex-col gap-2 border border-red p-2 w-fit">
			<h1>List Booked Room</h1>

			<div className="flex gap-2">
				{data.map((item) => {
					const goTo = "/room/" + item.room.name.toLowerCase()
					return data ? (
						<Link key={item.order.id} to={goTo} className="rounded border-2">
							<p className="rounded bg-gray-500 p-2">{item.room.name}{item.order.roomId}</p>	
							<div className="p-1">
								<p>{item.order.name}</p>	
								<p>{item.order.date}</p>	
								<p>{item.order.startTime}</p>	
								<p>{item.order.duration} hour<span>{item.order.duration > 1 ? "s": ""}</span></p>	
							</div>
						</Link>
					): null
				})}
			</div>
		</div>
	)
}

export default ListBookedRoom
