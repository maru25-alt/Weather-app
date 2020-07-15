import axios from 'axios'
import {url_base, API} from '../config'
import {SET_CURRENT_DATA, SET_FORECAST_DATA, SET_LOCATION, GET_MAP, GET_TABLE_DATA} from './types'

export const getTodayData = () => dispatch => {
    navigator.geolocation.getCurrentPosition(async function(position) {
        var latitude		= position.coords.latitude;						
        var longitude		= position.coords.longitude;
       await axios.get(`${url_base}find?appid=${API}&lat=${latitude}&lon=${longitude}&units=metric`)
       .then(res => {
          
           dispatch({
              type: SET_LOCATION,
              payload:res.data.list[0].name
           })
           dispatch({
               type: SET_CURRENT_DATA,
               payload: res.data.list[0]
           })
       });
       
   })
}

export const getForecastData = () => dispatch => {
    navigator.geolocation.getCurrentPosition( function(position) {
        var latitude		= position.coords.latitude;						
        var longitude		= position.coords.longitude;
        axios.get(`${url_base}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`)
        .then(res => {
            dispatch({
                type: SET_FORECAST_DATA,
                payload: res.data
            })
        })
       
       
      })
}

export const getData = (query) => dispatch => {
    dispatch({
        type: SET_LOCATION,
        payload:query
    })
    axios.get(`${url_base}forecast?q=${query}&units=metric&appid=${API}`)
    .then(res => {
         
          dispatch({
            type: SET_FORECAST_DATA,
            payload: res.data
        })
    })
    axios.get(`${url_base}find?q=${query}&units=metric&appid=${API}`)
    .then(res => {
        dispatch({
            type: SET_CURRENT_DATA,
            payload: res.data.list[0]
        })
    })
}

export const getMapData = (query) => dispatch => {
    axios.get(` https://tile.openweathermap.org/map/temp_new/3/0/1.png?appid=${API}`)
    .then(res => {
      
        dispatch({
            type: GET_MAP,
            payload: res.data
        })
    })
}


export const getTableData = () => dispatch => {
    navigator.geolocation.getCurrentPosition( function(position) {
        var latitude		= position.coords.latitude;						
        var longitude		= position.coords.longitude;
    
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`)
        .then(res => {
           
           dispatch({
               type: GET_TABLE_DATA,
               payload: res.data
           })
        });
    
    })
   

    // axios.get(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=33.441792&lon=-94.037689&dt=1594355948&appid=${API}`)
    // .then(res =>{
    //     console.log(res.data)
    // })
}