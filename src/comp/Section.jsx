import { useState } from "react"
import Recipe from "./Recipie"
import Ingredients from "./ingredients"

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

      <Ingredients isShown={isShown} ingredientsList={ingredientsList} showRecpie={showRecpie} ingredientsListHtml={ingredientsListHtml}/>

      <Recipe isShown={isShown} />
    </main>
  )
}