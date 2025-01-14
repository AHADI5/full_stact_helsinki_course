import { useState } from 'react';

const App  = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //TODO : create an array of votes with the same length as the anecdotes array
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill({vote: 0 })) ;

  const [selected, setSelected] = useState(0) 
  const handleSelect  = () => setSelected(Math.floor(Math.random() * anecdotes.length)) ;
  const handleVote = () => {
    const copy = [...votes] ;
    copy[selected] = {...copy[selected],vote: copy[selected].vote + 1} ; 
    setVotes(copy) ;

  }

  return (
    <div>
      <DisplayAnecdote selected = {selected}  anecdotes={anecdotes} votes = {votes}/>
      <VoteButton handleVote = {handleVote}/>
      <SelectButton handleSelect = {handleSelect}/>
      
    </div>
  )

}

const DisplayAnecdote = ({selected , anecdotes , votes}) => {

  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected].vote} </p>
      </>
  )
}

const SelectButton = ({handleSelect}) => {
  return (
    <button onClick = {handleSelect}>Next anecdote</button>
  )
}

const VoteButton = ({handleVote}) => {
  return (
    <button onClick = {handleVote}>Vote</button>
  )
}

export default App;