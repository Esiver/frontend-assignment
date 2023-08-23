import { Dispatch } from "react";

export interface IButtonProps {
    onClick: (e:void|IRecipe) => void | IRecipe;
    text:string;
}
export interface ISearchQuery {
    query:string;
}
export interface ISearchBarProps {
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IMenuItemFormProps {
    formTitle:string;
    setTargetList:  Dispatch<React.SetStateAction<IRecipe[]>>;
    targetList:IRecipe[];
}

export interface INoticeProps {
    title:string;
    description:string;
    stringList:string[];
}


export interface IMaterial {
    title:string
}
export interface IRecipe {
    id:string;
    title:string;
    priceCurrency:string;
    price:number;
    description:string;
    materials?:IMaterial[];
    delicious:boolean;
}


export interface IMenu {
    menuClass? : string;
    recipeList: IRecipe[];
    activeList : IRecipe[];
    toggleRecipeDelicious?:(recipe:IRecipe)=> void;
    toggleRecipe:(recipeToAdd:IRecipe) => void;
    removeRecipe: (recipeToRemove:IRecipe) => void;
}

export interface IMenuItem {
    recipe:IRecipe;
    activeList : IRecipe[];
    toggleRecipeDelicious?:(recipe:IRecipe)=>void;
    toggleRecipe: (recipeToAdd:IRecipe) => void;
    removeRecipe: (recipeToRemove:IRecipe) =>void;

}

