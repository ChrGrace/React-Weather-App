import Card from "./Card"

const Forecast = ({
    forecast
}) => {

    console.log(weather)
    const list = forecast.list
    return (
        <>
            {list.map(item =>
                <card
                    temp={item.main.temp}
                    wind={item.wind.speed}
                    clouds={item.clouds.all}
                />
            )}
        </>
    )
}

export default Forecast