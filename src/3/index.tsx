import * as React from "react";
import { useState } from "react";

// Style
import "./index.scss";

// Data
import { recipeData } from "./data";

//interfaces
import {  IRecipe } from "./Interfaces";

// components
import MenuList from "./components/MenuList";
import { SearchBar } from "./components/SearchBar";
import { MenuItemForm } from "./components/MenuItemForm";

// Menu App


const Task3: React.FunctionComponent = () => {


  const [searchResultList, setSearchResultList] = useState<IRecipe[]>([]);
  const [recipeList, setRecipeList] = useState<IRecipe[]>([...recipeData]);
  const [activeList, setActiveList] = useState<IRecipe[]>([])


  function updateActiveList(recipe:IRecipe){
    const recipeIndex:number = activeList.findIndex((r)=> r.id === recipe.id);
    const hasRecipe:boolean = recipeList.findIndex((r)=> r.id === recipe.id) === -1 ? false : true;

    if(recipeIndex === -1 && hasRecipe){
      setActiveList(prevList => [...prevList, recipe]);
    } else {
      
      setActiveList(prevList => prevList.filter((r)=> r.id !== recipe.id))
    }
  }

  function removeRecipe(recipe:IRecipe){
    const prevRecipeList = [...recipeList];
    const indexToRemove = prevRecipeList.indexOf(recipe);
    if (indexToRemove !== -1) {
      prevRecipeList.splice(indexToRemove,1)
      setRecipeList(prevRecipeList)
    }
    updateActiveList(recipe)
    setSearchResultList([])
  }

  
  function handleSearch(e:React.ChangeEvent<HTMLInputElement>){
    
    if(e.target.value.length > 0 && e.target.value !== "") {
      const filteredRecipeList = recipeList.filter(item => {
        return (item.title.toLowerCase().includes(e.target.value.toLowerCase()))
      });
      setSearchResultList(filteredRecipeList);

    } else {setSearchResultList([])}
  }

  return (
  <div id="task-3">
    
    <MenuItemForm
      formTitle = "Add New Recipe"
      setTargetList={setRecipeList}
      targetList={recipeList}
    />

    <h3>Filter</h3>
    <SearchBar onChange={handleSearch}/>
    <MenuList

      recipeList={searchResultList}
      activeList={activeList}
      toggleRecipe={updateActiveList}
      removeRecipe={removeRecipe}
    />
    <br/>

    <h2>Active Recipies</h2>
    <MenuList
      menuClass = "active"
      activeList={activeList}
      toggleRecipe={updateActiveList}
      recipeList={activeList}
      removeRecipe={removeRecipe}

    />

    <h2>All Recipies</h2>
    <MenuList
      menuClass = "inactive"
      activeList={activeList}
      toggleRecipe={updateActiveList}
      recipeList={recipeList}
      removeRecipe={removeRecipe}

    />

  </div>);
};

export default Task3;
