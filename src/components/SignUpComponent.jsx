import React from "react";
import chefMattImg from "../assets/chefMattImg.png";
import subs from "../assets/subs.png";
import meetthechefImg from "../assets/meetthechefImg.png";
import recipe from "../assets/recipe.png";
import signupbg from "../assets/signupbg.png";

const SignUpComponent = () => {
  return (
    <div id="meetthechef" className="mt-24 w-[100%] h-[990px]">
      <div className="w-[100%] bg-gray-400">
        <div className="flex ">
          <img src={subs} alt="" className="w-[50%]" />
          <img src={meetthechefImg} alt="" className="w-[50%] " />
        </div>
        <div className="flex ">
          <img src={recipe} alt="" className="w-[50%]" />
          <img src={chefMattImg} alt="" className="w-[50%] " />
        </div>
      </div>
      <div id="detailsComponents" className="relative">
        <img src={signupbg} alt="" className="w-[100%] " />
        <div className="absolute top-[20%] left-[60px] flex flex-col gap-10">
          <div>
            <div className="text-[32px]">SIGN UP SPECIAL PROMOTIONS</div>
            <div className="bg-white w-[500px] h-[4px]"></div>
          </div>
          <div className="text-[18px]">
            Get exclusive deals you wan't find anywhere else straight to your
            indox!
          </div>
          <div className="flex gap-5 items-center">
            <div className=" border-white border-2 ">
              <input
                type="text"
                className="w-[450px] h-[45px] bg-transparent placeholder-white pl-4 text-[16px] outline-none"
                placeholder="Enter email address"
              />
            </div>

            <div className="bg-custom w-[180px] pt-[12.1px] pb-[12.1px] text-center text-[16px] cursor-pointer">Subscribe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
