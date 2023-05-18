function MyRecipesComponent({image, type, label, calories, time, ingredients}) {

    return(<div>

        <div className="result food">
            <img className="food" alt="food" src={image}/>
        </div>

        <div className="component">
            <div className="result">
                <h2>{type}</h2>
            </div>

            <div className="result">
                <h3>{label}</h3>
            </div>

            <div className="result">
                <p>{calories.toFixed()} calories</p>
            </div>

            <div className="result">
                <p>{time} min</p>
            </div>

            <ul className="list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}><img src="https://img.icons8.com/?size=512&id=p7d8gkIJF7IL&format=png" className="icon" alt="ingredient"/>{ingredient}</li>
                ))}
            </ul>
        </div>

    </div>

    )
}

export default MyRecipesComponent;