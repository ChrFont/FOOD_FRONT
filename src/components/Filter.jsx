import React from "react";
import { useSelector } from "react-redux";
import "./styles/Filter.css"

export default function Filter({handle}){
    const diets =useSelector(state => state.diets) 
    return (
        <div className="filter-wrap">
            <div className="filter-container">
                <h3 className="filter">Filter by Diet</h3>
                <select onChange={e => handle(e.target.value)}>  
                {
                diets.map(e => 
                    <option value={e}>{e}</option>
                )
                }
                </select>            
            </div>
        </div>
    )
}