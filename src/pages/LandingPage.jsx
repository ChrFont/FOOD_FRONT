import React from "react"
import "./styles/LandingPage.css"
import { Link } from "react-router-dom"

export default function LandingPage() {
    return (
        <div className="landing">
            <div className="landing__img">
                <h1>HealthyEats</h1>
                <Link to="/home" className="enter__button">ENTER</Link>
            </div>
        </div>
    )
}