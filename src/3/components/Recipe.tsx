import { useState } from "react";
import { IRecipe } from "../Interfaces";


export const Recipe:React.FunctionComponent<IRecipe> = (recipeObj:IRecipe) => {
    const [delicious, setDelicious] = useState(false)

    return (
        <div className="recipe card">  
            <h2>
                {recipeObj.title}
            </h2>
            <p>
                {recipeObj.description}
            </p>
            <p>
                {recipeObj.price} {recipeObj.priceCurrency}
            </p>
        </div>
    )
}