import { Component } from "react";
import Navebar from "../AllHome/Navebar";
import Cardes from "../AllHome/Cardes";
import React from 'react';


class AllAbout extends Component{
    render(){
        return(
            <div>
                <Navebar/>
                <Cardes/>
            </div>
        )
    }
}

export default AllAbout;