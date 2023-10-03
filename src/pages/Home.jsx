import React from "react"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getRecipes, filterRecipesByDiet, getDiets, orderByAlphabet, orderByHealthScore, getDetail } from "../actions/index"
import Cards from "../components/Cards"
import Pagineted from "../components/Pagineted";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";
import Filter from "../components/Filter";
import "./styles/Home.css"
import { Link } from "react-router-dom";

export default function Home() {
    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.filterRecipes)
    const [currentPage, setCurrentPage] = useState(1)
    const [order, setOrder] = useState("")
    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets())
        dispatch(getDetail(false))
    }, [dispatch])

    useEffect(() => {

    }, [order])

    // eslint-disable-next-line no-unused-vars
    const [recipesPerPage, setRecipesPerPage] = useState(9)
    const indexOfLastRecipe = recipesPerPage * currentPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    let currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const handleFilter = (diet) => {
        dispatch(filterRecipesByDiet(diet))
    }
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handleOrder = (order) => {
        console.log(order.value)
        if (order.id === "alphabet") {
            dispatch(orderByAlphabet(order.value))
        } else {
            dispatch(orderByHealthScore(order.value))
        }
        setOrder(order.value)
    }

    return (
        <div >
            <div className="container-img"></div>
            <h1>HealthyEats</h1>
            <div className="container-create">
                <Link to="/form">
                    <p>Create Recipe</p>
                </Link>
            </div>
            <div className="fs-container">
                <Sort handle={handleOrder}></Sort>
                <Filter handle={handleFilter}></Filter>
            </div>
            <SearchBar></SearchBar>
            <Pagineted
                recipesPerPage={recipesPerPage}
                allRecipes={recipes.length}
                paginado={paginado}
            />
            <div><Cards currentRecipes={currentRecipes} /></div>
        </div>
    )
}