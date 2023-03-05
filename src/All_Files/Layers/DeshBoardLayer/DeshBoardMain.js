import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';



const DeshBoardMain = () => {
    return (

       <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile ">
        <input id="drawer-box" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-100">
            <label htmlFor="drawer-box" className="drawer-overlay "></label>
            <ul className="menu p-4 w-80  text-base-content font-serif">
                <li className='  btn btn-link text-black '><Link to='/dashboard'>Admin Section</Link></li>



            </ul>
        </div>
    </div>
       </div>
    );
};

export default DeshBoardMain;