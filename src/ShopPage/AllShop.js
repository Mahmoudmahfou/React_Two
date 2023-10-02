import { Component } from "react";
import Navebar from "../AllHome/Navebar";
import Product from "../AllHome/Product";
import Cardes from "../AllHome/Cardes";

import React from 'react';

class AllShop extends Component{
    render(){
        return(
            <div>
                <Navebar/>
                <Product/>
                <Cardes/>
            </div>
        )
    }
}

export default AllShop;


