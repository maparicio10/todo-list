import "./TodoItem.css";
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon 
        completed = {props.completed}
        onComplete={props.onCompleted}
      />
      {/* <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        // onClick={() => alert("Toogle")}
        onClick={props.onCompleted}
      >
        V
      </span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <span className="Icon Icon-delete"
        // onClick={() => alert("Delete")}
        onClick={props.onDelete}
      >X</span> */}
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}
export { TodoItem };
