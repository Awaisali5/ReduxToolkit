import React from 'react'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

const App = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center', fontWeight: 'bolder', padding: '2rem', margin: '1rem', fontSize: '2rem'}}>Redux Toolkit in React!</h2>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App