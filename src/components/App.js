import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';

const URL = "http://localhost:4000";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${URL}/todos`);
        const data = await response.json();
        console.log(data);
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  const goToBackend = (config, data) => {
    return fetch(config.url, {
      method: config.method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify(data) : null
    })
  }

  const handleClickDelete = async (e, title) => {
    const el = todos.find(e => e.title === title)
    
    if (el === undefined) return

    const config = {
      url: `${URL}/todos/${el.id}`,
      method: "DELETE"
    }
    try {
      const response = await goToBackend(config);
      if (!response.ok) throw new Error("Response not ok!")

      const t = [...todos];
      const index = t.findIndex(e => e.id === el.id);
      t.splice(index, 1);
      setTodos(t);

    } catch (error) {
      console.error(error);
    }
  }

  const handleClickToggleDone = async (e, title) => {
    const el = todos.find(e => e.title === title)
    if (el === undefined) return

    const value = !el.done;
    // Backend
    const config = {
      url: `${URL}/todos/${el.id}`,
      method: "PATCH"
    }
    try {
      const response = await goToBackend(config, {done: value})

      if (!response.ok) throw new Error("Response not ok!")
      // UI
      const t = [...todos];
      const index = todos.findIndex(e => e.id === el.id)
      t[index].done = !t[index].done;
      setTodos(t);
    } catch (error) {
      console.error(error);
    }
  }

  const addTask = async title => {
    const exist = todos.find(e => title === e.title);
    if (exist) {
      alert(`La tarea "${title}" ya existe!`);
      return
    }
    // Cambio en el servidor
    const config = {
      url: `${URL}/todos`,
      method: "POST"
    }

    const data = {
      title: title,
      done: false
    }
    try {
      const response = await goToBackend (config,data);
      if (!response.ok) throw new Error("Response not ok");

      const todo = await response.json();

      // UI
      setTodos(todos.concat([todo]));
    } catch (error) {
      console.error(error);
    }
  }

  const filtered = todos.filter(e => !e.done || e.done === show)

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header
          counter={filtered.length}
          show={show}
          toggleDone={setShow}
        />
        <TodoList
          tasks={filtered}
          toggleFn={handleClickToggleDone}
          deleteFn={handleClickDelete}
        />
        <Form
          addTaskFn={addTask}
        />
      </div>
    </div>
  );
};

export default App;
