import './App.css';
import { useEffect, useState } from 'react';
import video from './video.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "087050ba";
  const MY_KEY = "7bad93127a66b465e8e4e11e804c9005";

  const [myRecipes, setMyRecipes] = useState([]);
  const [mySearch, setMySearch] = useState('');
  const [wordSubmitted, setWordSubmitted] = useState('avocado');


  useEffect(() => {
    functionResponse()
  }, [wordSubmitted])

  const functionResponse = async() => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
  }

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div>

      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/></video>
          <h1>FIND A RECIPE</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>

          <div className='container'>
            <button><img className='icon' alt='icon' src='https://img.icons8.com/?size=512&id=80991&format=png'/></button>
          </div>
        </form>
      </div>

      <div>
        {myRecipes.map((element, index) => (
          <MyRecipesComponent key={index}
            image = {element.recipe.image}
            type = {element.recipe.cuisineType}
            label = {element.recipe.label}
            calories = {element.recipe.calories}
            time = {element.recipe.totalTime}
            ingredients = {element.recipe.ingredientLines}
            />
        ))}
      </div>

    </div>
  );
}

export default App;
