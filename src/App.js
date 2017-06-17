import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

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

import googleC from './assets/Google_Color.svg';
import googleW from './assets/Google_White.svg';
import facebookC from './assets/Facebook_Color.svg';
import facebookW from './assets/Facebook_White.svg';
import twitterC from './assets/Twitter_Color.svg';
import twitterW from './assets/Twitter_White.svg';

import what from './assets/what.svg';
import whatElse from './assets/else.svg';

import Chose from "./chose"

import Store from "./store";

import createOnce from "./createvivus.js";

import Buy from "./buy";


import './App.css';

let infoContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"



class App extends Component {
  constructor(){
    super();
    this.state = {isMenu:false};
  }
  render() {
    let show = ""
    if(this.state.isMenu){//So we don't show animation everytime
     show = "show"   
    }
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
                     className={"app__container__eye app__container__eye--delay11 " + show}
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

    const info = () => {
        return (
        <div className="app__info">
            <object ref={() => {
                createOnce("info","500","autostart",aboutUs)                      
            }} className="app__box__info" id="info"></object>
            <p>
             {infoContent}
            </p>
            <object ref={() => {
                createOnce("left","1000","autostart",lines)                      
            }} className="app__info__left" id="left"></object>
            <object ref={() => {
                createOnce("right","1000","autostart",lines)                      
            }} className="app__info__right" id="right"></object>
        </div>
    )
    }
    let moveIn = ""
    if(this.state.isMenu){
        moveIn = "nav--moveIn"
    }
    //onClick ={()=>{
    //        this.setState({isMenu:false});
    //    }} className={"nav " + moveIn}
    let nav = (
        <div className={"app__nav__box"}>
          <h2> Boutique </h2>
          <div className={"app__nav__box__links"}>
		      <ul className={"app__nav__box__links__routes"}>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		        <li><Link to="/store">Store</Link></li>
                <li><Link to="/buy">Buy Selection</Link></li>
		      </ul>
	          <ul className="app__nav__box__links__social">
	            <li>
	                <a href="https://www.facebook.com/">
	                    <img src={facebookC} className="" alt="logo" />
	                </a>
	            </li>
	            <li>
	                <a href="https://twitter.com/?lang=en">
	                    <img src={twitterC} className="" alt="logo" />
	                </a>
	            </li>
	            <li>
	                <a href="/https://groups.google.com/forum/#!overview">
	                    <img src={googleC} className="" alt="logo" />
	                </a>
	            </li>

	          </ul>
          </div>
          </div>
    )
    return (

     <Router>
        <div className="app">
	    <Fade>
	        <Switch>
	            <Route exact path="/" component={Chose}/>
	            <Route exact path="/Home" component={comp}/>
	            <Route path="/about" component={info}/>
	            <Route path="/store" component={Store}/>
	            <Route path="/boutique" component={Store}/>
                <Route path="/buy" component={Buy}/>
	        </Switch>
	    </Fade>
        <img 
            onClick= { () =>{
                let menu = true;
                if(this.state.isMenu){
                    menu = false;
                }
                this.setState({isMenu:menu})
            }} 
            src={menu} className="app__nav__button" alt="logo" 
        />
        {nav}
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
