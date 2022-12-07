import "./App.css";
import React, { useState } from "react";
import { DoneList, TodoList } from "./components/DoDoneList";
import CustomButton from "./components/CustomButtom";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 0, title: "", body: "", isDone: false },
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
          <CustomButton color="rgb(182, 255, 186)" onClick={addToDoHandler}>
            추가하기
          </CustomButton>
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
