import React, { useState } from 'react'
import {Filter,PersonForm,Persons} from './components/Contact'

const initial = [

  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]


const App = (props) => {
  
  const [filter, setFilter] = useState("")
  const [contacts, setContacts] = useState(initial)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")


  


  
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