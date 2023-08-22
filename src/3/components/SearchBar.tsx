import { FunctionComponent } from "react";
import { SearchBarProps } from "../Interfaces";

export const SearchBar:FunctionComponent<SearchBarProps> = ({onChange}:SearchBarProps) => {
    return <input placeholder="Type search" onChange={e=> onChange(e)}/>
};