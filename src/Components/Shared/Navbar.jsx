import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/sendMoney"}>Send Money</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/cashOut"}>Cash Out</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/cashIn"}>Cash In</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/balance"}>Balance Check</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/history"}>History</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/transitionManage"}>Transition Management</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/userManage"}>User Management</NavLink>
      </li>
      <li>
        <NavLink           className={({ isActive }) =>
            isActive
              ? "border border-[#2EE9B1] hover:bg-[#00247A] hover:text-white rounded-md py-[7px] px-3"
              : "py-[7px] px-3"
          } to={"/systemManage"}>System Management</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu z-30 text-[#2EE9B1] menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl">QuickCash</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-1 items-center font-semibold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to={'/register'}><button className="btn">Register</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
