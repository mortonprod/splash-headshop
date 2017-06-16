import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import lo from "lodash";

import "./Products.css";
export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth, 
            height: window.innerHeight,
            start:0,
            end:100,
            direction:"" 
        }
    }
    componentDidMount() {

    }
    componentWillMount(){
        window.addEventListener('resize', lo.throttle(this.updateWindowDimensions.bind(this),500));
        this.updateWindowDimensions();

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        //The number of boxes between start and stop before resize - the number it should be to get the end.
        let numNow = this.state.end -  this.state.start;
        let end = this.state.end - (numNow - this.getNumBoxes());

        this.setState({ 
            start:this.state.start,
            end:end,
            direction:"moveUp" 
        });
    }
    getNumBoxes(){
        return Math.floor(window.innerWidth/this.props.childWidth);
    }
    moveLeft(){
        let newStart = this.state.start+this.getNumBoxes();
        let newBoxes = this.state.end+this.getNumBoxes();

        if(newBoxes > this.props.data.length){
            newStart= 0;
            newBoxes = this.getNumBoxes();
        }

        this.setState({ 
            width: this.state.width, 
            height: this.state.height,
            start:0,
            end:0,
            direction:"moveLeft"
        });
        setTimeout(()=> {
        this.setState({ 
            width: this.state.width, 
            height: this.state.height,
            start:newStart,
            end:newBoxes,
            direction:"moveLeft"
        });
        },500);
    }
    moveRight(){
        let newStart = this.state.start-this.getNumBoxes();
        let newBoxes = this.state.end-this.getNumBoxes();
        if(newStart < 0){
            newStart= this.props.data.length-this.getNumBoxes();
            newBoxes = this.props.data.length - 1;
        }

        this.setState({ 
            width: this.state.width, 
            height: this.state.height,
            start:0,
            end:0,
            direction:"moveRight"
        });
        setTimeout(()=> {
        this.setState({ 
            width: this.state.width, 
            height: this.state.height,
            start:newStart,
            end:newBoxes,
            direction:"moveRight"
        });
        },500);
    }
    render(){
        let items = [];
        for (let i = this.state.start; i < this.state.end; i++) {
            items.push(
                <Product
                    key={i} 
                    src={this.props.data[i].pic}
                    name={this.props.data[i].name}
                    description={this.props.data[i].description}
                    price={this.props.data[i].price}>
                </Product>
            )
        }
        if(this.state.direction === ""){
            console.log("Direction not set.")
        }
        return (
            <div className="products">
                <div className="products__box"> 
                    <h2 className="products__box__title"> {this.props.title} </h2>    
                    <ReactCSSTransitionGroup
                        className="products__box__list"
                        transitionName={this.state.direction}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {items}
                    </ReactCSSTransitionGroup> 
                    <button onClick = {this.moveLeft.bind(this)} className={"products__button"}> <span>Left </span> </button>
                    <button onClick = {this.moveRight.bind(this)} className={"products__button"}> <span>Right </span> </button>
                </div>
                  
            </div>
        )
    }
}

class Product extends Component {
  componentDidMount(){
  }
  render() {
    return (
        <div className="product">
            <img src={this.props.src} className="product__image" alt="logo" />
            <h3>{this.props.name}</h3>
            <h4>{this.props.description}</h4>
            <button className={"product__button"}> <span>£ {this.props.price} </span> </button>
        </div>
    )
        
  }
}