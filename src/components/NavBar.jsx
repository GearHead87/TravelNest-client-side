import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const NavLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all-tourists-spot"}>All Tourists Spot</NavLink></li>
        {
            user
                ? <>
                    <li><NavLink to={"/add-tourists-spot"}>Add Tourists Spot</NavLink></li>
                    <li><NavLink to={"/my-list"}>My List</NavLink></li>
                </>
                : <></>
        }
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Tourism</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ? <>
                                <button onClick={handleLogout} className="btn mr-4">Logout</button>
                                <div className="dropdown dropdown-end" id="my-anchor-element">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div
                                            className="w-10 rounded-full"
                                            data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}
                                        >
                                            <img alt="Profile Pic" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        {/* <li>
                                            <a
                                                className="justify-between"
                                            >
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li> */}
                                        <li><button onClick={handleLogout}>Logout</button></li>
                                    </ul>
                                </div>
                            </>
                            : <>
                                <Link to={"/login"} className="btn">Login</Link>
                                <Link to={"/register"} className="btn ml-4">Register</Link>
                            </>
                    }


                </div>
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default NavBar;