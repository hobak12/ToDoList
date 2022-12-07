import CustomButton from "./CustomButtom";

export function TodoList(props) {
  const { title, body, id } = props.toDo;
  return (
    <div className="list-wrapper">
      <div className="todo-container">
        <div>{title}</div>
        <div>{body}</div>
        <CustomButton
          color=" rgb(255, 211, 203)"
          onClick={() => {
            props.deleteHandler(id);
          }}
        >
          삭제
        </CustomButton>
        <CustomButton
          color="rgb(176, 255, 248)"
          onClick={() => {
            props.DoneCancel(id);
          }}
        >
          완료
        </CustomButton>
      </div>
    </div>
  );
}

export function DoneList(props) {
  const { title, body, id } = props.toDo;
  return (
    <div className="list-wrapper">
      <div className="todo-container">
        <div>{title}</div>
        <div>{body}</div>
        <CustomButton
          color=" rgb(255, 211, 203)"
          onClick={() => {
            props.deleteHandler(id);
          }}
        >
          삭제
        </CustomButton>
        <CustomButton
          color="rgb(242, 255, 197)"
          onClick={() => {
            props.DoneCancel(id);
          }}
        >
          취소
        </CustomButton>
      </div>
    </div>
  );
}
