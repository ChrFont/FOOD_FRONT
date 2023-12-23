import React from "react";
import "./styles/Card.css"
import { Link } from "react-router-dom"

export default function Card({ img, name, diets, key }) {
    return (
        <div className="card-header">
            <img src={img} alt={name}></img>
            <div className="card-body">
                <h3 >{name}</h3>
                <div className="diets-container">
                    {diets.map(e => (
                        <p>{e}</p>
                    ))}
                </div>
                <Link to={`/details/` + key} className="detail-link"> </Link>
            </div>
        </div>
    )
}