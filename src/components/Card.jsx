import React from "react";
import "./styles/Card.css"
import { Link } from "react-router-dom"

export default function Card({ img, name, diets, id }) {
    return (
        <div className="card-container">
            <img src={img} alt={name}></img>
            <div className="card-body">
                <h3 >{name}</h3>

                {diets.map(e => (
                    <p>{e}</p>
                ))}

                <Link to={`/details/` + id} className="detail-link">Details</Link>
            </div>
        </div>

    )
}