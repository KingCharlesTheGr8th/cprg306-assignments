'use client';

import { useCallback, useState } from "react";
import Select from "react-select";

export default function NewItem({ onAddItem})
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    const handleNameChange = (event) => {setName(event.target.value);};
    const handleQuantityChange = (event) => {setQuantity(Math.max(1, Math.min(event.target.value, 99)));};
    const handleCategoryChange = (event) => {setCategory(event.target.value);};

    const pluralName = (itemname, count) => {return count == 1 ? itemname  : itemname + "s";}

    //Make submit button submit to my own demands
    const handleSubmit = (event) => {
        event.preventDefault();

        //Create & log new item
        const newItem = {
            name: name,
            quantity: quantity,
            category: category,
			id: Math.floor(Math.random()*69) + name
        };
        //console.log(newItem);

		//Add new item to list
		onAddItem(newItem);

        //A nice message for people too stupid to use the console
        alert("Now you gotta buy " + quantity + " " + pluralName(name, quantity) + " from all the way over in the " + category + " department!");

        setName("");
        setQuantity(1);
        setCategory("");
    }
	
    return(
        <div className="my-3 bg-indigo-600 rounded-lg p-2">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-items-center flex-col space-y-2">
                <div className="bg-indigo-400 rounded py-2 px-1">
                    <label>Item: </label>
                    <input required onChange={handleNameChange} value={name} type={"text"} placeholder={"Item Name"} />
                </div>
                <div className="bg-indigo-400 rounded py-2 px-1">
                    <label>Quantity: </label>
                    <input required onChange={handleQuantityChange} value={quantity} type={"number"} placeholder={"1"} />
                </div>
                <div className="bg-indigo-400 rounded py-2 px-1">
                    <label>Department: </label>
                    <select required onChange={handleCategoryChange} placeholder="Department" className="p-2">
                        <option value="dairy">Dairy</option>
                        <option value="produce">Produce</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen</option>
                        <option value="canned">Canned</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="bg-slate-100 px-3 py-1 rounded">Submit</button>
                </div>
            </form>
                
        </div>
    )
}