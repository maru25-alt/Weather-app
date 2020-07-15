import {SET_CURRENT_DATA, SET_FORECAST_DATA, SET_LOCATION, GET_MAP, GET_TABLE_DATA} from '../action/types'

const intialState = {
    city: '',
    currentData: {},
    forecastData: {},
    map: '',
    tableData: {},
}

export default function (state = intialState, action){
    switch(action.type){
        case SET_LOCATION :
            return {
                ...state,
                city: action.payload
            };
        case SET_CURRENT_DATA: 
            return{
                ...state,
                currentData: action.payload
            };
        case SET_FORECAST_DATA:
            return{
                ...state,
                forecastData: action.payload
            }
        case GET_MAP:
            return{
                ...state,
                map: action.payload
            } 
        case GET_TABLE_DATA:
            return{
                ...state,
                tableData: action.payload
            }              
        default: return state;
    }

}