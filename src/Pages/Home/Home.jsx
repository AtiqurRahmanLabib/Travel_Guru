import React from "react";
import bgImage from "../../assets/images/Rectangle 1.png";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
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
      <div className="relative z-10 flex justify-center items-center h-full">

        <div>
          <div className="text">
            <h1 className="text-[97.68px] text-[#FFFFFF] font-BebasNeue">Cox's bazar</h1>
            <p className="font-montserrat text-[16px] text-white">Cox's Bazar is a city, fishing port, tourism centre and <br /> district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
            <button className="w-[161px] h-[41px] bg-[#F9A51A] rounded-[5px] text-[16px]  font-montserrat]">Booking</button>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
