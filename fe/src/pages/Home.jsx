//import ListAvailableRoom from '../components/ListAvailableRoom'
import ListBookedRoom from '../components/ListBookedRoom'

const Home = () => {
    return(
	    <div className="flex flex-col gap-5">
	      <h1 className="text-center">Selamat datang di aplikasi management ruangan meeting</h1>
	    	<div className="flex gap-5 justify-center">
		      <ListBookedRoom />
	    	</div>
	    </div>
    )
}

export default Home;
