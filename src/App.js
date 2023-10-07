
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=9
  apiKey='12e85bd428f641fc8756dc9fc9846b1f'
   state ={
    progress:0
   }

   setProgress=(progress)=>{
    this.setState({progress:progress})
   }
  country='in'
  render() {
    return (
      <>
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <div>
        <Routes>
          
          
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="general" pageSize={this.pageSize} country={this.country} category="general"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={this.country} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment"/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={this.country} category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={this.country} category="health"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={this.country} category="science"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={this.country} category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={this.country} category="technology"/>}></Route>
          </Routes>
          </div>
        </Router>
        

      </div>
      </>)
  }
}



