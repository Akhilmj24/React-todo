import React from "react";
import "./Input.css";
import { useState } from "react";
import { Display } from "./Display";

export const Input = () => {
  const [input, setInput] = useState("");
  const [store, setStore] = useState([]);
  const [msg, setMsg] = useState([]);

  const storeit = () => {
    if (!input) {
      setMsg("Box is Empty!!");
    } else {
      setStore([
        ...store,
        {
          items: input,
          completed: false,
          id: Math.random() * 1000,
        },
      ]);
      setMsg("")
    }
     setInput("");
  };

  // setStore(store.filter((el)=>el.id !== store.id) )
  return (
    <div className="home">
      <div className="main-conatiner">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={storeit}>ADD</button>
      </div>
      <div className="display">
        <div className="msg">{msg}</div>
        <Display store={store} setStore={setStore} />
      </div>
    </div>
  );
};
