import { useState } from 'react'
import './App.css'
import Weather from './Components/Weather'

function App() {

    const apikey = "9ef6bcb4eeca1311414dcd4d13f65e9d"
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('')

    const getweather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
        const data = await response.json()
        setWeather(data)
    }

    const getForecast = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`)
        const data = await response.json()
        setWeather(data)

        return (
            <>
                <div className="App">
                    <h1>Weather</h1>
                    <Card weather={weather} />
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Enter city name"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <button onClick={() => {
                            getweather();
                            getForecast();
                        }}>search</button>
                    </div>
                    <weather weather={weather} />
                    <Forecast forecast={forecast} />
                </div>
            </>
        )
    }
}
export default App
