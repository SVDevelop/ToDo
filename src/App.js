import React, {useState, useEffect} from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import './App.css'

function App() {
  // const  [todos, setTodos] = useState([
  //      {id: 1, completed: false, title: "create app"},
  //      {id: 2, completed: true, title: "create app1"},
  //      {id: 3, completed: false, title: "create app2"},
  //      {id: 4, completed: false, title: "create app3"}
  //    ])
     const [error, setError] = useState(null);
     const [isLoaded, setIsLoaded] = useState(false);
     const [todos, setTodos] = useState([]);
   
     // Примечание: пустой массив зависимостей [] означает, что
     // этот useEffect будет запущен один раз
     // аналогично componentDidMount()
     useEffect(() => {
       fetch("https://gelltorn.github.io/interviewTestFakeApi/task.json")
         .then(res => res.json())
         .then(
           (result) => {
             setIsLoaded(true);
             setTodos(result);
           },
           // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
           // чтобы не перехватывать исключения из ошибок в самих компонентах.
           (error) => {
             setIsLoaded(true);
             setError(error);
           }
         )
     }, [])

function toggleTodo (id) {
  setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  )
}

function removeTodo (id ) {
  setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo (title) {
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false
  }]))
}

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="todo-app">
      <h1>Приложение ToDo</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} error={error} isLoaded={isLoaded}  onToggle={toggleTodo} />
        ) : (
          <p>нет задач</p>
        )}
      </div>
    </Context.Provider>

  );
}

export default App;
