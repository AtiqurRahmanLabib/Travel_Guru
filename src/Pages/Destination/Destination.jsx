import React from "react";
import { useLocation } from "react-router-dom";
import bgImage from "../../assets/images/Rectangle 1.png";
import Navbar from "../../Components/Navbar/Navbar";

const Destination = () => {
    const location = useLocation();
    const place = location.state?.place || { name: "Cox's Bazar", details: "Default details about the place." };

    return (
        <div className="relative min-h-screen w-full">
            {/* Navbar */}
            <div className="relative z-20 pt-1">
                <Navbar />
            </div>

            {/* Background Image with Overlay */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Main Content */}
            <div className="relative z-10 flex justify-center items-center h-full mt-20">
                <div className="container flex justify-around items-center">
                    <div className="title pl-15">
                        <h1 className="text-[97.68px] text-[#FFFFFF] font-BebasNeue">{place.name}</h1>
                        <p className="font-montserrat text-[16px] text-white w-[445px]">
                            {place.details}
                        </p>
                    </div>
                    <div className='w-[470px] h-[427px] bg-[#FFFFFF] rounded-[5px]'>
                        <div className='grid mx-auto justify-center p-5'>
                            <label className='text-[16px] text-[#818181] font-montserrat font-medium' htmlFor="origin">Origin</label>
                            <input className='bg-[#F2F2F2] w-[417px] h-[60px] rounded-[5px] mt-2' type="text" name='origin' />
                            <label className='text-[16px] text-[#818181] font-montserrat font-medium mt-2' htmlFor="Destination">Destination</label>
                            <input className='bg-[#F2F2F2] w-[417px] h-[60px] rounded-[5px] mt-2' type="text" name='Destination' value={place.name} readOnly />
                        </div>
                        <div className='flex mx-auto justify-center gap-2'>
                            <div className='grid'>
                                <label className='text-[16px] text-[#818181] font-montserrat font-medium' htmlFor="from">From</label>
                                <input className='bg-[#F2F2F2] w-[200px] h-[60px] rounded-[5px] mt-2 p-5' type="date" name='date' />
                            </div>
                            <div className='grid'>
                                <label className='text-[16px] text-[#818181] font-montserrat font-medium' htmlFor="to">To</label>
                                <input className='bg-[#F2F2F2] w-[200px] h-[60px] rounded-[5px] mt-2 p-5' type="date" name='to' />
                            </div>
                        </div>
                       <div className="mx-auto">
                       <div className="mx-auto pt-5 items-center w-[417px]">
                            <button className="w-[417px]  h-[60px] bg-[#F9A51A] rounded-[5px]">Booking</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;
