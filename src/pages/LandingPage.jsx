import React from "react"
import "./styles/LandingPage.css"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

export default function LandingPage(){
    return (
        <div className="landing-wrap">
            <div className="container-img"></div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Link to="/home"><button class="corner-button">ENTER</button></Link>
        </div>
    )
}