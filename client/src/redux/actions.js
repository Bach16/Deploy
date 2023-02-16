import axios from "axios";
export const ERROR = "ERROR"
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export const RESET_COUNTRY_DETAILS = "RESET_COUNTRY_DETAILS";
export const ADD_FORM_COUNTRIES = "ADD_FORM_COUNTRIES";
export const DELETE_FORM_COUNTRIES = "DELETE_FORM_COUNTRIES";
export const GET_SEASONS = "GET_SEASONS";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const CHANGE_PAGE= "CHANGE_PAGE";
export const CHANGE_SEARCH_INPUT= "CHANGE_SEARCH_INPUT";
export const CHANGE_FORM_INPUT= "CHANGE_FORM_INPUT";
export const CHANGE_INPUT_LENGTH= "CHANGE_INPUT_LENGTH";
export const GET_ACTIVITIES= "GET_ACTIVITIES";
export const FILTER_BY_ACTIVITY= "FILTER_BY_ACTIVITY";
export const FILTER_BY_CONTINENT= "FILTER_BY_CONTINENT";
export const SORT_BY_POPULATION= "SORT_BY_POPULATION";
export const CHANGE_INPUT_SORT= "CHANGE_INPUT_SORT";
export const CHANGE_INPUT_BY_CONTINENT= "CHANGE_INPUT_BY_CONTINENT";
export const CHANGE_INPUT_BY_ACTIVITY= "CHANGE_INPUT_BY_ACTIVITY";
export const SORT_ALPHABETICALLY= "SORT_ALPHABETICALLY";

export const getCountries = () => {
    return function(dispatch){
        try {               
            axios.get(`http://localhost:3001/countries`)
            .then((response) => dispatch({type:GET_COUNTRIES, payload: response.data}))                     
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const getCountry = (id) => {
    return function(dispatch){
        try {               
            axios.get(`http://localhost:3001/countries/${id}`)
            .then((response) => dispatch({type:GET_COUNTRY_BY_ID, payload: response.data}))                     
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const resetCountryDetails = () => {
    return function(dispatch){
        try {               
            dispatch({type:RESET_COUNTRY_DETAILS, payload: {}})                    
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const addFormCountries = (country) => {
    return function(dispatch){
        try {               
            dispatch({type:ADD_FORM_COUNTRIES, payload:country})                    
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const deleteFormCountries = (country = []) => {
    return function(dispatch){
        try {               
            dispatch({type:DELETE_FORM_COUNTRIES, payload:country})                    
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const getSeasons = () => {
    return function(dispatch){
        try {               
            axios.get(`http://localhost:3001/seasons`)
            .then((response) => dispatch({type:GET_SEASONS, payload: response.data}))                    
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const postActivity = (activity) => {
    return function(dispatch){
        try {               
            axios.post(`http://localhost:3001/activities`,activity)
            .then((response) => dispatch({type:POST_ACTIVITY, payload: response.data}))                    
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const changePage = (page) => {
    return function(dispatch){
        try {               
            dispatch({type:CHANGE_PAGE, payload:page})                    
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const changeSearchInput = (input) => {
    return function(dispatch){
        try {               
            dispatch({type:CHANGE_SEARCH_INPUT, payload:input})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const changeFormInput = (input) => {
    return function(dispatch){
        try {               
            dispatch({type:CHANGE_FORM_INPUT, payload:input})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const changeInputLength = (input) => {
    return function(dispatch){
        try {               
            dispatch({type:CHANGE_INPUT_LENGTH, payload:input})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const getActivities = () => {
    return function(dispatch){
        try {               
            axios.get(`http://localhost:3001/activities`)
            .then((response) => dispatch({type:GET_ACTIVITIES, payload: response.data}))                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const filterByActivity = () => {
    return function(dispatch){
        try {               
            dispatch({type:FILTER_BY_ACTIVITY})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const filterByContinent = (continent) => {
    return function(dispatch){
        try {               
            dispatch({type:FILTER_BY_CONTINENT, payload:continent})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const sortByPopulation = (order) => {
    return function(dispatch){
        try {               
            dispatch({type:SORT_BY_POPULATION, payload:order})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const changeInputSort = (value) => {
    return function(dispatch){
        try {               
            dispatch({type:CHANGE_INPUT_SORT, payload:value})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const changeInputByActivity = (value) => {
    return function(dispatch){
        try {               
            dispatch({type:CHANGE_INPUT_BY_ACTIVITY, payload:value})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const changeInputByContinent = (value) => {
    return function(dispatch){
        try {               
            dispatch({type:CHANGE_INPUT_BY_CONTINENT, payload:value})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const sortAlphabetically = (order) => {
    return function(dispatch){
        try {               
            dispatch({type:SORT_ALPHABETICALLY, payload:order})                    
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})
        }
    }
}




