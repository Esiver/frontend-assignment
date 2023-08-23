import { FunctionComponent } from "react";
import { IMenu } from "../Interfaces";
import MenuItem from "./MenuItem";


const MenuList:FunctionComponent<IMenu> = ({menuClass, recipeList, activeList, toggleRecipeDelicious,toggleRecipe, removeRecipe}:IMenu) => (
    

    <ul className={`menu__list ${menuClass}`}>
        {recipeList.map((recipe) => (
            
            <MenuItem 
                key={recipe.id} 
                recipe={recipe} 
                activeList = {activeList}
                toggleRecipeDelicious={toggleRecipeDelicious}
                toggleRecipe={toggleRecipe}
                removeRecipe={removeRecipe}
            />
        ))}
    </ul>
)


export default MenuList