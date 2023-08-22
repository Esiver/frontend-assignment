import { FunctionComponent } from "react";
import { IMenu } from "../Interfaces";
import MenuItem from "./MenuItem";


const MenuList:FunctionComponent<IMenu> = ({menuClass, recipeList, toggleRecipe, activeList, removeRecipe}:IMenu) => (
    

    <ul className={`menu__list ${menuClass}`}>
        {recipeList.map((recipe) => (
            
            <MenuItem 
                toggleRecipe={toggleRecipe}
                activeList = {activeList}
                recipe={recipe} 
                key={recipe.id} 
                removeRecipe={removeRecipe}
            />
        ))}
    </ul>
)


export default MenuList