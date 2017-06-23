import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Vivus from 'vivus';
import "./buy.css";

import linesUnder from "./assets/linesUnderline.svg";
import semi from "./assets/semiCircle.svg";

import dress from './assets/tamara-bellis-256701.jpg'
let isMounted = false;
export default class Buy extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
        isMounted = true;
    }
    render() {
        let  unter = null;
        if(!isMounted){
            unter = (
                <object src={linesUnder} ref={() => {
                    new Vivus("linesUnderline",{duration:"500",start:"autostart",file:linesUnder}); 
                }} className="buy__underline" id="linesUnderline"></object>
            )
        }else{
            unter = (
                <img src={linesUnder} className={"buy__underline"} alt="chose"/>
            )
        }
        return(
        <div className={"buy"}>
            <img src={this.props.location.state.img} className="buy__image" alt="logo" />
            <div className={"buy__info"}>
                <img src={semi} className="buy__info__image" alt="logo" />
                <h2>
                    {this.props.location.state.title}
                </h2>
                <p>
                    {this.props.location.state.description}
                </p>
                <h3>
                    {this.props.location.state.price}
                </h3>
                <button onClick = {()=>{}} className={"buy__button" }> </button>
            </div>
            {unter}
        </div>
        )
    }
}

Buy.defaultProps = {
    title:"test name: Name Name Name",
    description:"test description: test test test test test test test test test test test test test test test test test test test test test test test test",
    price:"£5 + delivery £2.5",
    img:dress
}