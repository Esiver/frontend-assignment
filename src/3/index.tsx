import * as React from "react";
import { useState } from "react";

// Style
import "./index.scss";

// Data
import { recipies } from "./data";

//interfaces
import {  Recipe } from "./Interfaces";

// components
import MenuList from "./components/MenuList";
import { SearchBar } from "./components/SearchBar";
import { MenuItemForm } from "./components/MenuItemForm";

// Menu Sales App 
  /* 
  * Overblik over biksen
  * - Hvad har vi af menuer?
  *   - Hvad koster den?
  *   - Hvad koster det at lave den?
  * - Hvad er der blevet solgt meget af?
  * - Hvad er der blevet solgt lidt af?
  */

const Task3: React.FunctionComponent = () => {
  const [searchResultList, setSearchResultList] = useState<Recipe[]>([]);
  const [recipeList, setRecipeList] = useState<Recipe[]>([...recipies]);
  const [activeList, setActiveList] = useState<Recipe[]>([])

  function updateActiveList(recipe:Recipe){
    const recipeIndex = activeList.findIndex((r)=> r.id === recipe.id);

    if(recipeIndex === -1){
      setActiveList(prevList => [...prevList, recipe]);
    } else {
      setActiveList(prevList => prevList.filter((r)=> r.id !== recipe.id))
    }
  }

  function removeRecipe(recipe:Recipe){
    const prevRecipeList = [...recipeList];
    const indexToRemove = prevRecipeList.indexOf(recipe);
    if (indexToRemove !== -1) {
      prevRecipeList.splice(indexToRemove,1)
      setRecipeList(prevRecipeList)
    }
    updateActiveList(recipe)
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
    <h3>Add new Recipe</h3>
    <MenuItemForm 
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
