import { Link } from "react-router-dom"
import data from '../data.json'

const ListAvailableRoom = () => {
	return (
		<div className="flex flex-col gap-2 border border-red p-2 w-fit">
			<h1>List Available Room</h1>

			<div className="flex gap-2">
				{data.map((item) => {
					const goTo = "/room/" + item.name.toLowerCase()
					return item.status === "available" ? (
						<Link key={item.id} to={goTo} className="rounded bg-gray-500 p-2">
							<p>{item.name}</p>	
						</Link>
					) : null
				})}
			</div>
		</div>
	)
}

export default ListAvailableRoom
