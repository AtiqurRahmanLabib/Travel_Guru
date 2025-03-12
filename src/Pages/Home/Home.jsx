import React, { useState } from "react";
import bgImage from "../../assets/images/Rectangle 1.png";
import Navbar from "../../Components/Navbar/Navbar";
import Sajek from '../../assets/images/Sajek.png';
import Sreemongol from '../../assets/images/Sreemongol.png';
import Sundorbon from '../../assets/images/sundorbon.png';
import arrow1 from '../../assets/icons/Group 3.png';
import arrow2 from '../../assets/icons/Group 4.png';

const locations = [
  { name: "Sajek", image: Sajek },
  { name: "Sreemongol", image: Sreemongol },
  { name: "Sundorbon", image: Sundorbon }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % locations.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + locations.length) % locations.length);
  };

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
        <div className="container flex justify-center gap-6">
          <div className="title mt-11">
            <h1 className="text-[97.68px] text-[#FFFFFF] font-BebasNeue">{locations[activeIndex].name}</h1>
            <p className="font-montserrat text-[16px] text-white">
              Cox's Bazar is a city, fishing port, tourism centre and <br />
              district headquarters in southeastern Bangladesh. It is <br />
              famous mostly for its long natural sandy beach, and it ...
            </p>
            <button className="mt-5 w-[161px] h-[41px] bg-[#F9A51A] rounded-[5px] text-[16px] font-montserrat]">
              Booking
            </button>
          </div>

          <div className="img-container">
            <div className="flex gap-6">
              {locations.map((location, index) => (
                <img
                  key={index}
                  className={`w-[270px] h-[416px] rounded-[20px] ${index === activeIndex ? 'border-4 border-yellow-500' : ''}`}
                  src={location.image}
                  alt={location.name}
                />
              ))}
            </div>
            <div>
              <div className="flex gap-6 mt-16">
                <img className="w-[47px] h-[47px] cursor-pointer" src={arrow1} alt="Prev" onClick={handlePrev} />
                <img className="w-[47px] h-[47px] cursor-pointer" src={arrow2} alt="Next" onClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
