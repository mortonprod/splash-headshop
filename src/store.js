
import React, { Component } from 'react';
import lines from './assets/lines.svg';
import storeSvg from './assets/store.svg';



import Vivus from 'vivus';


import Products from "./Products";

import "./store.css";


import getData from "./productsData";

let isMounted= false;
export default class Store extends Component {
    componentDidMount(){
        isMounted = true;
    }
    render(){
        let  storeTitle = null;
        if(!isMounted){
            storeTitle = (
                <object src={storeSvg} ref={() => {
                    new Vivus("store",{duration:"500",start:"autostart",file:storeSvg}); 
                }} className="store__title" id="store"></object>
            )
        }else{
            storeTitle = (
                <img src={storeSvg} className={"store__title"} alt="chose"/>
            )
        }
	    return (
		    <div className="store">
                {storeTitle}  
                <h1>Check out the latest offers</h1>
                <Products title={""} childWidth={220} data={getData().offers}/>
                <Products title={"What other were interested in"} childWidth={220} data={getData().data}/>
		    </div>
	    )
    }
}