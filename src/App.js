import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import NewsWithBtn from './components/NewsWithBtn';
import NoPage from './components/NoPage'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {


  render() {
    let newsVar = {
      pageSize: 9,
      country: 'IN',
      apiKey: 'b32d0fd96a86430a96c189b917b72382',
    };
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'general'} />}>
          </Route>
          <Route exact path="/business" element={<News key="business" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'business'} />}>
          </Route>
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'entertainment'} />}>
          </Route>
          <Route exact path="/general" element={<News key="general" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'general'} />}>
          </Route>
          <Route exact path="/health" element={<News key="health" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'health'} />}>
          </Route>
          <Route exact path="/science" element={<News key="science" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'science'} />}>
          </Route>
          <Route exact path="/sports" element={<News key="sports" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'sports'} />}>
          </Route>
          <Route exact path="/technology" element={<News key="technology" apiKey={newsVar.apiKey} pageSize={newsVar.pageSize} country={newsVar.country} category={'technology'} />}>
          </Route>
          <Route exact path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    )
  }
}