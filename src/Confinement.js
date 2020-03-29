import React, { useEffect,useState } from 'react';
import Recipeconf from "./Recipeconf";
import "./App.css";
 

const Confinement = () => { 
  
  const APP_ID = "22be7d54";
  const APP_Key = "cf1d6681cc0dcae0bed955199fc1718b";

const [recipes, setRecipes] = useState ([]);
const [search, setSearch]= useState ("");
const [query, setQuery]= useState ('pasta');


  useEffect ( () => {
getRecipes();
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_Key}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

const updateSearch = event => {
  setSearch (event.target.value);
}

const getSearch = event => {
  event.preventDefault();
  setQuery(search);
  setSearch('');
}

return (
<div className="App">
<div className="bgconf">
<form onSubmit={getSearch} className="search-form" >
  <input className="search-bar-conf" type="text" placeholder="Looking for recipes" value={search} onChange={updateSearch} />
  <button  className="search-button-conf" type="submit">Search</button>
</form>
</div>
<div className="ordrecarte">
{recipes.map(recipe => (
  <Recipeconf key={recipe.recipe.label} title={recipe.recipe.label} 
  image={recipe.recipe.image} calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredients} />
))}
</div>
</div>
)
}


export default Confinement;