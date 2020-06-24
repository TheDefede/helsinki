import React from 'react';

const Course = () => {  
    const reducer = (value, acum)=>{
      value += acum.parts.reduce((value2, acum2)=>{
        value2 += acum2.exercises;
          return value2;
      },0);
      return value;
    }
  
  
    return(
        <>
          <Part />        
          <p style={{fontWeight: "bold"}}>
            Total of exercises {course.reduce(reducer, 0)}
          </p>
        </>
    )
  }
  
  const Part = () =>{
    const reducer = (value, acum) =>{
      value += acum.exercises;
      return value;
    }
  
    return(
      <>
        {course.map(title =>{
          return(
            <>
              <h1 key={title.id}>{title.name}</h1>
              {title.parts.map(part =>{
                return(
                  <p key={part.id}>{part.name}, exercises: {part.exercises}</p>
                )
                })}
              <p>Number of exercises: {title.parts.reduce(reducer,0)}</p>  
            </>
          )
        })}      
      </>
    )
  }
  
  const course = [{
    name: 'Half Stack application development',
    id: 1,
    parts : [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises : 10
      },
      {
        id: 2,
        name: "Using props to pass data",
        exercises : 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id: 4,
        name: 'Redux',
        exercises: 11
      }
  
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts:[
      {
        id: 1,
        name: 'Routing',
        exercises: 3
      },
      {
        id: 2,
        name: 'Middlewares',
        exercises: 7
      }
    ]
  }]

  export default Course;