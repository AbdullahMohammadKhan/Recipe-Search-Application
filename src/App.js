import React, { useState } from "react";
//import ReactDOM from "react-dom";
//import React from "react";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import Recipe from "./Components/Recipe";
import Alert from "./Components/Alert";

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "b2ca4549";
  const APP_KEY = "b334c64dad9381f395440e1888670668";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      setRecipes(result.data.hits);
      if (!result.data.more) {
        return setAlert("No Food With Such Name");
      }
      console.log(result);
      setQuery("");
    } else {
      setAlert("Please Fill In The Form");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  const onChange = (e) => {
    setQuery(e.target.value);
    //setAlert("");
  };

  return (
    <>
      <div className="App">
        <h1> Marwa Food Searching App</h1>
        <form className="search-form" onSubmit={onSubmit}>
          {alert !== "" && <Alert alert={alert} />}
          <input
            type="text"
            placeholder="Search Food"
            autoComplete="off"
            onChange={onChange}
            value={query}
            onClick={() => setAlert("")}
          />
          <input type="submit" value="search" />
        </form>

        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4} recipe={recipe} />)}
        </div>
      </div>
    </>
  );
};

export default App;
