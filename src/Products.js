import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import * as _ from "lodash";

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
        this.start = _.debounce(this.start,3000,{leading:true});
        this.move = _.debounce(this.move,3000,{leading:true});
        this.end = _.debounce(this.end,3000,{leading:true});
    }
    componentDidMount() {

    }
    componentWillMount(){
        window.addEventListener('resize', _.throttle(this.updateWindowDimensions.bind(this),500));
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
    isTouching = false;
    xS = 0;
    yS = 0;
    xE = 0;
    yE = 0;
    start(event){
        console.log("start");
        event.persist();
        this.isTouching = true;
        if(typeof event.clientX !== 'undefined'){
	        this.xS = event.clientX;     // Get the horizontal coordinate
	        this.yS = event.clientY;     // Get the vertical coordinate
        }else if(event.touches[0].clientX !== 'undefined'){
            this.xS = event.touches[0].clientX;
            this.yS = event.touches[0].clientY;
        }
    }
    ///Only called when touch.mouse down but make check anyway.
    //Debounce is stateful so must not regenerate this for each re-render
    move(event){
        console.log("move");

        if(typeof event.clientX !== 'undefined'){
            this.xE = event.clientX;     // Get the horizontal coordinate
            this.yE = event.clientY;     // Get the vertical coordinate
        }else if(event.touches !== null && event.touches.length !== 0){
            this.xE = event.touches[0].clientX;
            this.yE = event.touches[0].clientY;
        }
        if(this.isTouching){
	        if(this.xE - this.xS >0){
                this.moveLeft();
                console.log(this.xE-this.xS + "  left.")
	        }else if(this.xE - this.xS <0){ 
                this.moveRight();   
                console.log(this.xE-this.xS + "  right.")
	        }else{
	            console.log(this.xE-this.xS + "  No change of displacement.")
	        }
        }

    }
    end(event){
        console.log("end");
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
            <div onMouseEnter ={ 
                () =>{ 
		            this.setState({ 
			            width: this.state.width, 
			            height: this.state.height,
			            start:this.state.start,
			            end:this.state.end,
			            direction:this.state.direction
		            });
                }
            }
            onTouchStart={
                (event)=> { event.persist(); this.start(event) }
            }
            onTouchMove={(event)=> { event.persist(); this.move(event) }}
            onTouchEnd={(event)=> { event.persist(); this.end(event) }}
            onMouseDown={(event)=> { event.persist(); this.start(event) }}
            onMouseMove={(event)=> { event.persist(); this.move(event) }}
            onMouseUp={(event)=> { event.persist(); this.end(event) }}
             className="products">
                <div className="products__box"> 
                    <h2 className="products__box__title"> {this.props.title} </h2>    
                    <ReactCSSTransitionGroup
                        className="products__box__list"
                        transitionName={this.state.direction}
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {items}
                    </ReactCSSTransitionGroup> 
                    <button onClick = {this.moveLeft.bind(this)} className={"products__button__left"  }> </button>
                    <button onClick = {this.moveRight.bind(this)} className={"products__button__right" }> </button>
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