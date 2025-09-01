// imports
import { useRef, useState } from "react"
import Recipe from "./Recipie"
import Ingredients from "./ingredients"
import Form from "./Form"

export default function Section(){

  // state variables
  let [ingredientsList, setIngredientsList] = useState(["all spices", "oregano", "chicken", "beef"])
  let [isShown, setisShown] = useState(false)

  // ref variables
  const divRef =  useRef(null)
  console.log(divRef)
  
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
                   ref={divRef}
      />

      <Recipe isShown={isShown} />
    </main>
  )
}