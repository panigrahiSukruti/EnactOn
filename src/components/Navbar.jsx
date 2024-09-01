import React from "react";
import chefmate from "../assets/chefmateTextRotated.png";
import bagIcon from "../assets/Bag_alt.png";
import favorite from "../assets/Favorite.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black opacity-80 w-[380px] h-[900px]"></div>
      <div className="absolute top-[0px] h-[98%] w-[100%] flex flex-col justify-between items-center text-white">
        <div className="flex flex-col justify-between items-start w-[100%]">
          <div className="mt-24">
            <img src={chefmate} className="w-[100%]" />
          </div>
          <div className="pl-10 flex flex-col gap-8 text-2xl cursor-pointer">
            <Link to="home" smooth={true} duration={1000}>
              <div className="hover:text-custom">HOME</div>
            </Link>
            <Link to="products" smooth={true} duration={1000}>
              <div className="hover:text-custom">PRODUCTS</div>
            </Link>
            <Link to="meetthechef" smooth={true} duration={1000}>
              <div className="hover:text-custom">MEET CHEF MATT</div>
            </Link>
            <Link to="home" smooth={true} duration={1000}>
              <div className="hover:text-custom">FAQ</div>
            </Link>
            <Link to="detailsComponents" smooth={true} duration={1000}>
              <div className="hover:text-custom">CONNECT WITH US</div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-5 w-[100%]">
          <div className="flex justify-evenly  w-[100%]">
            TEXT SUPPORT 24/7{" "}
            <span className="text-custom underline cursor-pointer">070-7782-9137</span>
          </div>
          <div className="bg-white w-[100%] h-[2px]"></div>
          <div className="flex justify-evenly w-[100%]">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <img src={bagIcon} alt="" />
              CART
            </div>
            <div className="flex gap-2 justify-center items-center cursor-pointer">
              <img src={favorite} alt="" />
              WISHLIST
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
