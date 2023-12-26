import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getDetail } from "../actions"
import "./styles/Details.css"

export default function Details() {

    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])
    const recipeDetail = useSelector(state => state.detail)

    return (
        <div className="wrap-detail">
            {
                recipeDetail.length > 0 ?

                    <div className="detail-container">
                        <h1>{recipeDetail[0].name}</h1>
                        <div className="detail-container-main">
                            <h3>{recipeDetail[0].diets.join(" ")}</h3>
                            <h3>Health Score: {recipeDetail[0].healthScore} points</h3>
                            <h3>Type of dish: {recipeDetail[0].tipoDePlato}</h3>
                            <img src={recipeDetail[0].image ? recipeDetail[0].image : <p>sin imagen</p>} alt=""></img>
                            <p>{recipeDetail[0].summary}</p>
                            <div className="detail-steps">
                                <h3>Steps</h3>
                                {recipeDetail[0].steps.map((e, index) => (
                                    <p>{index + 1}. {e}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    : <p>Cargando</p>
            }
        </div>
    )
}