import React from "react";
import "./styles/Sort.css"

export default function Sort({handle}){
   

    return(
        <div className="sort-wrap">
            <div className="sort-container">
                <h3 className="order">Order by</h3>
                <select onChange={e => handle(e.target)} id="alphabet">
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                </select>
                <select onChange={e => handle(e.target)} id="healthScore">
                    <option value="menor-mayor">Menor-Mayor</option>
                    <option value="mayor-menor">Mayor-Menor</option>
                </select>
            </div>
        </div>
    )
}