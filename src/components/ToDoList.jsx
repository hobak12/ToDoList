import CustomButton from "./CustomButtom";

export function TodoList(props) {
  const { title, body, id, isDone } = props.toDo;
  return (
    <div className="list-wrapper">
      <div className="todo-container">
        <div>{title}</div>
        <div>{body}</div>
        <button
          className="delete-btn"
          onClick={() => {
            props.deleteHandler(id);
          }}
        >
          삭제
        </button>
        <CustomButton
          isDone={isDone}
          onClick={() => {
            props.DoneCancel(id);
          }}
        />
      </div>
    </div>
  );
}
