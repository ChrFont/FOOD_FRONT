import React from "react";
import "./styles/Pagineted.css"

export default function Pagineted({ recipesPerPage, allRecipes, paginado }) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <div className="pagineted-container">
            {pageNumber.map(number => (
                <span className="pagineted-a" onClick={() => paginado(number)}>{number}</span>
            ))
            }
        </div>
    )
}