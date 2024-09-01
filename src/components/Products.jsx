import React from "react";
import ProductSlider from "./ProductSlider";

const Products = () => {
  return (
    <div className="w-[100%] flex justify-end absolute mt-[160px]">
      <div className="w-[88%]">
        <div className="ml-[50px]">
        <div >
          <h2 className="text-custom text-[34px]">CHEF MATT PRODUCTS</h2>
          <div className="bg-custom h-[4px] w-[560px] mt-[5px] mb-[20px]"></div>
        </div>
        <div className="text-white text-[20px]">
          Shop Gourmet Chef Quality products from the Chef Matt brand. <br />
          Chef it yourself and Thank us later.
        </div>
        </div>
        <div className="cursor-pointer">
          <ProductSlider></ProductSlider>
        </div>
      </div>
    </div>
  );
};

export default Products;
