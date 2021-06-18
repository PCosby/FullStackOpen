const Part = ({part}) => {

    return(
      <li>
  
        {part.name}: {part.exercises}
      </li>
    )
  
  }
  
  const Content = ({parts}) => {
  
  
    return(
      <div>
        <ul>
  
          {parts.map(p =>{
          
          return <Part  part = {p} key = {p.id} />
          
          })}
  
        </ul>
   
        <h4>Total exercises: {parts.reduce((s,c) => {
                
          return s + c.exercises
      
        },0)
        
        
        
        }</h4>
      </div>
    )
  
  }
  
  
  const Course = ({course}) => {
    return(
  
      <div>
        <h1>{course.name}</h1>
        
        <Content parts = {course.parts} />
      </div>
  
    )
  
  
  }
  
  const Courses = ({courses}) => {
  
    return(
      <div>
  
        {courses.map(c => <Course course = {c} key = {c.id}/>)}
  
      </div>
    )
  }

export default Courses