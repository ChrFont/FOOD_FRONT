import Card from "./Card";
import React from "react";
import {Link} from "react-router-dom"
import "./styles/Cards.css"


export default function Cards({currentRecipes}){
    
    return(
        <div className="cards-wraper">
            <div className="cards-container">
                {
                    currentRecipes.length > 0 ? currentRecipes.map(e => 
                        (   <div className="cards">
                    <Link to={`/details/`+ e.id}>
                        <Card key={e.id} id={e.id} img={e.image} name={e.name} diets={e.diets}></Card>
                    </Link>
                    </div>
                )) : false
            }
            </div>
        </div>
    )
}