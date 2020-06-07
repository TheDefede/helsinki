import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {  
  const Header = (props) => {    
    return(
      <h1>{props.course}</h1>
    )
  }
  const Content = () =>{    
    return(
      <>
        <p>
          {part1} {exercises1}
        </p>
        <p>
          {part2} {exercises2}
        </p>
        <p>
          {part3} {exercises3}
        </p>
      </> 
    )
  }
  const Total = () => {
    return (
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      )
  }
  const Part1 = () =>{
    return(
      <Header course={course}/>
    )
  }
  const Part2 = () => {
    return(
      <Content />
    )
  } 
  const Part3 = () => {
    return(
      <Total />
    )
  }
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10;
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14;
  
  return(
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))