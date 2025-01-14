const App = () => {
  const course  =  {
    name  :  "Half stack application development " , 
    parts : [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
  
      {
        name: "Using props to pass data",
        exercises: 7,
      },
  
      {
        name: "State of a component",
        exercises: 7,
      },
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Part part={course.parts} />
      <Total part={course.parts} />
    </div>
  );
};
const Header = (course) => {
  return (
    <>
      <h1>{course.course}</h1>
    </>
  );
};

const Part = (Content) => {
  const parts = Content.part.map((part) => (
    <div key={part.name}>
      <p>
        {part.name} <span>{part.exercises}</span>
      </p>
    </div>
  ));
  console.log(parts);
  return <>{parts}</>;
};

const Total = (Content) => {
  var total = 0;
  Content.part.forEach((value) => {
    total = total + value.exercises;
  });
  return <p>Number of exercises {total}</p>;
};
export default App;
