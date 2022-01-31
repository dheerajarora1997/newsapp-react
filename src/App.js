import './App.css';
import React, { Component, useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsWithBtn from './components/NewsWithBtn';
import NoPage from './components/NoPage'
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const country = 'IN';
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='#f1f1f1'
        progress={progress}
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country={country} category={'general'} />}>
        </Route>
        <Route exact path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country={country} category={'business'} />}>
        </Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country={country} category={'entertainment'} />}>
        </Route>
        <Route exact path="/general" element={<News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country={country} category={'general'} />}>
        </Route>
        <Route exact path="/health" element={<News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} country={country} category={'health'} />}>
        </Route>
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country={country} category={'science'} />}>
        </Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country={country} category={'sports'} />}>
        </Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country={country} category={'technology'} />}>
        </Route>
        <Route exact path="*" element={<NoPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App;