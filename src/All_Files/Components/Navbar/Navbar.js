import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    console.log(user?.email);

    const menuItem = <React.Fragment>
        <Link className='btn btn-ghost btn-sm' to='/'>Home</Link>
        <Link className='btn btn-ghost btn-sm' to='/register'>Register</Link>
        <Link className='btn btn-ghost btn-sm' to='/login'>Login</Link>
        <Link className='btn btn-ghost btn-sm' to='/dashboard'>Admin section</Link>
    </React.Fragment>


    return (
        <div>
            <div>
                <div className="navbar bg-base-100 flex justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    menuItem
                                }
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Student- <div className='text-red-500 text-2xl'>library</div></Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {
                                menuItem
                            }
                        </ul>
                    </div>

                    <label htmlFor="drawer-box" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;