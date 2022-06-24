import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompliteTodos, setIncompliteTodos] = useState([]);
  const [compliteTodos, setCompliteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompliteTodos, todoText];
    setIncompliteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompliteTodos];
    newTodos.splice(index, 1);
    setIncompliteTodos(newTodos);
  };

  const onClickComplite = (index) => {
    const newIncompliteTodos = [...incompliteTodos];
    newIncompliteTodos.splice(index, 1);

    const newCompliteTodos = [...compliteTodos, incompliteTodos[index]];
    setIncompliteTodos(newIncompliteTodos);
    setCompliteTodos(newCompliteTodos);
  };

  const onClikBack = (index) => {
    const newCompliteTodos = [...compliteTodos];
    newCompliteTodos.splice(index, 1);

    const newIncompliteTodos = [...incompliteTodos, compliteTodos[index]];
    setIncompliteTodos(newIncompliteTodos);
    setCompliteTodos(newCompliteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplite-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompliteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplite(index)}>完了</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complite-area">
        <p className="title">完了のTODO</p>
        <ul>
          {compliteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClikBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
