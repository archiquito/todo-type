import "./CardTask.scss";
import { TaskType } from "../App";
import { ChangeEvent } from "react";

interface ItemProps {
  item: TaskType;
  onFinish: (id: string) => void;
  onDelete: (id: string) => void;
}

const CardTask = ({ item, onFinish, onDelete   }: ItemProps) => {
  
  const handleFinish = (event: ChangeEvent<HTMLInputElement>) => {
    onFinish(event.target.value);
  };
  const handleDelete = (id: string) => {
    onDelete(id)
  }

  return (
    <div className="card-task" key={item.id}>
      <div className="task">
        <input
          type="radio"
          id={item.id}
          name={item.id}
          value={item.id}
          onChange={handleFinish}
          checked={item.status}
        />
        <label htmlFor={item.id} className={item.status ? 'line-through' : ''}>{item.task}</label>
      </div>
      <button onClick={() => handleDelete(item.id)}><span className="material-symbols">delete</span></button>
    </div>
  );
};
export default CardTask;
