import React, { useState } from "react";
import "./styles/Sort.css"

export default function Sort({ handle }) {
    const [alphabet, setAlphabet] = useState(true)
    const [healthScore, setHealthScore] = useState(true) //menor-mayor

    const handleChange = (order) => {
        if (order === "alphabet") {
            setAlphabet(!alphabet)
            alphabet ? handle("a-z") : handle("z-a")
        } else if (order === "healthScore") {
            setHealthScore(!healthScore)
            healthScore ? handle("menor-mayor") : handle("mayor-menor")
        }
    }
    return (
        <div className="container__sort">
            <p className="sort__title">Order:</p>
            <div onClick={() => handleChange("alphabet")}>
                {alphabet ? <p>Z-A</p> : <p>A-Z</p>}

            </div>
            <div onClick={() => handleChange("healthScore")}>
                {healthScore ? <p>100-0</p> : <p>0-100</p>}
            </div>

        </div>
    )
}