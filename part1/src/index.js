import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const BiggerQuote = ({quote}) =>{

  let max = 0, indice=0;
  for(let i = 0; i < quote.length; i++){
    if(quote[i].votes > max){
      max = quote[i].votes;
      indice = i;
    }
  }

  if(max > 0){
    return(
      <>
        <h1>Anecdote with most Votes!</h1>
        <p>"{quote[indice].text}"</p>  
        <p>Has {quote[indice].votes} votes</p>
      </>
    )
  } else{
    return null;
  }
  
}


const QuoteButton = () =>{

  const random = () => Math.floor(Math.random() * anecdotes.length);  
  const [quote, setQuote] = useState(anecdotes); 
  const [numRandom, setNumRandom] = useState(random());

 

  const handleVotes = () =>{
    setQuote([...quote, quote[numRandom].votes += 1]);
  }

  return(
    <>      
      <p>"{quote[numRandom].text}"</p>  
      <p>Has {quote[numRandom].votes} votes</p>
      <button onClick={() =>setNumRandom(random())}>Next Quote</button>      
      <button onClick={handleVotes}>Vote!</button>
      <BiggerQuote quote={quote} />      
    </>
  )
}


const Button = ({name, onClick, click}) => {
  const handleClick = () =>{
      onClick(click + 1)
  }

  return(
    <button onClick={handleClick} type="input">{name}</button>
  )
}

const Statistics = ({good, neutral, bad}) =>{
  const all = good + neutral + bad;
  if (all > 0){
    return(
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <p>Good</p>
            </td>
            <td>
            {good}
            </td>
          </tr>   
          <tr>
            <td>
              <p>Neutral</p>
            </td>
            <td>{neutral}</td>
          </tr> 
          <tr>
            <td>
              <p>Bad</p>
            </td>
            <td>
              {bad}
            </td>
          </tr> 
          <tr>
            <td>
              <p>All</p>
            </td>
            <td>{all}</td>
          </tr> 
          <tr>
            <td>
              <p>Average</p>
            </td>
            <td>
              {all/3}
            </td>
          </tr> 
          <tr>
            <td>
              <p>Positive</p>
            </td>
            <td>{0 | good / all * 100}%</td>
          </tr>   
        </tbody>
      </table>
      
    </div>
    
    )
  }
  return null;
  
}

const Feedback = () =>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return(
    <div>
      <h1>Give FeedBack</h1>  
      <Button name="Good" onClick= {setGood} click={good} />
      <Button name="Neutral" onClick= {setNeutral} click={neutral} />
      <Button name="Bad" onClick= {setBad} click={bad} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const App = () => {    
  const course = {
    name: 'Half Stack application development',
    part : [
      {
        name: 'Fundamentals of React',
        exercises : 10
      },
      {
        name: "Using props to pass data",
        exercises : 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }

    ]
  }

  return(
    <div>
      <Feedback />
      <h1>{course.name}</h1>
      <p>
          {course.part[0].name} {course.part[0].exercises}
        </p>
        <p>
        {course.part[1].name} {course.part[1].exercises}
        </p>
        <p>
        {course.part[2].name} {course.part[2].exercises}
        </p>
        <p>Number of exercises {course.part[0].exercises + course.part[1].exercises + course.part[2].exercises}</p>
        <QuoteButton />
    </div>
  )
}
const anecdotes = [
  {text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time", 
  votes: 0},
  {text : "Even the best planning is not so omniscient as to get it right the first time", votes : 0},
  {text : "How does a project get to be a year late?... One day at a time", votes : 0}, 
  {text : "The bearing of a child takes nine months, no matter how many women are assigned. Many software tasks have this characteristic because of the sequential nature of debugging", votes: 0},
  {text : "Every good work of software starts by scratching a developer's personal itch" , votes: 0},
  {text : "Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away" , votes: 0},
  {text : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." , votes: 0}
  ]

ReactDOM.render(<App />, document.getElementById('root'))