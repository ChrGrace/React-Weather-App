import Card from "./Card"

const Weather = ({
    weather
}) => {

    console.log(weather)
    return (
        <>
            <h2>City: {weather?.name}</h2>
            <p>Temperature: {weather?.main.temp}</p>
            <card />
        </>
    )
}

export default Weather 