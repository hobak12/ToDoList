const InputBox = ({
  title,
  body,
  onChangeTitleHandler,
  onChangeBodyHandler,
  addToDo,
}) => {
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
