import React from "react";



export default function CardElement(props) {
  return (
    <div onClick={() => {props.handleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped ? "flip" : ""}`}>
      <div className="card_front">
        <img className="icon" 
        src={`assets/images/front/${props.card.icon}.png`}
        alt={props.card.icon}></img>
      </div>
      <div className="card_back">
        <img className="icon" 
        src={`assets/images/back/cerebro.png`}
        alt={"cerebro"}>
        </img>
       </div>
    </div>
  )
  }