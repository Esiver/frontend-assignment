import { FunctionComponent, useState } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  onChange: (inputValue:string)=> void;
}

const Input: FunctionComponent<InputProps> = ({onChange}) => {
  return (
    <fieldset>
      <label htmlFor="query-input">Search</label>
      <input 
        id="query-input"
        onChange={e=> onChange(e.target.value)} 
      />
    </fieldset>
  );
};

export default Input;
