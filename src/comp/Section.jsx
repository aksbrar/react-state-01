import { useState } from "react"
import Recipe from "./Recipie"
import Ingredients from "./ingredients"
import Form from "./Form"

export default function Section(){

  // state variables
  let [ingredientsList, setIngredientsList] = useState(["all spices", "oregano", "chicken", "beef"])
  let [isShown, setisShown] = useState(false)

  // ingredients list
  let ingredientsListHtml = ingredientsList.map((item)=> {return <li key={item}>{item}</li>})

  // handle form
  function handleForm(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientsList(ingredientsList => [...ingredientsList, newIngredient] )
  }

  // show reipie
  function showRecpie(){
    setisShown(prev => !prev) 
  }

  // return component
  return (
    <main>
      <Form handleForm={handleForm}/>

      <Ingredients isShown={isShown}
                   ingredientsList={ingredientsList} 
                   showRecpie={showRecpie} 
                   ingredientsListHtml={ingredientsListHtml}/>

      <Recipe isShown={isShown} />
    </main>
  )
}