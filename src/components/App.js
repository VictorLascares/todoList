import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Form from './Form';

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    setTodos([
      { title: "Tarea 1", done: false },
      { title: "Tarea 2", done: false },
      { title: "Tarea 3", done: false },
      { title: "Tarea 4", done: false },
      { title: "Tarea 5", done: false },
      { title: "Tarea 6", done: false },
      { title: "Tarea 7", done: false },
      { title: "Tarea 8", done: false },
      { title: "Tarea 9", done: false },
      { title: "Tarea 10", done: false }
    ])
  }, []);
  
  const handleClickDelete = (e, title) => {
    const t = [...todos];
    const index = t.findIndex(e => e.title === title);
    if (-1 < index) t.splice(index, 1);
    setTodos(t);
  }

  const handleClickToggleDone = (e,title) => {
    const t = [...todos];
    const index = t.findIndex(e => e.title === title)
    if (-1 < index) t[index].done = !t[index].done;
    setTodos(t);
  }

  const addTask = title => {
    const exist = todos.find(e => title === e.title);
    if (exist) {
      alert(`La tarea "${title}" ya existe!`);
      return
    }
    setTodos(todos.concat([{ title, done: false }]));
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
