
import React from "react";
import Navebar from "./Navebar";
import Carousel from "./Carousel";
import Cardes from "./Cardes";
import Product from "./Product";
import Footers from "./Footers";


function AllHomePage() {
  return (
    <div>
      <Navebar />
      <Carousel />
      <Cardes />
      <Product />
      <Footers />
    </div>
  );
}

export default AllHomePage;
