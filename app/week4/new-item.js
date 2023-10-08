'use client';

import { useCallback, useState } from "react";
import Select from "react-select";

export default function NewItem()
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    const handleNameChange = (event) => {setName(event.target.value);};
    const handleQuantityChange = (event) => {setQuantity(Math.max(1, Math.min(event.target.value, 99)));};
    const handleCategoryChange = (event) => {setCategory(event.target.value);};

    const pluralName = (itemname, count) => {return count == 1 ? itemname  : itemname + "s";}

    /*const departments = [
        {value: "Produce", label: "Produce"},
        {value: "Dairy", label: "Dairy"},
        {value: "Meat", label: "Meat"},
        {value: "Bakery", label: "Bakery"},
        {value: "Frozen", label: "Frozen"},
        {value: "Canned", label: "Canned"},
        {value: "Beverages", label: "Beverages"},
        {value: "Snacks", label: "Snacks"},
        {value: "Other", label: "Other"}
    ]*/

    //Make submit button submit to my own demands
    const handleSubmit = (event) => {
        event.preventDefault();

        //Create & log new item
        const newItem = {
            name: name,
            quantity: quantity,
            category: category
        };
        console.log(newItem);

        //A nice message for people too stupid to use the console
        alert("Now you gotta buy " + quantity + " " + pluralName(name, quantity) + " from all the way over in the " + category + " department!");

        setName("");
        setQuantity(1);
        setCategory("");
    }

    //Pretty divs for form segments
    /*function FormSegment({label, onchange, value, type, placeholder})
    {
        if (label == "Submit")    //Submit button is a special boy
        {
            return(
                    <button type="submit" className="bg-slate-100 px-3 py-1 rounded">{label}</button>
            )
        }
        else    //All other inputs use this nice background
            return(
                <div className="bg-indigo-400 rounded py-2 px-1">
                    <label>{label}: </label>
                    <FormSegmentInput label={label} onchange={onchange} value={value} type={type} placeholder={placeholder} />
                </div>
            )
    }*/

    //Input fields for form segments, because I can't figure out how to make a select input work in React <-- Copilot wrote that, dudes a punk
    /*function FormSegmentInput({label, onchange, value, type, placeholder})
    {
        const memoizedOnChange = useCallback(onchange, []);
        switch(type) {
            case "text": return <input required onChange={memoizedOnChange} value={value} type={type} placeholder={placeholder} />
            case "number": return <input required onChange={memoizedOnChange} value={value} type={type} placeholder={placeholder} />
            case "select": return(
            <select onChange={memoizedOnChange}>
                <option value="dairy" selected>Dairy</option>
                <option value="produce">Produce</option>
                <option value="bakery">Bakery</option>
            </select>
            )
        }
    }*/
    //Nevermind this is causing me too many problems

    /*return(
        <div class="my-6 bg-indigo-600 rounded-lg p-6">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-items-center flex-col space-y-4">
                    {[
                        ["Item", handleNameChange, name, "text", "Item Name"],
                        ["Quantity", handleQuantityChange, quantity, "number", "1"],
                        ["Category", handleCategoryChange, category, "select"],
                        ["Submit", null, null, null, null]
                    ].map(([label, onchange, value, type, placeholder]) => (
                        FormSegment({label, onchange, value, type, placeholder})
                    ))}
                </div>
            </form>
                
        </div>
    )*/
    //Forget it, I'm gonna hardcode it
    return(
        <div class="my-6 bg-indigo-600 rounded-lg p-6">
            <form onSubmit={handleSubmit}>
                <div className="flex justify-items-center flex-col space-y-4">
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