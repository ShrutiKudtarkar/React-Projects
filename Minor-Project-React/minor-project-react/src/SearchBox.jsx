import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { blue } from "@mui/material/colors";

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8a7e9c7a44ff001cd129f798e55dcb25"

    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
    } catch(err){
        throw err;
    }
    };

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) =>{
        try{
        evt.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch(err){
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    };

    return(
    <div className="SearchBox" style={{alignItems: "center"}}>
        <form onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined"
            value={city} 
            onChange={handleChange}
            required/>
            &nbsp; &nbsp;
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color: 'red'}}>No such place exists!</p>}
        </form>
    </div>
    );
}