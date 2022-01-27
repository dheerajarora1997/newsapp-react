import './App.css';
import React, { Component, useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsWithBtn from './components/NewsWithBtn';
import NoPage from './components/NoPage'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    let newsVar = {
      pageSize: 9,
      country: 'IN',
      apiKey: process.env.REACT_APP_NEWS_API,
    };
    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#f1f1f1'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'general'} />}>
          </Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'business'} />}>
          </Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'entertainment'} />}>
          </Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'general'} />}>
          </Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'health'} />}>
          </Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'science'} />}>
          </Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'sports'} />}>
          </Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'technology'} />}>
          </Route>
          <Route exact path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    )
  }
}