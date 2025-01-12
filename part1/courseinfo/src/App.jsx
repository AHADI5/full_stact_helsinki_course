const App = () => {
  const course = 'Half stack application development '
  const part1 = 'Fundamentals of React'
  const exercise1  = 10 
  const part2 = 'Using props to pass data'
  const exercises2 = 7 
  const part3 = 'State of a component'
  const exercises3 = 14

   return (
    <div>
      <Header course = {course}/>
      <Part part= {part1} exercises = {exercise1}/>
      <Part part= {part2} exercises = {exercises2}/>
      <Part part= {part3} exercises = {exercises3}/>
      <Total total = {exercise1  + exercises2 + exercises3} /> 
    </div>

  )
}
const Header  = (course) => {
  return (
    <>
      <h1>{course.course}</h1>
    </>
  )
}

const Part  = (Content) => {
  return  (
    <>
        <p>
            {Content.part} {Content.exercises}
        </p>
    </>
  )

}

const Total  = (total) => {
  return  (
    <>
      <p>Number of exercises  {total.total}</p>
    </>
  )
}
export default App

