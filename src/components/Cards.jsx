import Card from "./Card";
import React from "react";
import "./styles/Cards.css"


export default function Cards({ currentRecipes }) {

    return (

        <div className="cards-container">
            {
                currentRecipes.length > 0 ? currentRecipes.map(e =>
                (
                    <Card id={e.id} img={e.image} name={e.name} diets={e.diets}></Card>

                )) : false
            }
        </div>

    )
}