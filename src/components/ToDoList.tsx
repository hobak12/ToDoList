import { Itodo } from "../interfaces";

interface Props {
  toDo: Itodo;
  DoneCancel(id: number): void;
  deleteToDo(id: number): void;
}

const TodoList = ({ toDo, DoneCancel, deleteToDo }: Props) => {
  const { title, body, id, isDone } = toDo;
  return (
    <>
      <div className="list-wrapper">
        <div className="todo-container">
          <h2>{title}</h2>
          <p>{body}</p>
          <button
            className="delete-btn"
            onClick={() => {
              deleteToDo(id);
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              DoneCancel(id);
            }}
            className="done-btn"
          >
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
