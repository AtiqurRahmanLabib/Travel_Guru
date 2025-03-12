import React, { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation()
    const textColor = location.pathname === "/login" ? "text-black" : "text-white";

    const handleLogout = () => {
        logout()
        .then()
        .catch()
    }

    return (
        <div className="w-[1400px] h-[57px] mx-auto mt-5 flex shadow-9xl ]">
            <nav className="w-[11400px] flex h-[57px] justify-between items-center pb-5">
                <div className="font-bold text-[28px] text-[#131313]">

                    <Link to='/home'> <img className='w-[120px] h-[56px]' src={logo} alt="" /></Link>

                </div>
                <div className='items-center'>
                    {location.pathname !== "/login" && (
                        <input className={`w-[370px] h-[44px] rounded-[5px] border  font-medium font-montserrat text-[16px] ${textColor} p-5' type="text"`} name="search" id="search" placeholder='Search your Destination...' />
                    )}
                </div>
                <div className="flex gap-6">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            `text-[16px] font-medium font-montserrat text-center pt-2.5 ${textColor}
                            ${isActive ? 'text-[18px] font-medium font-montserrat text-center pt-2.5 underline ' : 'text-[16px] font-medium font-montserrat text-center pt-2.5 '}`
                        }
                    >
                        News
                    </NavLink>


                    <NavLink
                        to="/destination"
                        className={({ isActive }) =>
                            `text-[16px] font-medium font-montserrat text-center pt-2.5 ${textColor} 
                            ${isActive ? 'text-[18px] font-medium font-montserrat text-center pt-2.5 ' : 'text-[16px] font-medium font-montserrat text-center pt-2.5 '}`
                        }
                    >
                        Destination
                    </NavLink>



                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-[16px] font-medium font-montserrat text-center pt-2.5 ${textColor}
                            ${isActive ? 'text-[18px] font-medium font-montserrat text-center pt-2.5 ' : 'text-[16px] font-medium font-montserrat text-center pt-2.5 '}`
                        }
                    >
                        Blog
                    </NavLink>


                    <NavLink
                        to="/OrderList"
                        className={({ isActive }) =>
                            `text-[16px] font-medium font-montserrat text-center pt-2.5 ${textColor}
                            ${isActive ? 'text-[18px] font-medium font-montserrat text-center pt-2.5 ' : 'text-[16px] font-medium font-montserrat text-center pt-2.5 '}`
                        }
                    >
                        Contact
                    </NavLink>



                    {
                        !user ? <Link to="/login">
                            <button className='w-[104px] h-[44px] bg-[#F9A51A] rounded-[5px] font-montserrat font-medium text-[16px] text-[#000000]'>Login</button>
                        </Link>
                            :
                            <button onClick={handleLogout} className='w-[104px] h-[44px] bg-[#F9A51A] rounded-[5px] font-montserrat font-medium text-[16px] text-[#000000]'>Logout</button>
                    }



                </div>

            </nav>
        </div>
    );
};

export default Navbar;