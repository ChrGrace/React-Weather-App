const Card = ({
    temperature,
    wind,
    clouds
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <p>Temp: {temp}</p>
                <p>Wind: {wind}</p>
                <p>Clouds: {clouds}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card 