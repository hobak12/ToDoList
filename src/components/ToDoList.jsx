export function TodoList(props) {
  const { title, body, id, isDone } = props.toDo;
  return (
    <>
      <div className="list-wrapper">
        <div className="todo-container">
          <h2>{title}</h2>
          <p>{body}</p>
          <button
            className="delete-btn"
            onClick={() => {
              props.deleteToDo(id);
            }}
          >
            삭제
          </button>
          <button
            onClick={() => {
              props.DoneCancel(id);
            }}
            className="done-btn"
          >
            {isDone ? "취소" : "완료"}
          </button>
        </div>
      </div>
    </>
  );
}
