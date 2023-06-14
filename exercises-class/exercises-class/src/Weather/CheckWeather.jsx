function CheckWeather(props){
    const weatherTypes=['sunny', 'windy', 'raining', 'cloudy'];

    const randomWeather=()=>{
        let newTemp=Math.floor(Math.random()*40);
        let newWeatherIndex=Math.floor(
            Math.random()*weatherTypes.length
        );

        props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp)
    }

    return (
        <button onClick={randomWeather}>Check Weather</button>
    )
}

export default CheckWeather