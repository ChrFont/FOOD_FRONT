import React from "react";
import "./styles/Card.css"

export default function Card({img, name, diets}){
    return (
        <div className="card-header">
            <img src={img} alt={name} width="250px" height="200px"></img>
            <div className="card-body">
                <h3 >{name}</h3>
                <div className="diets-container">
                    {diets.map(e => (
                        <p>{e}</p>
                    ))}
                </div>
                
            </div>
        </div>
    )
}