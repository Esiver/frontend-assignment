import { FunctionComponent } from "react";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

export interface ItemProps {
  data: {name:string, language:string, id:string, bio:string, version:number}
}

export const Item: FunctionComponent<ItemProps> = (props) => {
  return (
    <li key={1}>
      
      <h2>{props.data.name}</h2>
      <h3>{props.data.language}</h3>
      <p>{props.data.bio}</p>
    </li>
  )
};

// export default Item;
