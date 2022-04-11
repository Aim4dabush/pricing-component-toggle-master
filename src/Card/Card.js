import React, { useState } from "react";

//styles
import "./Card.scss";

//list
import cardList from "./CardList/CardList";

function Card() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    setToggle((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <div className="card">
      <div className="toggle">
        <h4>Annually</h4>
        <label className="switch">
          <input type="checkbox" onClick={handleToggle} />
          <span className="slider round"></span>
        </label>
        <h4>Monthly</h4>
      </div>
      <div className="list">
        {cardList.map((list) => {
          return (
            <div className="card-container" key={list.id}>
              <h3>{list.id}</h3>
              <h1>$ {toggle ? list.monthly : list.annually}</h1>
              <hr />
              <h2>{list.storage} Storage</h2>
              <hr />
              <h2>{list.users} Users Allowed</h2>
              <hr />
              <h2>Send up to {list.send}</h2>
              <hr />
              <button>Learn More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
