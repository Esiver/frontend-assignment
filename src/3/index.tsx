import * as React from "react";
import { useState } from "react";

// Style
import "./index.scss";

// Data
import { recipeData } from "./data";

//interfaces
import { IRecipe, ISearchQuery } from "./Interfaces";

// components
import MenuList from "./components/MenuList";
import { SearchBar } from "./components/SearchBar";
import { MenuItemForm } from "./components/MenuItemForm";
import { Notice } from "./components/Notice";
import { Button } from "./components/Button";
import { Recipe } from "./components/Recipe";

// Menu App

const Task3: React.FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState<ISearchQuery>({ query: "" });
  const [searchResultList, setSearchResultList] = useState<IRecipe[]>([]);

  const [recipeList, setRecipeList] = useState<IRecipe[]>([...recipeData]);
  const [activeList, setActiveList] = useState<IRecipe[]>([]);

  const [showFilter, setShowFilter] = useState(true);

  // getRecipeObjects(recipeData)

  // function getRecipeObjects (recipeData:any[]) {
  //   let recipeArr:IRecipe[];
  //   recipeData.forEach(element => {
  //     let rID = element.id;
  //     let rTitle = element.title;
  //     let rPrice = element.price;
  //     let rCurrency = element.priceCurrency
  //     let rDescription = element.description
      
  //     let recipe:IRecipe = {
  //       id : rID,
  //       title:rTitle,
  //       price:rPrice,
  //       priceCurrency:rCurrency,
  //       description:rDescription,
  //       delicious:false
  //     };

  //     // const recipeObj = new Recipe(recipe);

  //     recipeArr.push(recipe);
  //   });

  // }

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
    handleSearch(searchQuery);
  }

  function toggleShowFilter() {
    setShowFilter((prevVisibility) => !prevVisibility);
  }

  function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery({ query: e.target.value });
    handleSearch({ query: e.target.value });
  }
  function handleSearch(sq: ISearchQuery) {
    if (sq.query.length > 0 && sq.query !== "") {
      const filteredRecipeList = recipeList.filter((item) => {
        return item.title.toLowerCase().includes(sq.query.toLowerCase());
      });
      setSearchResultList(filteredRecipeList);
    } else {
      setSearchResultList([]);
    }
  }
  function toggleRecipeDelicious(recipe:IRecipe){
    recipe.delicious = !recipe.delicious;

    setActiveList([...activeList]);
    setRecipeList([...recipeList]);
  }

  return (
    <div id="task-3">
      <section className=" section section__options">
        <Notice
          title="Welcome"
          description="This is the restaurant app! Here you can get an overview on what we will serve tonigth"
          stringList={[
            `Total Recipes: ${recipeList.length}`,
            `Active Recipes: ${activeList.length}`,
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
          <SearchBar onChange={handleSearchInputChange} />

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
            recipeList={activeList}
            toggleRecipeDelicious={toggleRecipeDelicious}
            removeRecipe={removeRecipe}
            toggleRecipe={updateActiveList}            
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
