import { useState } from 'react';

const App = () => {
    const [good  , setGood  ] = useState(0) ; 
    const [neutral, setNeutral] = useState(0) ;
    const [bad   , setBad   ] = useState(0)

    const handleGood  = () => setGood(good + 1) ;
    const handleNeutral = () => setNeutral(neutral + 1) ;
    const handleBad   = () => setBad(bad + 1) ;
    const header  = "give feedback" ;
    return (
      <>
        <Header text = {header}/>
        <Button text = "good" handleClick = {handleGood}/>
        <Button text = "neutral" handleClick = {handleNeutral}/>
        <Button text = "bad" handleClick = {handleBad}/>

        <Display good={good}   neutral={neutral} bad={bad}/>
      </>
    )

}

export default App;

const Header  = ({text}) => <h1>{text}</h1> ;
const Button = ({text, handleClick}) => <button onClick = {handleClick}>{text}</button> ;
const Display = ({good  , neutral , bad}) => {
  console.log(good)
  const text = "statistics" ;
  const all = good + neutral + bad ; 
  const average = (good - bad) / all ;
  const positive = (good / all) * 100 ;
  return (
   <>
    <h1>{text}</h1>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>All {all}</p>
    <p>Average {average}</p>
    <p>Positive {positive} %</p>
   </>

  )
}