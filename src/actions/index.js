import axios from "axios"

export function getRecipes(){
    return async function(dispatch){
        let json = await axios.get(`${process.env.REACT_APP_NEXT_PUBLIC_QUERIES}/recipes`)
        return dispatch({
            type: "GET_RECIPES",
            payload: json.data
        })
    }
}

export function getDiets(){
    return async function(dispatch){
        let json = await axios.get(`${process.env.REACT_APP_NEXT_PUBLIC_QUERIES}/diets`)
        return dispatch({
            type: "GET_DIETS",
            payload: json.data
        })
    }
}

export function filterRecipesByDiet(payload){
    return {
        type: "FILTER_BY_DIET",
        payload
    }
}

export function orderByAlphabet(payload){
    return {
        type: "ORDER_BY_ALPHABET",
        payload
    }
}

export function orderByHealthScore(payload){
    return {
        type: "ORDER_BY_HEALTHSCORE",
        payload
    }
}


export function searchRecipe(name){
    return async function(dispatch){
        let json = await axios.get(`${process.env.REACT_APP_NEXT_PUBLIC_QUERIES}/recipes?name=${name}`)
        return dispatch({
            type: "SEARCH_RECIPE",
            payload: json.data
        }) 
    }
}

export function getDetail(id){
    if (id === false) {
        return {
            type: "GET_DETAIL",
            payload: false
        }
    }
    return async function(dispatch){
        let json = await axios.get(`${process.env.REACT_APP_NEXT_PUBLIC_QUERIES}/recipes/${id}`)
        return dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

export function postRecipe(payload){ // objeto del formulario con los datos
    console.log(payload);
    return async function(dispatch){
        let json = await axios.post(`${process.env.REACT_APP_NEXT_PUBLIC_QUERIES}/recipes`, payload)
        alert("receta creada")
        return dispatch({
            type: "POST_RECIPE",
            payload: json.data
        })
    }
    
}