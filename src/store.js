
import React, { Component } from 'react';
import lines from './assets/lines.svg';
import storeSvg from './assets/store.svg';



import Vivus from 'vivus';


import Products from "./Products";
import * as _ from "lodash";
import "./store.css";


import getData from "./productsData";

import ProductsMoveUp from "./ProductsMoveUp";

let isMounted= false;
export default class Store extends Component {
    constructor(){
        super();
        //Must throttle the scroll events so we do not lose any like debounce.
        this.scroll = _.throttle(this.scroll,10);
        this.state = {translateY:0}
    }
    componentDidMount(){
        isMounted = true;
        window.addEventListener('scroll', this.scroll.bind(this));
    }
    scroll(event){
        let scrollTop = -1*event.srcElement.body.scrollTop*this.props.speed;
        this.setState({translateY:scrollTop});

    }
    getNumBoxes(){
        return Math.floor(window.innerWidth/this.props.childWidth);
    }
    render(){
        let  storeTitle = null;
        if(!isMounted){
            storeTitle = (
                <object style={{transform:'translateY(' + this.state.translateY + 'px)'}}
                    src={storeSvg} 
                    ref={() => {
                        new Vivus("store",{duration:"2000",start:"autostart",file:storeSvg}); 
                    }} 
                    className="store__title" id="store">
                </object>
            )
        }else{
            storeTitle = (
                <img style={{transform:'translateY(' + this.state.translateY + 'px)'}}
                    src={storeSvg} className={"store__title"} alt="chose"
                />
            )
        }
	    return (
		    <div className="store">
                {storeTitle}  
                <div className="store__content">
                <h1>Check out the latest offers</h1>
                <Products title={""} childWidth={220} data={getData().offers}/>
                <Products title={"What other were interested in"} childWidth={220} data={getData().data}/>
                <ProductsMoveUp 
                    title={"Everything"} 
                    childWidth={220} 
                    data={getData().data}
                />
                </div>
		    </div>
	    )
    }
}

Store.defaultProps = {
    speed:0.5
}