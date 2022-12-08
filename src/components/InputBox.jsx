const InputBox = (title, body, setTitle, setBody, addToDoHandler) => {
  return (
    <div className="add-form">
      <div className="input-group">
        <label htmlFor="title">제목</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          type="text"
        />
        <label htmlFor="context">내용</label>
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          id="context"
          type="text"
        />
      </div>
      <button className="add-btn" onClick={addToDoHandler}>
        추가
      </button>
    </div>
  );
};

export default InputBox;
