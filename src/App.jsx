import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store'

function App() {

  const { counter } = useSelector(state => state.counter)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleIncrementByNumber = (number = 2) => {
    dispatch(incrementByAmount(number))
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ handleIncrement }>
          Incrememet
        </button>
        <button onClick={ handleDecrement }>
          Decrement
        </button>
        <button onClick={ () => handleIncrementByNumber() }>
          Increment By 2
        </button>
        <h2>
          count is { counter }
        </h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
