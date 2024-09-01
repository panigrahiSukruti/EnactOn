import React from "react";
import OnlineProductSlider from "./OnlineProductSlider";

const OnlineCard = () => {
  return (
    <div className=" bg-white h-[340px] w-[88%]">
      <div>
        <div className="relative h-[340px] w-[100%]">
          <OnlineProductSlider></OnlineProductSlider>
          <div className="absolute top-[40px] left-[36%]  z-20 flex flex-col justify-center items-center gap-4">
            <div className="text-[30px]">ONLINE ONLY</div>
            <div className="bg-black w-[60px] h-[3px]"></div>
            <div className="text-center text-[16px]">
              GET 20% OFF YOUR ORDER OF $50 OR MORE
              <div>
                USE CODE <span className="font-bold">"Chef20"</span>
              </div>
            </div>
            <div className="border-[3px] border-black w-[80%] pt-3 pb-3 text-center mt-4 text-[18px] cursor-pointer">Shop Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCard;
