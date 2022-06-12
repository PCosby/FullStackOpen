import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = (args) =>{

    const [weather, setWeather] = useState({current:{
        weather_descriptions: "Sunny",
        temperature: 100,
        wind_speed: 100,
        wind_dir: "NW",
        weather_icons: "https://upload.wikimedia.org/wikipedia/commons/6/66/Gigantopithecus.png"
    }})

    const [show, setShow] = useState(false)

  useEffect(() => {
    axios
      .get("http://api.weatherstack.com/current?access_key=36ddc2f0133c7d72b58f966a895d8800&query="+args.data.capital).then(response => {
        
        if (response.success) {setWeather(response.data)}
      })
  }, [])

    var data = args.data
    
    if (!show) return(
        <h3>{data.name} <button onClick = {() => setShow(true)}>Show</button></h3>
    )



    return(

        <div>

            <h3>{data.name} <button onClick = {()=> setShow(false)}>Hide</button> </h3>

            <b>Capital:</b> {data.capital}
            <br/>
            <b>Population:</b> {data.population}

            <h4>Languages</h4>
                <ul>
                    { data.languages.map(l => 
                            <li key = {l.name}>{l.name}</li>
                        )}
                </ul>


            <img src = {data.flags.png} />

            <h4>Weather in {data.name}</h4>
            
            
            <b>Feels:</b> {weather.current.weather_descriptions}
            <br/>
            <b>Temperature:</b> {weather.current.temperature} C
            <br/>
            <b>Wind:</b> {weather.current.wind_speed} mph {weather.current.wind_dir}
            <br/> <br/>
            <img src = {weather.current.weather_icons } style = {{maxHeight: 200, maxWidth: 200}}/>

        </div>

    )

}

const CountryList = ({data}) =>{

    return(
        <div>

        {data.map(c => 
            <Country data = {c} key = {c.area} showFull = {data.length === 1}/>
        )}
        </div>
    )

}

const CountryFilter = (args) => {

    var filter = args.filter.toLowerCase()
    var data = args.data

    var newList = []

    if (filter.length === 0){
        return(
            <div></div>
        )
    }

    data.forEach(c => {
        if(c.name.toLowerCase().includes(filter)){
            newList.push(c)
        }
    })

    if (newList.length > 10){
        return(
            <div>
                Too many matches
            </div>
        )
    }

    return(<CountryList data = {newList}/>)




}

const changeFunction = (val,event) =>{

    event(val.target.value)

}

const Search = (data) =>{

    return(
    <form onSubmit = {(event) => event.preventDefault()}>

    Filter: 
    <input value = {data.text} onChange = {(event) => {changeFunction(event,data.event)}}/>
    
    </form>)

}

export {CountryFilter, Search}