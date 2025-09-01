export default function Ingredients({ingredientsList, showRecpie, isShown, ref}){
  if (ingredientsList.length === 0) return null
  let ingredientsListHtml = ingredientsList.map((item)=> {return <li key={item}>{item}</li>})

  return (
    <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListHtml}</ul>
            {
              ingredientsList.length > 3 &&
              <div className="get-recipe-container">
                <div ref={ref}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={showRecpie}>{isShown ? "Hide" : "Show"} recipe</button>
              </div>}
        </section>
  )      
}