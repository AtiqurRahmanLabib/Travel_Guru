import React from 'react';
import bgImage from "../../assets/images/Rectangle 1.png";
import Navbar from "../../Components/Navbar/Navbar";
const Destination = () => {
    return (
        <div className="relative min-h-screen w-full">
            {/* Navbar */}
            <div className="relative z-20 pt-1 ">
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
                <div className="container flex justify-around  items-center">
                    <div className="title pl-15">
                        <h1 className="text-[97.68px] text-[#FFFFFF] font-BebasNeue">Cox's Bazar</h1>
                        <p className="font-montserrat text-[16px] text-white">
                            Cox's Bazar is a city, fishing port, tourism centre and <br />
                            district headquarters in southeastern Bangladesh. It is <br />
                            famous mostly for its long natural sandy beach, and it ...
                        </p>
                    </div>
                    <div className='w-[470px] h-[427px] bg-[#FFFFFF] rounded-[5px]  '>
                        <div className='grid mx-auto justify-center p-9'>
                            <label className='text-[16px] text-[#818181] font-montserrat font-medium' htmlFor="origin">Origin</label>
                            <input className='bg-[#F2F2F2] w-[417px] h-[60px] rounded-[5px] mt-2' type="text" name='origin' placeholder='' />
                            <label className='text-[16px] text-[#818181] font-montserrat font-medium mt-2' htmlFor="Destination">Destination</label>
                            <input className='bg-[#F2F2F2] w-[417px] h-[60px] rounded-[5px] mt-2' type="text" name='Destination' placeholder='' />
                        </div>
                        <div className='flex mx-auto justify-center gap-2 '>
                            <div className='grid '>
                                <label className='text-[16px] text-[#818181] font-montserrat font-medium' htmlFor="from">From</label>
                                <input className='bg-[#F2F2F2] w-[200px] h-[60px] rounded-[5px] mt-2 p-5' type="date" name='date' placeholder='' />
                            </div>
                            <div className='grid'>
                                <label className='text-[16px] text-[#818181] font-montserrat font-medium' htmlFor="to">To</label>
                                <input className='bg-[#F2F2F2] w-[200px] h-[60px] rounded-[5px] mt-2 p-5' type="date" name='to' placeholder='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;