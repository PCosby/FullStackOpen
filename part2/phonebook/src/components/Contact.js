import React from 'react'

const Contact = ({ contact }) => {
  return (
    <li>{contact.name}: {contact.number}</li>
  )
}

const changeFunction = (event, fun) => {

  fun(event.target.value)

}

const Filter = (vars) =>{
  
  return(
  <form onSubmit = {(event) => event.preventDefault()}>
  Filter: 
    <input value = {vars.var} onChange = {(event) => {changeFunction(event,vars.fun)}}/>
  </form>)
}

const PersonForm = (vars) =>{

  const addPerson = (event) => {
      event.preventDefault()

      var skip = false

      vars.contacts.forEach( c => {
        if(!skip && c.name.toLowerCase() === vars.newName.toLowerCase()){
          alert(`${vars.newName} is already in the phonebook`)
          skip = true
        }
      })

      if(!skip){
      vars.setContacts(vars.contacts.concat({
        
      id: vars.contacts.length + 1,
      name: vars.newName,
      number: vars.newNumber
      
      }))

      vars.setNewName('')
      vars.setNewNumber('')
    }
  }

  return(
    <div>

      <form onSubmit = {(event) => event.preventDefault()}>

          <h1>Add new contact:</h1>

          <div>
          Name:
          <input value = {vars.newName} onChange = {(event) =>changeFunction(event,vars.setNewName)}/>
          </div>


          <div>
          Number:
          <input value = {vars.newNumber} onChange = {(event) =>changeFunction(event,vars.setNewNumber)}/>
          </div>

        

        </form>

        <div>
          <button type = "submit" onClick = {addPerson}>
            Add
          </button>
        </div>
      </div>
  )


}

const Persons = (vars) => {

  var whiteList = vars.pplList.filter( c => {
  return c.name.toLowerCase().includes(vars.filterText.toLowerCase()) || vars.filterText.length === 0
})

return(<ul>
      {whiteList.map(c => 

          <Contact key={c.id} contact={c} />
        
      )}
    </ul>)
}



export {Filter,PersonForm,Persons}