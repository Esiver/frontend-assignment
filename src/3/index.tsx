import * as React from "react";
import { useState } from "react";

// Style
import "./index.scss";

// Data
import { recipeData } from "./data";

//interfaces
import { IRecipe } from "./Interfaces";

// components
import MenuList from "./components/MenuList";
import { SearchBar } from "./components/SearchBar";
import { MenuItemForm } from "./components/MenuItemForm";
import { Notice } from "./components/Notice";
import { Button } from "./components/Button";

// Menu App

const Task3: React.FunctionComponent = () => {
  const [searchResultList, setSearchResultList] = useState<IRecipe[]>([]);
  const [recipeList, setRecipeList] = useState<IRecipe[]>([...recipeData]);
  const [activeList, setActiveList] = useState<IRecipe[]>([]);

  const [showFilter, setShowFilter] = useState(true);

  function updateActiveList(recipe: IRecipe) {
    const recipeIndex: number = activeList.findIndex((r) => r.id === recipe.id);
    const hasRecipe: boolean =
      recipeList.findIndex((r) => r.id === recipe.id) === -1 ? false : true;

    if (recipeIndex === -1 && hasRecipe) {
      setActiveList((prevList) => [...prevList, recipe]);
    } else {
      setActiveList((prevList) => prevList.filter((r) => r.id !== recipe.id));
    }
  }

  function removeRecipe(recipe: IRecipe) {
    const prevRecipeList = [...recipeList];
    const indexToRemove = prevRecipeList.indexOf(recipe);
    if (indexToRemove !== -1) {
      prevRecipeList.splice(indexToRemove, 1);
      setRecipeList(prevRecipeList);
    }
    updateActiveList(recipe);
    setSearchResultList([]);
  }

  function toggleShowFilter() {
    setShowFilter((prevVisibility) => !prevVisibility);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 0 && e.target.value !== "") {
      const filteredRecipeList = recipeList.filter((item) => {
        return item.title.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setSearchResultList(filteredRecipeList);
    } else {
      setSearchResultList([]);
    }
  }

  return (
    <div id="task-3">
      <section className=" section section__options">
      <Notice
          title="Welcome"
          description="This is the restaurant app! Here you can get an overview on what we will serve tonigth"
          stringList={[
            `Total Recipes: ${recipeList.length}`, 
            `Active Recipes: ${activeList.length}`
            
          ]}
          

        />
        <MenuItemForm
          formTitle="Add New Recipe"
          setTargetList={setRecipeList}
          targetList={recipeList}
        />


      </section>

      {/* <h3>Filter & Search</h3> */}
      <Button text="Toggle Filter" onClick={() => toggleShowFilter()} />
      {showFilter ? (
        <section className="section section__filter">
          <SearchBar onChange={handleSearch} />

          <MenuList
            menuClass="mini horizontal search-list"
            recipeList={searchResultList}
            activeList={activeList}
            toggleRecipe={updateActiveList}
            removeRecipe={removeRecipe}
          />
        </section>
      ) : (
        ""
      )}

      <section className="section section__menu-list">
        <h2>Active Recipies</h2>

        {activeList.length > 0 ? (
          <MenuList
            menuClass="active"
            activeList={activeList}
            toggleRecipe={updateActiveList}
            recipeList={activeList}
            removeRecipe={removeRecipe}
          />
        ) : (
          "no active recipes."
        )}
      </section>
      <section className="section section__menu-list">
        <h2>All Recipies</h2>

        <MenuList
          menuClass="inactive"
          activeList={activeList}
          toggleRecipe={updateActiveList}
          recipeList={recipeList}
          removeRecipe={removeRecipe}
        />
      </section>
    </div>
  );
};

export default Task3;
