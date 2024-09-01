import React from "react";
import customer from "../assets/Costumer.png";
import quality from "../assets/Quality.png";
import shippping from "../assets/Shipping.png";
import chefmatt from "../assets/chefmateTextRotated.png";
import SignUpComponent from "./SignUpComponent";

const DetailsComponent = () => {
  return (
    <div className="text-white h-[100%] w-[88%]">
      <SignUpComponent></SignUpComponent>
      <div className="flex justify-around  mb-[60px]">
        <div className="flex flex-col">
          <div className="flex justify-center items-start gap-4">
            <img className="w-[28px]" src={shippping} alt="img" />
            <div>
              <div className="text-custom text-[20px] mb-1">
                FREE SHIPPING WORLDWIDE
              </div>
              <div className="text-[16px]">Guaranteed Delivery</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-start gap-4">
            <img className="w-[28px]" src={customer} alt="img" />
            <div>
              <div className="text-custom text-[20px] mb-1">
                24/7 CUSTOMER SERVICE
              </div>
              <div className="text-[16px]">Text Us 24/7 at 070-7782-9137</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-start gap-4">
            <img className="w-[28px]" src={quality} alt="img" />
            <div>
              <div className="text-custom text-[20px] mb-1">
                QUALITY GUARANTEE!
              </div>
              <div className="text-[16px]">Send Within 30 Days</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom w-[100%] h-[5px]"></div>
      <div className="flex justify-center items-center">
        <img src={chefmatt} alt="" className="h-[130px] w-[400px] mt-10" />
      </div>
    </div>
  );
};

export default DetailsComponent;
