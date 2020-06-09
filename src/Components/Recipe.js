import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

function Recipe({ recipe }) {
  const { label, image, url, ingredients } = recipe.recipe;
  //const { sshow } = recipe.sshow;
  const [show, setShow] = useState(false);
  //setShow(false);

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
}

export default Recipe;
