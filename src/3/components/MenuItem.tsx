import { useState } from "react";
import { IMenuItem, IRecipe } from "../Interfaces";
import { Button } from "./Button";

const MenuItem: React.FC<IMenuItem> = ({
  recipe,
  activeList,
  toggleRecipeDelicious,
  toggleRecipe,
  removeRecipe,
}: IMenuItem) => {


  const itemIndex = activeList.findIndex((r) => r.id === recipe.id);
  const isActive: boolean = itemIndex === -1 ? false : true;

  function toggleActiveList(recipe: IRecipe) {
    toggleRecipe(recipe);
  }

  return (
    <li className="menu__item card">
        {recipe.delicious && <span className="card__fnyt">mmmmh!</span>}
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>
        {recipe.priceCurrency} {recipe.price}
      </p>

      <div className="card__buttons">
        {toggleRecipeDelicious &&
          (recipe.delicious ? (
            <Button
              text="Delicious?"
              onClick={() => toggleRecipeDelicious(recipe)}
            />
          ) : (
            <Button
              text="Delicious?"
              onClick={() => toggleRecipeDelicious(recipe)}
            />
          ))}
        <Button
          text={isActive ? "Set Inactive" : "Set Active"}
          onClick={() => toggleActiveList(recipe)}
        />
        <Button text="Delete" onClick={() => removeRecipe(recipe)} />
      </div>
    </li>
  );
};

export default MenuItem;
