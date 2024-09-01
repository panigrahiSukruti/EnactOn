import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "../components/Navbar";
import leaves from "../assets/leaves.png";
import closeIcon from "../assets/close.png";
import navbarIcon from "../assets/coolicon.png";
import chefmate from "../assets/chefmateText.png";
import Slider from "../components/Slider";
import Products from "../components/Products.jsx";
import OnlineCard from "../components/OnlineCard.jsx";
import DetailsComponent from "../components/DetailsComponent.jsx";

const HomePage = () => {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const handleNavBar = () => {
    if (navbarStatus) {
      setNavbarStatus(false);
      return;
    }
    setNavbarStatus(true);
  };
  return (
    <div>
      <header>
        <div className="absolute z-20">
          <img
            src={closeIcon}
            className="absolute z-10 top-8 left-16 cursor-pointer"
            onClick={handleNavBar}
          ></img>
          {!navbarStatus ? (
            <div className="flex justify-center items-center bg-black opacity-80 w-[155px] h-[900px] absolute border-custom border-r-8">
              <img
                src={navbarIcon}
                className="absolute z-10 top-10 left-14 cursor-pointer"
                onClick={handleNavBar}
              />
              <img src={chefmate} className="h-[500px]  pl-8" />
            </div>
          ) : (
            <></>
          )}
          {navbarStatus ? <Navbar></Navbar> : <></>}
        </div>
        <div id="home" className="w-[100%] h-[900px] z-0">
          <Slider></Slider>
        </div>
      </header>
      <Link to="meetthechef" smooth={true} duration={1000}>
        <div className="absolute top-[680px] left-[48%] z-10 text-white border-[3px] p-[12px] w-[290px] text-center text-xl cursor-pointer ">
          Meet Chef Matt
        </div>
      </Link>

      <div id="products" className="h-[100vh] bg-color1">
        <img src={leaves} className="absolute top-[800px] left-[14%]" />
        <Products></Products>
      </div>
      <div className="flex justify-end h-[100%] w-[100%] bg-color1 ">
        <OnlineCard></OnlineCard>
      </div>
      <footer>
        <div className="flex justify-end h-[100%] w-[100%] bg-color1 ">
          <DetailsComponent></DetailsComponent>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
