import React from 'react'

const Header = (args) => {
  return (
    <h1>
      {args.course}
    </h1>

  )
}

const Part = (args) => {
  return(
    <p>

      {args.partName}: {args.num}

    </p>
  )

 }

const Total = (args) => {
  let tot = 0
  console.log(args.parts)
  args.parts.forEach(part=>tot+=part.exercises)

  return(
    <h4>Number of exercises: {tot}</h4>
  )

}

const Content = (args) => {
  

  return(

    <>
      <Part partName = {args.parts[0].name} num = {args.parts[0].exercises} />
      <Part partName = {args.parts[1].name} num = {args.parts[1].exercises} />
      <Part partName = {args.parts[2].name} num = {args.parts[2].exercises} />
    </>
  )

}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </>
  )
}

export default App