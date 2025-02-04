/* eslint-disable react/prop-types */
const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}

const Content = props => <div>
  <Part part = {props.course.parts[0].name} exercises = {props.course.parts[0].exercises} />
  <Part part = {props.course.parts[1].name} exercises = {props.course.parts[1].exercises} />
  <Part part = {props.course.parts[2].name} exercises = {props.course.parts[2].exercises} />
</div>

const Part = props => <div>
  <p>{props.part} {props.exercises}</p>
</div>

const Total = (props) => {
  const totalExercises = props.course.parts.reduce ((sum, part) => sum + part.exercises , 0)
  return (
    <div>
      Number of exercises {totalExercises}
    </div>
  )
}

const App = () => {

  //const defination  

  const course =  {
    name : 'Half Stack application development',
    parts : [
      {
        name : 'Fundamentals of React',
        exercises : 10
      },
      {
        name : 'Using props to pass data',
        exercises : 7
      },
      {
        name : 'State of companent',
        exercises : 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content course = {course}/>
      <Total course = {course} />
    </div>
  )
}

export default App