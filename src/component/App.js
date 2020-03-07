import React, {useEffect,useState} from 'react';
import '../css/App.css'
import Recipe from "./Recipe"

const App =()=>{

  const APP_ID ="db6f1d19";
  const APP_KEY ="4327ca616e89a204bdc99d5fb54b90ad";

  //const [counter, setcounter] = useState(0);

  const [recipes, setRecipes]   = useState([]);
  const [search, setSearch]     = useState("");
  const [query, setQuery]       = useState('chicken');


    useEffect(()=>{
        getRecepies();
        //console.log('fetchiung data')
    },[query]);

  const getRecepies = async ()  =>{
      const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
  };
  const updateSearch = e => {
      setSearch(e.target.value);
      console.log(search);
  };

  const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };

  return(
      <div>
        <div className="container">
            <form action="" onSubmit={getSearch} className="mt-2">
                <input className="form-control" type="text" value={search} onChange={updateSearch} placeholder="Egg, Beef"/>
                <input className="btn btn-primary btn-lg btn-block mt-2" type="submit" value="Search"/>
            </form>

                {recipes.map(recipe =>(

                    <Recipe
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}

        </div>

        </div>
  );

};

export default App;
