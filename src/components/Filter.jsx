import React from "react";
import { useSelector } from "react-redux";
import "./styles/Filter.css"

export default function Filter({ handle }) {
    const diets = useSelector(state => state.diets)
    return (
        <div className="container__filter">
            <p className="filter__title">Diet:</p>
            <select onChange={e => handle(e.target.value)}>
                <option>Gluten free</option>
                {
                    diets.map(e =>
                        <option value={e}>{e}</option>
                    )
                }
            </select>
        </div>
    )
}