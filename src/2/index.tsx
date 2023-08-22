import { FunctionComponent, useState } from "react";
import "./index.scss";
import { peopleData } from "./data";
// Components
import Input from "./components/Input";
import List from "./components/List";
import { Item, ItemProps } from "./components/Item";



const Task2: FunctionComponent = () => {
  const [data, setData] = useState(peopleData)
  const [results, setResults] = useState(data)
  
  const handleChange = (inputValue:string) =>{
    if(inputValue.length > 0 && inputValue != "" && inputValue != null) {
      
      const filteredData = data.filter(item => {
        return (
          item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          item.language.toLowerCase().includes(inputValue.toLowerCase())
          )
      });

      setResults(filteredData)

    } else {
      setResults(data)      
    }
  }


  return (
    <div id="task-2">
      <Input onChange={handleChange} />
      <br />
      <List itemList={results}/>
    </div>
  );
};

export default Task2;
