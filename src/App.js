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


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {isInfo:false};
  }
  componentDidMount(){
    let myVivus = new Vivus("arrow", {duration:"100",start:"autostart", file:arrow});
  }
  render() {
    const comp =  () =>{
        return (
	        <div>
		        <img src={closedEye} className="app__eye app__eye--delay0" alt="logo" />
		        <img src={openFullRedEye} className="app__eye app__eye--delay1" alt="logo" />
		        <img src={openLessRedEye} className="app__eye app__eye--delay2" alt="logo" />
		        <img src={openEye} className="app__eye app__eye--delay3" alt="logo" />
		        <img src={close1Eye} className="app__eye app__eye--delay4" alt="logo" />
		        <img src={close2Eye} className="app__eye app__eye--delay5" alt="logo" />
		        <img src={close3Eye} className="app__eye app__eye--delay6" alt="logo" />
		        <img src={close4Eye} className="app__eye app__eye--delay7" alt="logo" />
		        <img src={close5Eye} className="app__eye app__eye--delay8" alt="logo" />
		        <img src={close6Eye} className="app__eye app__eye--delay9" alt="logo" />
		        <img src={close7Eye} className="app__eye app__eye--delay10" alt="logo" />
		        <img src={head} className="app__eye app__eye--delay11" alt="logo" />
		        <Link to={"/info"} onClick={() => {this.setState({isInfo:true});}} id="arrow" className="app__arrow" alt="logo" ></Link>
	            <BoxTL name="box" duration={500} file={box} type="delayed">
	            </BoxTL>
	        </div>
	        
	    )
    }

    const info = () =>{
        return (
            <div>
             <h1>Info</h1>
            </div>
        )
    }
    return (
     <Router>
        <div className="app">
            <Route exact path="/" component={comp}/>
            <Route path="/info" component={info}/>
        </div>
      </Router>

    );
  }
}

export default App;


class BoxTL extends Component {
  componentDidMount(){
    let myVivus = new Vivus("box", {duration:"100",start:"autostart", file: box});
  }
  render() {
    return (
      <div className="box">
         <object id="box"></object>
         {this.props.children}
      </div>
    );
  }
}


      //  <img src={closedEye} className="app__eye app__eye--delay0" alt="logo" />
//        <img src={openFullRedEye} className="app__eye app__eye--delay1" alt="logo" />
 //       <img src={openLessRedEye} className="app__eye app__eye--delay2" alt="logo" />
  //      <img src={openEye} className="app__eye app__eye--delay3" alt="logo" />
   //     <img src={close1Eye} className="app__eye app__eye--delay4" alt="logo" />
    //    <img src={close2Eye} className="app__eye app__eye--delay5" alt="logo" />
     //   <img src={close3Eye} className="app__eye app__eye--delay6" alt="logo" />
    //    <img src={close4Eye} className="app__eye app__eye--delay7" alt="logo" />
   //     <img src={close5Eye} className="app__eye app__eye--delay8" alt="logo" />
   //     <img src={close6Eye} className="app__eye app__eye--delay9" alt="logo" />
    //    <img src={close7Eye} className="app__eye app__eye--delay10" alt="logo" />
     //   <img src={close8Eye} className="app__eye app__eye--delay11" alt="logo" />