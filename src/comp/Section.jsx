export default function Section(){
  return (
    <section>
      <form className="add-ingredient-form">
        <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
    </section>
  )
}