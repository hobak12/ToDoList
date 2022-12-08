import "./App.css";
import React, { useState } from "react";
import { TodoList } from "./components/ToDoList";
import Header from "./components/Header";
import InputBox from "./components/InputBox";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 0, title: "", body: "", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //todo 추가 함수
  const addToDo = () => {
    if (body !== "" && title !== "") {
      //빈 값일 때 alert 뜨도록 조건을 추가
      const newToDoList = {
        id: toDoList.length + 1,
        title: title,
        body: body,
        isDone: false,
      };
      setToDoList([...toDoList, newToDoList]);
      setTitle(""); //작성 후 인풋 초기화
      setBody("");
    } else {
      alert("제목과 내용을 입력해주세요");
    }
  };

  //todo 삭제 함수
  const deleteToDo = (id) => {
    const newToDoList = toDoList.filter((toDo) => toDo.id !== id);
    setToDoList(newToDoList);
  };

  //완료, 취소 변경 함수
  const DoneCancel = (id) => {
    const newToDoList = toDoList.map((toDo) =>
      toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
    );
    setToDoList(newToDoList);
  };

  return (
    <div className="layout">
      <Header />
      <InputBox
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        addToDo={addToDo}
      />
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
        <button className="add-btn" onClick={addToDo}>
          추가
        </button>
      </div>

      {/* 초기값으로 넣어놓은 0번째 배열을 빼고 map 해준다 */}
      <h2>Working...💚</h2>
      {toDoList.map((toDo) => {
        if (toDo.isDone === false && toDo.id !== 0) {
          return (
            <TodoList
              DoneCancel={DoneCancel}
              deleteToDo={deleteToDo}
              toDo={toDo}
              key={toDo.id}
            />
          );
        } else {
          return null;
        }
      })}
      <h2>Done! ✅</h2>
      {toDoList.map((toDo) => {
        if (toDo.isDone === true && toDo.id !== 0) {
          return (
            <TodoList
              DoneCancel={DoneCancel}
              deleteToDo={deleteToDo}
              toDo={toDo}
              key={toDo.id}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default App;
