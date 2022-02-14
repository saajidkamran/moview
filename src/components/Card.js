import React from "react";
import "./card.css";

function Card(props) {
  console.log("this is props titile ",props.title);
  return (
    <div className="card">
      <div className="card_Container">
        <div className="card__Detail">
          <img
            className="card_Image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBL7LSn0tKIHUxKgFNhzlOe1X6HtF-TYpOh2jzd9kGBR8UJjYkSzbQ-GhhANldQou9-yM&usqp=CAU"
            alt="/"
          />
        </div>
        <h2 className="card__Title">{props.title}</h2>
        <p className="card__Para">{props.content}</p>
        <button className="card__Btn">View</button>
      </div>
    </div>
  );
}

export default Card;
