import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import * as _ from "lodash";
import Product from "./Product";
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
        ///Need to create an instance function of debounce from the instance member functions.
        ///This is needed since lodash is stateful.
        ///If leading true we will trigger event right away and cancel all calls for time specified.
        ///If trailing true then we trigger with again if there is another call(if the is one) at end of time.
        this.start = _.debounce(this.start,500,{leading:true, trailing:false});
        this.moveTouch = _.debounce(this.moveTouch,500,{leading:true, trailing:false});
        //Needs to be different since we need to move when we have pushed down on mouse.
        this.move = _.throttle(this.move,500,{leading:false, trailing:true});
        this.end = _.throttle(this.end,10,{leading:false, trailing:true});
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
    //Use this to get the original position of touch or mouse down.
    start(event){
        console.log("start");
        this.isTouching = true;
        if(typeof event.clientX !== 'undefined'){
	        this.xS = event.clientX;     // Get the horizontal coordinate
	        this.yS = event.clientY;     // Get the vertical coordinate
        }else if(event.touches[0].clientX !== 'undefined'){
            this.xS = event.touches[0].clientX;
            this.yS = event.touches[0].clientY;
        }
    }
    ///Only need a single method since you are mouse down when you are using touch screen.
    moveTouch(event){
	    console.log("Move touch");
        if(event.touches !== null && event.touches.length !== 0){
	        this.xE = event.touches[0].clientX;
	        this.yE = event.touches[0].clientY;
	    }
	    if(this.xE - this.xS >0){
	        this.moveRight();
	        console.log(this.xE-this.xS + "  left.")
	    }else if(this.xE - this.xS <0){ 
	        this.moveLeft();   
	        console.log(this.xE-this.xS + "  right.")
	    }else{
	        console.log(this.xE-this.xS + "  No change of displacement.")
        }


    }
    move(event){
        if(this.isTouching){
            if(typeof event.clientX !== 'undefined'){
                this.xE = event.clientX;    
                this.yE = event.clientY;     
            }
	        console.log("Move touch");
	        if(this.xE - this.xS >0){
	            this.moveRight();
	            console.log(this.xE-this.xS + "  left.")
	        }else if(this.xE - this.xS <0){ 
	            this.moveLeft();   
	            console.log(this.xE-this.xS + "  right.")
	        }else{
	            console.log(this.xE-this.xS + "  No change of displacement.")
	        }
        }
    }
    end(event){
        console.log("end");
        this.isTouching = false;
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
            ///Need this to get the original position.
            onTouchStart={(event)=> { event.persist(); event.preventDefault();  this.start(event) }}
            //Called when touched and moved
            onTouchMove={(event)=> { event.persist(); event.preventDefault();  this.moveTouch(event) }}
            //Called when mouse down
            onMouseDown={(event)=> { event.persist(); event.preventDefault();  this.start(event) }}
            ///Called when mouse is DOWN OR UP and over element
            onMouseMove={(event)=> { event.persist(); event.preventDefault();  this.move(event) }}
            ///Called once when mouse comes up
            onMouseUp={(event)=> { event.persist(); event.preventDefault();  this.end(event) }}
             className="products">
                <div className="products__box"> 
                    <h2 className="products__box__title"> {this.props.title} </h2>
                    <div className={"products__box__items__list"}>    
	                    <ReactCSSTransitionGroup
	                        className="products__box__items__list"
	                        transitionName={this.state.direction}
	                        transitionEnterTimeout={500}
	                        transitionLeaveTimeout={500}>
	                        {items}
	                    </ReactCSSTransitionGroup> 
	                    <button onClick = {this.moveLeft.bind(this)} className={"products__box__items__button products__box__items__button__left"  }> </button>
	                    <button onClick = {this.moveRight.bind(this)} className={"products__box__items__button products__box__items__button__right" }> </button>
                    </div>
                </div>
                  
            </div>
        )
    }
}

