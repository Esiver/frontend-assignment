import { FunctionComponent } from "react";

// Components
import {Item, ItemProps} from "./Item";


/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */


interface ListProps {
  itemList:any[]
};

const List: FunctionComponent<ListProps> = (props:ListProps) => {

  const listItems = props.itemList.map(item => <Item data={item} />)

  return (
    <>
    <p>{props.itemList.length} results</p>
    
    <ul>
      {listItems}
    </ul>
    </>
  );
};

export default List;
