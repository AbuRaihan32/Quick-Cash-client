import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to={"/sendMoney"}>Send Money</NavLink>
      </li>
      <li>
        <NavLink to={"/cashOut"}>Cash Out</NavLink>
      </li>
      <li>
        <NavLink to={"/cashIn"}>Cash In</NavLink>
      </li>
      <li>
        <NavLink to={"/balance"}>Balance Check</NavLink>
      </li>
      <li>
        <NavLink to={"/history"}>History</NavLink>
      </li>
      <li>
        <NavLink to={"/transitionManage"}>Transition Management</NavLink>
      </li>
      <li>
        <NavLink to={"/userManage"}>User Management</NavLink>
      </li>
      <li>
        <NavLink to={"/systemManage"}>System Management</NavLink>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">QuickCash</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
