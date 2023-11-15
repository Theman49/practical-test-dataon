import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="flex justify-center w-full p-2 bg-gray-300">
        <ul className="flex gap-5">
          <li className="bg-white rounded p-1">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-white rounded p-1">
            <Link to="/order">Order</Link>
          </li>
        </ul>
      </nav>

	<div class="container py-5">
	      <Outlet />
	</div>
    </>
  )
};

export default Layout;
