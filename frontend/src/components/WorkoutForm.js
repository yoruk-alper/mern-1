import { useState } from 'react'

const WorkoutForm = () => {
  
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  

  return (
    <form className='create'>
      <h3>Add a new workout</h3>

      <label>Excercise Title</label>
    </form>
  )
}

export default WorkoutForm