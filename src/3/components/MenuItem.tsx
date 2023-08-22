import { IMenuItem, IRecipe } from "../Interfaces";
import { Button } from "./Button";

const MenuItem: React.FC<IMenuItem> = ({ recipe, toggleRecipe, activeList, removeRecipe }:IMenuItem) => {

    const itemIndex = activeList.findIndex((r)=> r.id === recipe.id);
    const isActive:boolean = itemIndex === -1 ? false : true;

    function toggleActiveList(recipe:IRecipe){
        toggleRecipe(recipe)
    }

    return (
      <li className="menu__item card">
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <p>{recipe.priceCurrency} {recipe.price}</p>
        
        <Button text={isActive ? "Toggle Inactive" : "Toggle Active"} onClick={()=>toggleActiveList(recipe)} />
        <Button text="Delete" onClick={()=>removeRecipe(recipe)} />
      </li>
    );
  };

export default MenuItem;