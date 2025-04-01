import { useState, ChangeEvent, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import imgLogo from "./assets/logo.svg";
import "./global.scss";
import "./App.scss";
import TodoContainer from "./components/TodoContainer";

export interface TaskType {
  id: string;
  task: string;
  status: boolean;
}

const App = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<TaskType[]>([]);

  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    setTodoList([...todoList, { id: uuidv4(), task: task, status: false }]);
    setTask("");
  };

  const handleFinish = (id: string) => {
    const updatedTasks = todoList.map((task) => {
      if (task.id === id) {
        return { ...task, status: true }
      }
      return { ...task }
    })
    setTodoList(updatedTasks)
  }

  const handleDelete = (id: string) => {
    const findItem = todoList.filter(e => e.id !== id)
    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }
    setTodoList(findItem)
  }

  return (
    <div className="app">
      <header className="header">
        <img src={imgLogo} />
        <div className="addToDo-container">
          <input
            placeholder="Adicione uma nova tarefa"
            value={task}
            onChange={handleChangeTask}
          />
          <button onClick={handleAddTask}>
            Criar<span className="material-symbols">add_circle</span>
          </button>
        </div>
      </header>
      <TodoContainer list={todoList} onFinish={handleFinish} onDelete={handleDelete} />
    </div>
  );
};

export default App;
