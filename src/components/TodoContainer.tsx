import { TaskType } from "../App";
import CardTask from "./CardTask";
import "./TodoContainer.scss";

interface ListProps {
  list: TaskType[];
  onFinish: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoContainer = ({ list, onFinish, onDelete }: ListProps) => {
  console.log({ list });
  return (
    <section className="todo-container">
      <div className="header-todo">
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </div>

      {list.length > 0 ? (
        list.map((item) => {
          return <CardTask item={item} onFinish={onFinish} onDelete={onDelete} />;
        })
      ) : (
        <>
          <hr />
          <div className="no-data-container">
            <span className="material-symbols">assignment</span>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </>
      )}
    </section>
  );
};

export default TodoContainer;
