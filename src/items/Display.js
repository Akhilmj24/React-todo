import React from "react";
import "./Display.css";
export const Display = ({ store, setStore }) => {
  const remove = (stores) => {
    setStore(store.filter((el) => el.id !== stores.id));
  };
  return (
    <div className="list-container">
      {store.map((stores) => (
        <div className="list" key={stores.id}>
          <h5>{stores.items}</h5>
          <button onClick={() => remove(stores)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
