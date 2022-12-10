import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../actions";
import "./styles/SearchBar.css"

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    function handleInputChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("paso");
        dispatch(searchRecipe(name))
        setName("")     
    }

    return (
        <div className="wrap">
            <div className="search">
                <input type="text" placeholder="Search..." className="searchTerm" value={name}
                onChange={(e) => handleInputChange(e)}
                />
                <button type="submit" onClick={(e) => handleSubmit(e)} className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    )
}