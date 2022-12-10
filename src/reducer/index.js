const initialState = {
    allRecipes: [],
    filterRecipes: [],
    diets: [],
    detail: []
}

function rootReducer(state = initialState, action){
    
    
    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                allRecipes: action.payload,
                filterRecipes: action.payload
            }
        case "GET_DIETS":
            return {
                ...state,
                diets: action.payload
            }
        case "SEARCH_RECIPE":
            console.log(action.payload);
            if(action.payload.length == 0){
                alert("No existe la receta")
            }else{
                return{
                    ...state,
                    filterRecipes: action.payload
                }           
            }
            break
        case "GET_DETAIL":
            if (action.payload === false) {
                return{
                    ...state,
                    detail: []
                }
            }
            return{
                ...state,
                detail: action.payload
            }
        case "POST_RECIPE":
            console.log(action.payload);
            return{    
                ...state
            }
        case "ORDER_BY_ALPHABET":
            let alphabetOrder = []
            console.log(action.payload);
            if(action.payload === "a-z"){
                alphabetOrder = state.filterRecipes.sort((o1, o2) => {
                    if(o1.name < o2.name) return -1
                    if(o1.name > o2.name) return 1
                    return 0
                })
            }else{
                alphabetOrder = state.filterRecipes.sort((o1, o2) => {
                    if(o1.name > o2.name) return -1
                    if(o1.name < o2.name) return 1
                    return 0
                })
            }
            console.log(alphabetOrder);
            return {
                ...state,
                filterRecipes: alphabetOrder
            }    
        case "ORDER_BY_HEALTHSCORE":  
            console.log(action.payload);    
            let healthScoreOrder = state.filterRecipes
            if(action.payload === "menor-mayor"){
                healthScoreOrder.sort(function(a, b){return a.healthScore - b.healthScore}) 
            }else{
                healthScoreOrder.sort(function(a, b){return b.healthScore - a.healthScore}) 
            }
            console.log(healthScoreOrder);
            return {
                ...state,
                filterRecipes: healthScoreOrder
            }
        case "FILTER_BY_DIET":

            const filterRecipes =state.allRecipes
            const filterDiets = filterRecipes.filter(e => e.diets.includes(action.payload.toLowerCase()))
            console.log(filterRecipes);
            console.log(action.payload);
            console.log(filterDiets);
            return {
                ...state,
                filterRecipes: filterDiets
            }   
        default:
            return state;
    }

}

export default rootReducer