import { useState } from "react"

const AddCategory = ({onNewCategory}) => {
 
    const [inputValue, setInputValue]= useState("")
    
    const onInputValue = ({target}) => {
        setInputValue(target.value)
    }

    const addSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim().length <=1) return;
        setInputValue("")
        onNewCategory(inputValue.trim())
        
    }
    return (
     <form className="f" onSubmit={addSubmit}>
        <input 
            className="search "
            type="text" 
            placeholder="Search Gifs"
            value={inputValue}
            onChange={onInputValue}

        />
     </form>
  )
}

export default AddCategory