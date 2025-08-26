import { useState } from "react"

export default function Section(){

  // incredients list
  let [ingredientsList, setIngredientsList] = useState([])

  function handleSubmit(event) {
        event.preventDefault()
        alert("working")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredientsList(ingredientsList => [...ingredientsList, newIngredient] )
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <ul className="list-container">
        {ingredientsList.map((item)=> {return <li key={item}>{item}</li>})}
      </ul>
    </section>
  )
}