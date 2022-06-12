import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

import {CountryFilter, Search} from './Helper'

function App() {

  const [data,setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all').then(response => {

        setData(response.data)
      })
  }, [])



  return (
    <div>
      <h1> Find countries: </h1>
      <Search text = {search} event = {setSearch} />

      <CountryFilter filter = {search} data = {data} />


    </div>
  );
}

export default App;
