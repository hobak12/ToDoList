import { ChangeEvent, FormEvent } from "react";

interface Props {
  title: string;
  body: string;
  onChangeTitleHandler(e: ChangeEvent<HTMLInputElement>): void;
  onChangeBodyHandler(e: ChangeEvent<HTMLInputElement>): void;
  addToDo(event: FormEvent): void;
}

const InputBox = ({
  title,
  body,
  onChangeTitleHandler,
  onChangeBodyHandler,
  addToDo,
}: Props) => {
  return (
    <form onSubmit={addToDo} className="add-form">
      <div className="input-group">
        <label htmlFor="title">제목</label>
        <input
          value={title}
          onChange={onChangeTitleHandler}
          id="title"
          type="text"
        />
        <label htmlFor="context">내용</label>
        <input
          value={body}
          onChange={onChangeBodyHandler}
          id="context"
          type="text"
        />
      </div>
      <button className="add-btn">추가</button>
    </form>
  );
};

export default InputBox;
