import React, {useState, useEffect} from "react"
import NavBar from "../components/NavBar"
import {useSelector, useDispatch} from "react-redux"
import "./styles/Form.css"
import { getDiets, postRecipe } from "../actions"

export default function Form(){

        
    const dispatch = useDispatch()
    const allDiets = useSelector(state => state.diets)
    
    const [recipe, setRecipe] = useState({
        name: "",
        summary: "",
        healthScore:"",
        step: "",
        steps: [],
        diets: []
    })
    const [boton, setBoton] = useState(true)
    const [errores, setErrores] = useState({})
    const [completo, setCompleto] = useState(false)
    
    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])
    
    function handleChange(e){
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value
        })
        setErrores(validar({
            ...recipe,
            [e.target.name]: e.target.value
        }))
        if(JSON.stringify(errores) === '{}' && completo){
            console.log(1);
            setBoton(false)
        }else if(!JSON.stringify(errores) === '{}'){
            console.log(2);
            setBoton(true)
        }else {
            console.log(3);
            setBoton(true)
        }
        if(recipe.name.length > 1 && recipe.summary.length > 1 && recipe.healthScore >=0) setCompleto(true)
        if(recipe.name.length < 1 || recipe.summary.length < 1 || recipe.healthScore < 0) setCompleto(false)
        console.log(recipe);
        console.log(errores);
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(recipe);
        setErrores(validar(recipe))
        if(!JSON.stringify(errores) === '{}'){
            alert("la receta contiene errores")
            setBoton(true)
        }
        const recipePost = {
            name: recipe.name,
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            steps: recipe.steps,
            diets: recipe.diets 
        }
        dispatch(postRecipe(recipePost))
        setRecipe({
            name: "",
            summary: "",
            healthScore: "",
            step: "",
            steps: [],
            diets: []
        })

    }

    function handleDiets(e){
        setRecipe({
            ...recipe,
            diets: [...new Set([...recipe.diets, e.target.value])]
        })
        console.log(e.target.value);
        console.log(recipe.diets);
    }
    function handleDeleteDiets(diet) {
        setRecipe({
          ...recipe,
          diets: recipe.diets.filter((e) => e !== diet),
        });
    }
    function handleDeleteSteps(step) {
        setRecipe({
          ...recipe,
          steps: recipe.steps.filter((e) => e !== step),
        });
    }

    function validar(datos){
        let errores = {}
        if(datos.name){
            if(validName(datos.name)) errores.name ="El nombre debe contener entre 4 y 20 caracteres"
        }else if (datos.name === "") {
            setBoton(true)
        }
        if(datos.summary){
            if(validSummary(datos.summary)) errores.summary = "La descripcion debe contener entre 5 y 20 palabras"
        }else if (datos.summary === "") {
            setBoton(true)
        }
        if(datos.healthScore){
            if(validHealtScore(datos.healthScore)) errores.healthScore = "El puntaje debe estar entre 0 y 100"
        }else if (datos.healthScore === "") {
            setBoton(true)
        }
        return errores
    }

    function validName(str){
        if(typeof str !== "string") return true
        if(str.length < 4) return true
        if(str.length > 20) return true
        return false
    }

    function validSummary(str){
        if(typeof str !== "string") return true
        let strA = str.split(" ")
        if(strA.length < 5) return true
        if(strA.length > 20) return true
        return false
    }

    function validHealtScore(num){
        if(typeof num != "string") return true
        if(num < 0) return true
        if(num > 100) return true
        return false
    }

    function handleSteps(e) {
        setRecipe({
            ...recipe,
            step: "",
            steps: [...new Set([...recipe.steps, e.target.value])],
          });
        console.log(e.target.value)
    }

    return (
        <div className="form-wrap">
            <NavBar></NavBar>
            <div className="img-home"></div>
            <div className="form-container">
                <h1>Register your recipe</h1>
                <p>Thank you for registering your recipe</p>
                <form onSubmit={e =>handleSubmit(e)} className="form">
                    <div className="labels-container">
                        <label for="name" id="name-label">Name</label>
                        <input type="text" name="name" value={recipe.name} onChange={e => handleChange(e)}></input>
                        {errores.name && (<p style={{color: "red",fontSize: "14px",fontWeight: "lighter"}}>{errores.name}</p>)}

                        <label for="summary" id="summary-label">Summary</label>
                        <textarea name="summary" value={recipe.summary} onChange={e => handleChange(e)}></textarea>
                        {errores.summary  && (<p style={{color: "red",fontSize: "14px",fontWeight: "lighter"}}>{errores.summary}</p>)}

                        <label for="healthScore" id="healthScore-label">Health Score</label>
                        <input name="healthScore" type="number" value={recipe.healthScore} onChange={e => handleChange(e)}></input>
                        {errores.healthScore && (<p style={{color: "red",fontSize: "14px",fontWeight: "lighter"}}>{errores.healthScore}</p>)}
                        
                        <div className="steps">
                            <label for="step" id="step-label">Steps</label>
                            <input name="step" type="text" value={recipe.step} onChange={e => handleChange(e)}></input>
                            {errores.step && (<p style={{color: "red",fontSize: "14px",fontWeight: "lighter"}}>{errores.step}</p>)}
                            {recipe.steps.map((e,index) => (
                                <div>
                                    <p>{index +1}. {e} <button onClick={() => handleDeleteSteps(e)}> x</button></p>
                                </div>
                            ))}
                        </div>
                            <button type="button" value={recipe.step} onClick={e => handleSteps(e)}>agregar paso</button>
                        <label for="diets" id="diets-label">Diets</label>
                        <select name="diets" value={recipe.diets} onChange={e => handleDiets(e)}>
                        {allDiets.map(e => (
                            <option name={e} value={e}>{e}</option> 
                        ))}
                        </select>
                        {errores.diets && (<p style={{color: "red",fontSize: "14px",fontWeight: "lighter"}}>{errores.diets}</p>)}
                        <div>
                            {recipe.diets.map((e) => (
                            <div key={e}>
                                <p>{e} <button onClick={() => handleDeleteDiets(e)}> x</button></p>
                            </div>
                            ))}
                        </div>

                        <button type="submit" disabled={boton}>Crear receta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}