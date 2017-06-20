import React, { Component, findDOMNode } from 'react';
import Product from "./Product";
import * as _ from "lodash";

import "./ProductsMoveUp.css";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
//If the user has placed the productsMoveUp div at the middle of the view port. 
//Put more products at bottom moving the bottom away from the div parent.
export default class ProductsMoveUp extends Component {
    parentDiv = null;
    constructor(props){
        super(props);
        this.scroll = _.debounce(this.scroll,500,{trailing:false,leading:true});
        this.state = {num:this.getNumBoxes()}
    }
    scroll(event){
        let space = this.parentDiv.getBoundingClientRect().bottom - window.innerHeight;
        console.log("space: " +  space);
        let num = this.getNumBoxes(); 
        if(space < 10 && this.props.data.length - this.state.num > 0){//If more data show it.
            if(this.props.data.length - this.state.num > num){//If more data than group then show group number
                for(let i = 0; i < num; i++ ){
                    setTimeout(function(){
                        this.setState({num:this.state.num + 1});
                    }.bind(this),500*i);

                }
            }else if(space < 10 && this.props.data.length - this.state.num > 0 ) {//Only take what is left
                let finalPictures = this.props.data.length - this.state.num;
                for(let i = 0; i < finalPictures; i++ ){
                    setTimeout(function(){
                        this.setState({num:this.state.num + 1});
                    }.bind(this),500*i);
                }
            }else{
                console.log("Got them all.")
            }
        }

    }
    componentDidMount(){
        window.addEventListener('scroll', this.scroll.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.scroll.bind(this));
    }
    getNumBoxes(){
        return Math.floor(window.innerWidth/this.props.childWidth);
    }
    render(){
        let total = 0;
        let items = [];
        if(this.state.num > this.props.data.length){ //Make sure we do not ask for more than we have.
            total = this.props.data.length
        }else{
            total = this.state.num
        }
        for (let i = 0; i < this.state.num; i++) {
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
        return (
            <div className="productsUp"
              ref={(el)=> {this.parentDiv = el}}> 
                <h2 className="productsUp__title"> {this.props.title} </h2>    
                <ReactCSSTransitionGroup
                    className="productsUp__list"
                    transitionName={"productsUp"}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {items}
                </ReactCSSTransitionGroup> 
            </div>
        )
    }

}