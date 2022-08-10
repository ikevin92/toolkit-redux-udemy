import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store'


export const TodoApp = () => {

  // const { data: todos, isLoading } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { data: todo, isLoading } = useGetTodoQuery(todoId)


  const nextTodo = () => {
    setTodoId(todoId + 1)

  }

  const prevTodo = () => {
    if (todoId > 1) {
      setTodoId(todoId - 1)
    }
  }

  return (
    <>
      <h1>Todo -RTK QUERY</h1>
      <hr />
      <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>

      <pre>{ JSON.stringify(todo) }</pre>
      <button disabled={ isLoading } onClick={ prevTodo }>
        Previous Todo
      </button>
      <button disabled={ isLoading } onClick={ nextTodo }>
        Next Todo
      </button>

      {/* <ul>
        { todos && todos.map(todo => (
          <li key={ todo.id }>
            <strong>{ todo.completed ? 'DONE' : 'Pending' }</strong> -
            { todo.title }
          </li>
        )) }
      </ul> */}

    </>
  )
}