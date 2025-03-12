import React from "react";
import bgImage from "../../assets/images/Rectangle 1.png";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Navbar */}
      <div className="relative z-20 pt-1 ">
        <Navbar/>
      </div>

      {/* Background Image with Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-white text-4xl font-bold">Welcome to Travel Guru</h1>
      </div>
    </div>
  );
};

export default Home;
