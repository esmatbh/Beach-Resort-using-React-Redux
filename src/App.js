
import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import Rooms from './pages/rooms'
import SingleRoom from "./pages/singleRoom";
import Error from './pages/error';
import {Route,Switch}from 'react-router-dom';
import Navbar from './Components/Navebar';
import {typeFilter,guestsFilter,priceFilter,sizeFilter,breakfastFilter,petsFilter}from './action/actions';
import { connect } from "react-redux";


class App extends Component {


  render() {
  
    return (
      
      <div>
      
        <Navbar />
       
      <Switch>
        
      <Route path='/' exact  render={(props) => (
    <Home {...props} newState={this.props.newState}  />
  )}   />

  {/* without routing :to pass props object to child component use <parent  {...propsObject} */}
   {/* 
     with route:  to pass props through  use : render={(props) => (
    <Dashboard {...props} isAuthed={true} />
  )}
  for more information follow this link:
     https://ui.dev/react-router-v4-pass-props-to-components/
      */}


     {/*to pass all props to child component use  render={(props) => (
        <parent {...props})(in class component, the props is:this.props) />  
        Or use render={(props) => (
        <parent {... [props,this.props]}) use "props" if you want props :params, match, location,... */}

      <Route exact path='/rooms' render={(props) => (
             <Rooms {...this.props}  />
  )}/>
      <Route  path='/rooms/:parms' render={(props) => (
    <SingleRoom {...[props,this.props]}  />
  )} />
      <Route  component={Error}/>
      </Switch>

      </div>
    );
  }
}

export default connect((state)=>{
  console.log(state);
  return {newState:state}},{typeFilter,guestsFilter,priceFilter,sizeFilter,breakfastFilter,petsFilter}) (App);
