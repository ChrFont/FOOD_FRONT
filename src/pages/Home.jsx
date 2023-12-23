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
    const [filterVisibility, setFilterVisibility] = useState(false)
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
        console.log(order)
        if (order === "a-z" || order === "z-a") {
            dispatch(orderByAlphabet(order))
        } else {
            dispatch(orderByHealthScore(order))
        }
        setOrder(order)
    }

    return (
        <div className="container__home">
            <h1>HealthyEats</h1>
            <div className="container__buttons">
                <div className="home__button">
                    <Link to="/form">
                        <p>Add Recipe</p>
                    </Link>
                </div>
                <div className="home__button" onClick={() => setFilterVisibility(!filterVisibility)}>
                    <p>Filters</p>
                </div>
            </div>
            {filterVisibility ? <Sort handle={handleOrder}></Sort> : null}
            {filterVisibility ? <Filter handle={handleFilter}></Filter> : null}
            <SearchBar></SearchBar>
            <Pagineted
                recipesPerPage={recipesPerPage}
                allRecipes={recipes.length}
                paginado={paginado}
            />
            <Cards currentRecipes={currentRecipes} />
        </div>
    )
}