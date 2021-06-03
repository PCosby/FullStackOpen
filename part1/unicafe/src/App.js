import React, { useState } from 'react'

const Statistic = ({text, value, ending = ""}) =>{
  
  return(
    <tr>
      <td>{text}</td>
      <td>{value}{ending}</td>
    </tr>
  )
}

const Stats = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  if (total === 0) return <div><h3>No data</h3></div>
  return(
    <div>
      <h1>Statistics</h1>

      <table>
        <Statistic text = "Good" value = {good}/>
        <Statistic text = "Neutral" value = {neutral}/>
        <Statistic text = "Bad" value = {bad}/>

        <Statistic text = "Average" value = {(good - bad)/total}/>
        <Statistic text = "Posotive" value = {(good/total)*100} ending = "%"/>
      </table>
    </div>
  )
}

const Button = ({text,click}) => {
  return(
    <button onClick = {click}>
      {text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text = "good" click = {()=>setGood(good+1)}/>
      <Button text = "neutral" click = {()=>setNeutral(neutral+1)}/>
      <Button text = "bad" click = {()=>setBad(bad+1)}/>
      <Stats good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App