import "./App.css";
import React, { useState } from "react";

function TodoList(props) {
  const { title, body, id } = props.toDo;
  return (
    <div className="todo-container">
      <div>{title}</div>
      <div>{body}</div>
      <button
        onClick={() => {
          props.deleteHandler(id);
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          props.DoneCancel(id);
        }}
      >
        완료
      </button>
    </div>
  );
}

function DoneList(props) {
  const { title, body, id } = props.toDo;
  return (
    <div className="todo-container">
      <div>{title}</div>
      <div>{body}</div>
      <button
        onClick={() => {
          props.deleteHandler(id);
        }}
      >
        삭제
      </button>
      <button
        onClick={() => {
          props.DoneCancel(id);
        }}
      >
        취소
      </button>
    </div>
  );
}

function App() {
  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },

    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addToDoHandler = () => {
    const newToDoList = {
      id: toDoList.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setToDoList([...toDoList, newToDoList]);
  };

  const deleteTodoList = (id) => {
    const newToDoList = toDoList.filter((toDo) => toDo.id !== id);
    setToDoList(newToDoList);
  };

  const DoneCancel = (id) => {
    const newToDoList = toDoList.map((toDo) =>
      toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
    );
    setToDoList(newToDoList);
  };

  return (
    <div className="layout">
      <div>
        <div className="container">
          <div>My TodoList</div>
        </div>

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
          <button onClick={addToDoHandler}>추가하기</button>
        </div>

        <h2>Working..🔥</h2>
        {toDoList.map((toDo) => {
          if (toDo.isDone === false) {
            return (
              <TodoList
                DoneCancel={DoneCancel}
                deleteHandler={deleteTodoList}
                toDo={toDo}
                key={toDo.id}
              />
            );
          } else {
            return null;
          }
        })}

        <h2>Done..!🎉</h2>
        {toDoList.map((toDo) => {
          if (toDo.isDone === true) {
            return (
              <DoneList
                DoneCancel={DoneCancel}
                deleteHandler={deleteTodoList}
                toDo={toDo}
                key={toDo.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;
