import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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
import storeSvg from './assets/store.svg';

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


import './App.css';

let infoContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"

let nameStore = []
let animStore = []
function createOnce(name,duration,start,file){///Only run each animation once!
    console.log(nameStore.includes(name));
    if(!nameStore.includes(name)){
        let vi = new Vivus(name, {duration:duration, start:start, file:file});
       // vi.play();
        nameStore.push(name);
        animStore[name] = vi 
    }else{ 
        let st = new Vivus(name, {duration:1, file:file}).finish();
    }
}


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
    const store = () => {
        return (
        <div className="app__store">
            <object ref={() => {
                createOnce("store","500","autostart",storeSvg)                      
            }} className="app__store__title" id="store"></object>
             
                <Product 
                 src={box}
                 name={"Box"}
                 description={"A box what else can I say"}
                 price={5}>
                </Product>
                <Product 
                 src={arrow}
                 name={"Arrow"}
                 description={"A arrow what else can I say"}
                 price={5}>
                </Product>
                <Product 
                 src={head}
                 name={"Head"}
                 description={"A head what else can I say"}
                 price={10}>
                </Product>
             
            <object ref={() => {
                createOnce("leftStore","1000","autostart",lines)                      
            }} className="app__store__left" id="leftStore"></object>
            <object ref={() => {
                createOnce("rightStore","1000","autostart",lines)                      
            }} className="app__store__right" id="rightStore"></object>
        </div>
        )
    }
    let moveIn = ""
    if(this.state.isMenu){
        moveIn = "nav--moveIn"
    }
    let nav = (
        <div onClick ={()=>{
            this.setState({isMenu:false});
        }} className={"nav " + moveIn}>
        <div>
          <h2> What you'll find here </h2>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/store">Store</Link></li>
	      </ul>
          <h2> What you'll find out there </h2>
          <ul className="nav__bar--social">
            <li>
                <a href="https://www.facebook.com/">
                    <img src={facebookC} className="nav__social nav__social--color" alt="logo" />
                    <img src={facebookW} className="nav__social nav__social--white" alt="logo" />

                </a>
            </li>
            <li>
                <a href="https://twitter.com/?lang=en">
                    <img src={twitterC} className="nav__social nav__social--color" alt="logo" />
                    <img src={twitterW} className="nav__social nav__social--white" alt="logo" />
                </a>
            </li>
            <li>
                <a href="/https://groups.google.com/forum/#!overview">
                    <img src={googleC} className="nav__social nav__social--color" alt="logo" />
                    <img src={googleW} className="nav__social nav__social--white" alt="logo" />
                </a>
            </li>

          </ul>
          </div>
          </div>
    )
    return (
     <Router>
        <div className="app">
            <Route exact path="/" component={comp}/>
            <Route path="/about" component={info}/>
            <Route path="/store" component={store}/>
            <img onClick= { () =>{
                let menu = true;
                if(this.state.isMenu){
                    menu = false;
                }

                this.setState({isMenu:menu})
            }} src={menu} className="app__nav" alt="logo" />
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



