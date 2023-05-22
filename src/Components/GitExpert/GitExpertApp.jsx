import { useState } from "react"
import AddCategory from "../AddCategory/AddCategory"
import GifGrid from "../GifGrid/GifGrid"

const GitExpertApp = () => {

const [categories,setCategories] = useState(['Dragon Ball'])

    const addToCategory = (onNewCategory)=> {
        if(categories.includes(onNewCategory)) return;
        setCategories([onNewCategory,...categories])
    }   

  return (
    <div>
        <div className="title">
        <img src="img/OIP.jpg" alt="/" width="80px" height="80px" />
            <div>Giphy</div>
        </div>
        <div className=" py-6">
            <AddCategory
             onNewCategory = {(value) => addToCategory (value)}
            />
        </div>

        <div>
            {categories.map((category)=> (
                   <GifGrid
                    key={category}
                    category={category}
                    />
                ))}
        </div>
    </div>
  )
}

export default GitExpertApp