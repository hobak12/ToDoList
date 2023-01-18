import "./App.css";
import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import TodoList from "./components/ToDoList";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import { Itodo } from "./interfaces";

const App: FC = () => {
  const [toDoList, setToDoList] = useState<Itodo[]>([]);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  //todo 추가 함수
  const addToDo = (event: FormEvent): void => {
    event.preventDefault();
    if (body && title) {
      //빈 값일 때 alert 뜨도록 조건을 추가
      const newToDoList = {
        id: toDoList.length + 1,
        title: title,
        body: body,
        isDone: false,
      };
      setToDoList((prev) => [...prev, newToDoList]);
      setTitle(""); //작성 후 인풋 초기화
      setBody("");
    } else {
      alert("제목과 내용을 둘 다 입력해주세요");
    }
  };

  //todo 삭제 함수
  const deleteToDo = (id: number): void => {
    const newToDoList = toDoList.filter((toDo) => toDo.id !== id);
    setToDoList(newToDoList);
  };

  //완료, 취소 변경 함수
  const DoneCancel = (id: number): void => {
    const newToDoList = toDoList.map((toDo) =>
      toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
    );
    setToDoList(newToDoList);
  };

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeBodyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  return (
    <div className="layout">
      <Header />
      <InputBox
        title={title}
        body={body}
        onChangeTitleHandler={onChangeTitleHandler}
        onChangeBodyHandler={onChangeBodyHandler}
        addToDo={addToDo}
      />
      {/* 초기값으로 넣어놓은 0번째 배열을 빼고 map 해준다 */}
      <h2>Working...💚</h2>
      {toDoList.map((toDo: Itodo) => {
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
};

export default App;
