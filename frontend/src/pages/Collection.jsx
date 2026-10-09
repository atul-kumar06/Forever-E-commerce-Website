import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);

  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleFilter = () => {
    // Only toggle on mobile devices
    if (window.innerWidth < 640) {
      setShowFilter(!showFilter);
    }
  };

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => {
        return prev.filter((item) => item !== e.target.value);
      });
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (search && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    setfilterProducts(productsCopy);
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category),
      );
    }
    setfilterProducts(productsCopy);

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }
    setfilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let fpcopy = filterProducts.slice();

    switch (sortType) {
      case "low-to-high":
        setfilterProducts(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-to-low":
        setfilterProducts(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="border-t flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Left Section */}
      <div className="min-w-60">
        <p
          className="text-xl flex items-center gap-2 cursor-pointer sm:cursor-default"
          onClick={toggleFilter}
        >
          FILTER{" "}
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3.5 ${showFilter ? "rotate-90" : ""} sm:hidden`}
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border mt-5 flex flex-col gap-5 py-2 px-3.5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p>CATEGORIES</p>
          <div className="flex flex-col gap-2.5">
            <p className="flex gap-3 text-gray-600">
              <input type="checkbox" value={"Men"} onChange={toggleCategory} />{" "}
              Men
            </p>
            <p className="flex gap-3 text-gray-600">
              <input
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              Women
            </p>
            <p className="flex gap-3 text-gray-600">
              <input type="checkbox" value={"Kids"} onChange={toggleCategory} />{" "}
              Kids
            </p>
          </div>
        </div>

        {/* Sub-Category / Type Filter */}
        <div
          className={`border mt-5 flex flex-col gap-5 py-2 px-3.5 ${
            showFilter ? "" : "hidden"
          } sm:block mb-2.5`}
        >
          <p>TYPE</p>
          <div className="flex flex-col gap-2.5">
            <p className="flex gap-3 text-gray-600">
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              Top Wear
            </p>
            <p className="flex gap-3 text-gray-600">
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              Bottom Wear
            </p>
            <p className="flex gap-3 text-gray-600">
              <input
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              Winter Wear
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <div className="sm:text-2xl text-xl mb-3 sm:mb-7 flex items-center justify-between">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          <select
            className="border text-[16px] p-2.5"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-to-high">Sort by: Low to High</option>
            <option value="high-to-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Item Render */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6  ">
          {filterProducts.map((item, idx) => (
            <ProductItem
              id={item._id}
              image={item.image}
              key={idx}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
