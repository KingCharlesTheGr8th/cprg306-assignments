'use client';
import Item from "./item";

import { useState } from "react";

//import items from "./items.json";
//items.sort((a, b) => a.name.localeCompare(b.name));

export default function ItemList({ items })
{
    const [sortBy, setSortBy] = useState("name");

    const handleSortName = (event) => {
        setSortBy("name");
        items.sort((a, b) => a.name.localeCompare(b.name));
    };
    const handleSortCategory = (event) => {
        setSortBy("category");
        items.sort((a, b) => a.category.localeCompare(b.category));
    };
    
    return (
        <div className="w-96">
        <div className="flex w-full mt-2 p-1">
        <div className={`${sortBy==='name'?'bg-indigo-200':'bg-indigo-400 hover:bg-indigo-100'} rounded px-2 text-xl border-2 border-solid border-indigo-800 hover:border-indigo-700 grow`}><button onClick={handleSortName}>Sort by name</button></div>
        <div className={`${sortBy==='category'?'bg-indigo-200':'bg-indigo-400 hover:bg-indigo-100'} rounded px-2 text-xl border-2 border-solid border-indigo-800 hover:border-indigo-700 grow`}><button onClick={handleSortCategory}>Sort by department</button></div>
        </div>

        {items.map((item) => (
        <Item name={item.name} quantity={item.quantity} category={item.category} key={item.id}/>))}
        </div>
    )
}