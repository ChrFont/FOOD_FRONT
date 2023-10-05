import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../actions";
import "./styles/SearchBar.css"

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("paso");
        dispatch(searchRecipe(name))
        setName("")
    }

    return (
        <div className="container__search">
            <i class='bx bx-search' onClick={(e) => handleSubmit(e)}></i>

            <input type="text" placeholder="Search..." value={name}
                onChange={(e) => handleInputChange(e)}
            />
        </div>
    )
}