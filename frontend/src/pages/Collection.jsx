import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  console.log(showFilter);

  return (
    <div className="border-t flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* left Section */}
      <div className="min-w-60">
        <p
          className="text-xl flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          FILTER{" "}
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3.5 ${showFilter ? "rotate-0" : "rotate-90"} sm:hidden`}
          />
        </p>
        <div
          className={`border mt-5 flex flex-col gap-5 py-2 px-3.5 ${showFilter ? "hidden" : "block"}`}
        >
          <p>CATEGORIES</p>
          <div className="flex flex-col gap-2.5">
            <p className="flex gap-3 text-gray-600">
              <input type="checkbox" /> Men
            </p>
            <p className="flex gap-3  text-gray-600">
              <input type="checkbox" /> Women
            </p>
            <p className="flex gap-3  text-gray-600">
              <input type="checkbox" /> Kids
            </p>
          </div>
        </div>
        <div
          className={`border mt-5 flex flex-col gap-5 py-2 px-3.5 ${showFilter ? "hidden" : "block"}`}
        >
          <p>TYPE</p>
          <div className="flex flex-col gap-2.5">
            <p className="flex gap-3  text-gray-600">
              <input type="checkbox" /> Top Wear
            </p>
            <p className="flex gap-3  text-gray-600">
              <input type="checkbox" /> Bottom Wear
            </p>
            <p className="flex gap-3  text-gray-600">
              <input type="checkbox" /> Winter Wear
            </p>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-1">
        <div className="sm:text-2xl text-xl mb-3 sm:mb-7 flex items-center justify-between">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select className="border text-[16px] p-2.5">
            <option value="">Sort by:Relavent</option>
            <option value="">Sort by:Low to High</option>
            <option value="">Sort by:High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Collection;
