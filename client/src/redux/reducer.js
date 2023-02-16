import {GET_COUNTRIES,FILTER_BY_ACTIVITY,SORT_ALPHABETICALLY,CHANGE_INPUT_SORT,SORT_BY_POPULATION,FILTER_BY_CONTINENT,GET_SEASONS,GET_ACTIVITIES,CHANGE_INPUT_LENGTH,CHANGE_FORM_INPUT,CHANGE_PAGE,CHANGE_SEARCH_INPUT,POST_ACTIVITY,CHANGE_INPUT_BY_CONTINENT,CHANGE_INPUT_BY_ACTIVITY,GET_COUNTRY_BY_ID,ADD_FORM_COUNTRIES,RESET_COUNTRY_DETAILS,DELETE_FORM_COUNTRIES,ERROR} from "./actions"

const initialState = {
    country:{} ,
    countries:[],
    error: [],
    formCountries:[],
    seasons:[],
    post:{},
    page:1,
    searchInput:"",
    formInput:"",
    searchInputLength:0,
    activities: [],
    filteredCountries:[],
    sortedCountries:[],
    inputSort:"",
    filterInputs:{
        byContinent:"",
        byActivity:""
    }
}
const rootReducer =(state=initialState,action) =>{
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                error: action.payload
            }  
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }  
        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                country: action.payload
            }  
        case RESET_COUNTRY_DETAILS:
            return {
                ...state,
                country: action.payload
            }
        case ADD_FORM_COUNTRIES:
            return {
                ...state,
                formCountries:action.payload
            }
        case DELETE_FORM_COUNTRIES:
            return{
                ...state,
                formCountries:action.payload
            }
        case GET_SEASONS:
            return{
                ...state,
                seasons:action.payload
            }
        case POST_ACTIVITY:
            return{
                ...state,
                post:action.payload
            }
        case CHANGE_PAGE:
            return{
                ...state,
                page:action.payload
            }
        case CHANGE_SEARCH_INPUT:
            return{
                ...state,
                searchInput:action.payload
            }
        case CHANGE_FORM_INPUT:
            return{
                ...state,
                formInput:action.payload
            }
        case CHANGE_INPUT_LENGTH:
            return{
                ...state,
                searchInputLength:action.payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        case FILTER_BY_ACTIVITY:
            let newArray = []
            if(state.filterInputs.byActivity === "By Activities") {
                state.filterInputs.byActivity = ""
                if(state.filterInputs.byContinent.length){
                    newArray = state.countries.filter((c=>c.continent === state.filterInputs.byContinent))
                    return{
                        ...state,
                        filteredCountries: newArray.flat() 
                    }
                }
            }
            if(state.filterInputs.byActivity.length && state.filterInputs.byContinent.length){
                newArray = state.countries.filter(c=>c.activities)
                const newerArray = state.filterInputs.byActivity.split(",")
                const filteredByActivity = newerArray.map(countryNames=>newArray.filter(c=>c.activities.name === countryNames))
                const lastArray= filteredByActivity.flat().filter((c=>c.continent === state.filterInputs.byContinent))
                return{
                    ...state,
                    filteredCountries: lastArray.flat() 
                }  
            }else {
                newArray = state.countries.filter(c=>c.activities)
                const newerArray = state.filterInputs.byActivity.split(",")
                const filteredByActivity = newerArray.map(countryNames=>newArray.filter(c=>c.activities.name === countryNames))
                return{
                    ...state,
                    filteredCountries: filteredByActivity.flat() 
                }
            }
        case FILTER_BY_CONTINENT:
            let filteredByContinent = []
            if(state.filterInputs.byContinent === "By Continents") {
                state.filterInputs.byContinent = ""
                if(state.filterInputs.byActivity.length){
                    filteredByContinent = state.countries.filter(c=>c.activities)
                    const newerArray = state.filterInputs.byActivity.split(",")
                    const filteredByActivity = newerArray.map(countryNames=>filteredByContinent.filter(c=>c.activities.name === countryNames))
                    return{
                        ...state,
                        filteredCountries: filteredByActivity.flat() 
                    }
                    }
            }
            if(state.filterInputs.byActivity.length && state.filterInputs.byContinent.length){
                filteredByContinent = state.countries.filter(c=>c.activities)
                const newerArray = state.filterInputs.byActivity.split(",")
                const filteredByActivity = newerArray.map(countryNames=>filteredByContinent.filter(c=>c.activities.name === countryNames))
                const lastArray= filteredByActivity.flat().filter((c=>c.continent === state.filterInputs.byContinent))
                return{
                    ...state,
                    filteredCountries: lastArray.flat() 
                } 
            } else {
                filteredByContinent = state.countries.filter((c=>c.continent === state.filterInputs.byContinent))
                return{
                    ...state,
                    filteredCountries: filteredByContinent.flat() 
                }
            }
        case SORT_BY_POPULATION:
          let sortedByPopulation = []
          if(state.filteredCountries.length) {
            if(state.inputSort === "Minor") {
              sortedByPopulation = state.filteredCountries.sort(((a,b)=> a.population-b.population))
            }
            if(state.inputSort === "Major") {
              sortedByPopulation = state.filteredCountries.sort(((a,b)=> b.population-a.population))
            } 
            else sortedByPopulation = state.filteredCountries
          } else {
            if(state.inputSort === "Minor") {
              sortedByPopulation = state.countries.sort(((a,b)=> a.population-b.population))
            }
            if(state.inputSort === "Major") {
              sortedByPopulation = state.countries.sort(((a,b)=> b.population-a.population))
            } 
            else sortedByPopulation = state.countries

          }           
          return{
            ...state,
            filteredCountries: sortedByPopulation,
          }     
        case SORT_ALPHABETICALLY:
          let sortedAlphabetically = []
          let sorting = (countries) => {
            return countries.sort((a,b)=> {
              if(a.name < b.name) return -1
              else if (a.name > b.name) return 1
              else return 0
            })
          }
          if(state.filteredCountries.length) {
            if(state.inputSort === "A_Z") {
              sortedAlphabetically = sorting(state.filteredCountries)
            }
            if(state.inputSort === "Z_A") {
              sortedAlphabetically = sorting(state.filteredCountries).reverse()
            }  else sortedAlphabetically = state.filteredCountries

          } else {
            if(state.inputSort === "A_Z") {
              sortedAlphabetically = sorting(state.countries)
            }
            if(state.inputSort === "Z_A") {
              sortedAlphabetically = sorting(state.countries).reverse()
            }  else sortedAlphabetically = state.countries
        }   
          return{
            ...state,
            filteredCountries: sortedAlphabetically,
          }     
            
        case CHANGE_INPUT_SORT:
          if(action.payload === "By Population" || action.payload === "Alphabetically")
          action.payload = ""
            return{
                ...state,
                inputSort: action.payload
            }
        case CHANGE_INPUT_BY_CONTINENT:
            return{
                ...state,
                filterInputs: {
                    ...state.filterInputs,
                    byContinent:action.payload
                } 
            }
        case CHANGE_INPUT_BY_ACTIVITY:
            return{
                ...state,
                filterInputs: {
                    ...state.filterInputs,
                    byActivity:action.payload
                } 
            }
        default:
            return {...state}
    }
}

export default rootReducer