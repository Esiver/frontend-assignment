import { Dispatch } from "react";

export interface ButtonProps {
    onClick: (e:void|Recipe) => void | Recipe;
    text:string;
}

export interface SearchBarProps {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IMenuItemFormProps {
    formTitle:string;
    setTargetList:  Dispatch<React.SetStateAction<Recipe[]>>;
    targetList:Recipe[];
}


export interface IMaterial {
    title:string
}
export interface Recipe {
    id:string;
    title:string;
    priceCurrency:string;
    price:number;
    description:string;
    materials?:IMaterial[];
}


export interface IMenu {
    menuClass? : string;
    recipeList: Recipe[];
    activeList : Recipe[];
    toggleRecipe:(recipeToAdd:Recipe) => void;
    removeRecipe: (recipeToRemove:Recipe) => void;
}

export interface IMenuItem {
    recipe:Recipe;
    toggleRecipe: (recipeToAdd:Recipe) => void;
    activeList : Recipe[];
    removeRecipe: (recipeToRemove:Recipe) =>void;

}

