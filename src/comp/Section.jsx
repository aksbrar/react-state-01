import { useState } from "react"
import Recipe from "./Recipie"

export default function Section(){

  // incredients list
  let [ingredientsList, setIngredientsList] = useState(["all spices", "oregano", "chicken", "beef"])
  let [isShown, setisShown] = useState(false)
  let ingredientsListHtml = ingredientsList.map((item)=> {return <li key={item}>{item}</li>})

  function handleForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientsList(ingredientsList => [...ingredientsList, newIngredient] )
  }

  function showRecpie(){
    setisShown(prev => !prev) 
  }

  return (
    <main>
      <form action={handleForm} className="add-ingredient-form">
        <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {
        ingredientsList.length > 0 &&
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListHtml}</ul>
            {
              ingredientsList.length > 3 &&
              <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={showRecpie}>{isShown ? "Hide" : "Show"} recipe</button>
              </div>}
        </section>
      }

      <Recipe isShown={isShown} />
    </main>
  )
}