import React, { useEffect,useState } from 'react';
import Recipecarte from "./Recipecarte";
import "./App.css";
import Suggestionnew from './Suggestionnew';
import Blogsug from './Blogsug';



const Homepage = () => { 
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
<div className="bg">
<form onSubmit={getSearch} className="search-form" >
  <input className="search-bar" type="text" placeholder="Type your food: a meal,an ingredient ,an idea ..." value={search} onChange={updateSearch} />
  <button  className="search-button" type="submit">Search</button>
</form>
</div>
<div className="ordrecarte">
{recipes.map(recipe => (
  <Recipecarte key={recipe.recipe.label} title={recipe.recipe.label} 
  image={recipe.recipe.image} calories={recipe.recipe.calories}  />
))}
</div>
<div>
  <Suggestionnew />
  <Blogsug />
</div>
</div>
)
}

export default Homepage;