import React, { useState } from 'react'

const Button = ({Text, Click}) => {
  return(
    <button onClick = {Click}>
        {Text}
    </button>
  )
}

const CopyIncrement = (d, key) => {

  const t = {...d}

  t[key] += 1

  return t

}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  let V = {}
  anecdotes.forEach((i)=>{V[i] = 0})
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(V)

  let max = anecdotes[selected]

  for (let quote in votes){
    if(votes[max] < votes[quote]){
      max = quote
    }
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <br/>
      Has {votes[anecdotes[selected]]} votes

      <br/>
      <br/>

      <Button Text = "Vote" Click = {()=>{setVotes(CopyIncrement(votes,anecdotes[selected]))}}/>
      <Button Text = "Next quote" Click = {()=>{setSelected(Math.floor(Math.random()*anecdotes.length))}}/>


      <h1>Most Popular quote</h1>
      <br/> <br/>
      {max}
    </div>
  )
}

export default App