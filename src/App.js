import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import * as _ from "lodash";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

import Vivus from 'vivus';
import redEye from './assets/red_eye.svg';
import closedEye from './assets/closed_eye.svg';
import openFullRedEye from './assets/eye_open_full_red.svg';
import openLessRedEye from './assets/eye_less_red.svg';
import openEye from './assets/eye_open.svg';
import close1Eye from './assets/eye_close1.svg';
import close2Eye from './assets/eye_close2.svg';
import close3Eye from './assets/eye_close3.svg';
import close4Eye from './assets/eye_close4.svg';
import close5Eye from './assets/eye_close5.svg';
import close6Eye from './assets/eye_close6.svg';
import close7Eye from './assets/eye_close7.svg';
import close8Eye from './assets/eye_close8.svg';
import head from './assets/head.svg';

import box from './assets/box.svg';
import arrow from './assets/arrow.svg';
import aboutUs from './assets/aboutUs.svg';

import lines from './assets/lines.svg';
import menu from './assets/menu.svg';



import what from './assets/what.svg';
import whatElse from './assets/else.svg';

import Chose from "./chose"

import Store from "./store";

import createOnce from "./createvivus.js";

import Buy from "./buy";
import About from "./about";
import Nav from "./nav";

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.scroll = _.throttle(this.scroll,10);
    this.state = {isDown:false,isNavButton:false};
  }
  componentDidMount(){
        window.addEventListener('scroll', this.scroll.bind(this));
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.scroll.bind(this));
  }

  render() {
    const comp =  () =>{
        return (
	            <BoxTL isOver={true} className={"app__container__box"} classContainer={"app__container--full"} name="box" duration={200} src={box} type="delayed">
	                <img src={closedEye} className="app__container__eye app__container__eye--delay0" alt="logo" />
	                <img src={openFullRedEye} className="app__container__eye app__container__eye--delay1" alt="logo" />
	                <img src={openLessRedEye} className="app__container__eye app__container__eye--delay2" alt="logo" />
	                <img src={openEye} className="app__container__eye app__container__eye--delay3" alt="logo" />
	                <img src={close1Eye} className="app__container__eye app__container__eye--delay4" alt="logo" />
	                <img src={close2Eye} className="app__container__eye app__container__eye--delay5" alt="logo" />
	                <img src={close3Eye} className="app__container__eye app__container__eye--delay6" alt="logo" />
	                <img src={close4Eye} className="app__container__eye app__container__eye--delay7" alt="logo" />
	                <img src={close5Eye} className="app__container__eye app__container__eye--delay8" alt="logo" />
	                <img src={close6Eye} className="app__container__eye app__container__eye--delay9" alt="logo" />
	                <img src={close7Eye} className="app__container__eye app__container__eye--delay10" alt="logo" />
	                <img src={head} 
                     className={"app__container__eye app__container__eye--delay11 "}
                     alt="logo" />
	                <Link ref={() => {
                        createOnce("arrow","100","autostart",arrow)
                    }} to={"/about"} id="arrow" className="app__container__arrow" alt="logo" ></Link>
                    <Link ref={() => {
                        createOnce("arrowDown","100","autostart",arrow)
                    }} to={"/store"} id="arrowDown" className="app__container__arrowDown" alt="logo" ></Link>
	            </BoxTL>
	        
	    )
    }

    return (

     <Router>
        <div className="app">
	    <Fade>
	        <Switch>
	            <Route exact path="/" component={Store}/>
	            <Route path="/about" component={About}/>
                <Route path="/buy" component={Buy}/>
                <Route path="/more" component={Chose}/>
	        </Switch>
	    </Fade>
        <Nav threshold={900}/>
        </div>
      </Router>

    );
  }
}

export default App;


class BoxTL extends Component {
  componentDidMount(){
    createOnce(this.props.name,this.props.duration,"autostart",this.props.src)
  }
  render() {
    let comp = null;
    if(!this.props.isOver){
	    comp =  (
            <div>
	          <object className={this.props.className} id={this.props.name}></object>
                {
                    React.Children.map(this.props.children, (child, i) => {
                        return child
                    })
                }
            </div>
    	    )
        
    }else{
            comp = (
              <div>
                {
                    React.Children.map(this.props.children, (child, i) => {
                        return child
                    })
                }
                <object className={this.props.className} id={this.props.name}></object>
              </div>
              
            )
        

    }
    return (
      <div className={this.props.classContainer}>
        {comp}
      </div>
    );
  }
}
class Fade extends Component {

    render() {
        return (
            <Route render={({location}) => (
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                    {React.cloneElement(this.props.children, {location: location, key: location.key})}
                </ReactCSSTransitionGroup>
            )}/>
        );
    }
}
