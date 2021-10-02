import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Filter,PersonForm,Persons} from './components/Contact'



const App = (props) => {
  
  const [filter, setFilter] = useState("")
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons').then(response => {
        setContacts(response.data)
      })
  }, [])

  
  return (
    <div>
      <h1>Phonebook</h1>

      <Filter fun = {setFilter} var = {filter} />
      
      <PersonForm contacts = {contacts} setContacts = {setContacts} 
      newName = {newName} setNewName = {setNewName} newNumber = {newNumber} setNewNumber = {setNewNumber}
      />
      
      <h1>Numbers</h1>

      <Persons pplList = {contacts} filterText = {filter}/>
      
    </div>
  )
}

export default App 