import { FunctionComponent } from "react";
import { ISearchBarProps } from "../Interfaces";

export const SearchBar:FunctionComponent<ISearchBarProps> = ({onChange}:ISearchBarProps) => {
    return <input placeholder="Type search" id="search" onChange={e=> onChange(e)}/>
};