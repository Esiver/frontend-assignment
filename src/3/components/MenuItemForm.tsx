import { IRecipe, IMenuItemFormProps } from "../Interfaces";
import { Button } from "./Button";
import {  useState } from "react";

export const MenuItemForm:React.FunctionComponent<IMenuItemFormProps> = ({formTitle, targetList, setTargetList}:IMenuItemFormProps) => {
    
    const [input, setInput] = useState({
        id:"",
        title:"",
        description:"",
        price:0,
        priceCurrency:"DKK"
    });

    const clearFields = () => {
        setInput({
            id:"",
            title:"",
            description:"",
            price:0,
            priceCurrency:"DKK"
        });
    }
    const generateId = (string:string) => {
        let id = `${string}-recipe-${Date.now()}-${Math.random()}`; // lol
        console.log(id)
        return id;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {value, name} = e.target;
        setInput({...input, [name]:value})
    }
    const handleButtonClick = () => {
        submitNewRecipe();
    }

    const submitNewRecipe = () => {
        const {title, description, price, priceCurrency} = input;
    
        let newId = generateId(title);
        const recipe = {id:newId,title,description,price,priceCurrency,delicious:false};
            
        if(!title || !description || !price || !priceCurrency) return;

        setTargetList([...targetList, recipe]);

        clearFields()
    }   
        


    return(
        <div className="menu__form">

            <h2>{formTitle}</h2>

            <label htmlFor="">Title</label>
            <input type="text" name="title" id="title" value={input.title} onChange={handleChange} />

            <label htmlFor="">Description</label>
            <input type="text" name="description" id="description" value={input.description} onChange={handleChange} />

            <label htmlFor="">Price</label>
            <input type="number" name="price" id="price" value={input.price} onChange={handleChange} />


            <Button 
                onClick={handleButtonClick}
                text="Add New!"
            />
        </div>
    )
}