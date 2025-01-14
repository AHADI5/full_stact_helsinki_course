import { useState } from 'react';

const App = () => {
    const [good  , setGood  ] = useState(0) ; 
    const [neutral, setNeutral] = useState(0) ;
    const [bad   , setBad   ] = useState(0)

    const handleGood  = () => setGood(good + 1) ;
    const handleNeutral = () => setNeutral(neutral + 1) ;
    const handleBad   = () => setBad(bad + 1) ;
    const header  = "give feedback" ;
    const statisticsTitle  = "Satistics" ;

    //More statistics

    const all = good + neutral + bad ; 
    const average = (good - bad) / all ;
    const positive = (good / all) * 100 ;
    return (
      <>
        <Header text = {header}/>
        <Button text = "good" handleClick = {handleGood}/>
        <Button text = "neutral" handleClick = {handleNeutral}/>
        <Button text = "bad" handleClick = {handleBad}/>
        <Header text = {statisticsTitle}/>
        <Statistics statistics = {{good  , bad  , neutral  , all , average  , positive}} />

        
      </>
    )

}


const Statistics  = (props) => {
  const {good, neutral, bad, all, average, positive} = props.statistics ;
  if(all === 0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return  (  
      <div>
          <table>
              <tbody>
                <StatisticsLine text = "good" value = {good}/>
                <StatisticsLine text = "neutral" value = {neutral}/>
                <StatisticsLine text = "bad" value = {bad}/>
                <StatisticsLine text = "all" value = {all}/>
                <StatisticsLine text = "average" value = {average}/>
                <StatisticsLine text = "positive" value = {positive}/>
              </tbody>
          </table>
      </div>
    )
  }
}

export default App;

const Header  = ({text}) => <h1>{text}</h1> ;
const Button = ({text, handleClick}) => <button onClick = {handleClick}>{text}</button> ;
const StatisticsLine =  ({text, value }) => {
  return (

      <tr>
        <td>{text}</td>
        <td>{value} {text  === "positive" ? "%" : ""}</td>
      </tr>

  )
}

