'use client'
import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import Link from "next/link";
//import itemList from "./items.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth_context";
import { getShoppingList, addShoppingListItem } from "../_services/shopping-list-service";

export default function Main() {
	//const [items, setItems] = useState(itemList.sort((a, b) => a.name.localeCompare(b.name)));
	const [items, setItems] = useState([]);
	const [meal, setMeal] = useState("");
	const { user } = useUserAuth();
	//useEffect loads the shopping list from the database
	useEffect(() => {
		if (user) loadItems(user.uid);
	}, [user]);

	const handleAddItem = (newItem) => {
		setItems([...items, newItem]);
		addShoppingListItem(user.uid, newItem);
	}

	const handleItemSelect = (name) => {
		//Split to remove commas
		var temp = name.split(",")[0];
		//Remove emojis
		temp = temp.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
		setMeal(temp);
		//alert("Thinkin about " + name);
	}

	async function loadItems(userID) {
		const shoppingList = await getShoppingList(userID);
		setItems(shoppingList);
	}

    if (user) return (
    <main className="flex flex-col items-center justify-between py-10">
		<div>
		<div className="flex flex-row justify-between w-full">
			{/*Main container*/}
			<div className=" bg-indigo-600 rounded-lg p-6 mr-4">
				<div className="items-center justify-between flex-col font-mono text-sm lg:flex bg-indigo-400">
					<h1>My Shopping List!</h1>
				</div>
				<NewItem onAddItem={handleAddItem}/>
				<ItemList items={items} onItemSelect={handleItemSelect}/>
			</div>
			{/*Meal ideas container*/}
			<div className="bg-indigo-600 rounded-lg p-6 w-96">
				<div className="items-center justify-between flex-col font-mono text-sm lg:flex bg-indigo-400">
					<h1>Meal Ideas!</h1>
				</div>
				<MealIdeas ingredient={meal}/>
			</div>
		</div>
        <div>
            <Link href="./">Back</Link>
		</div>
          </div>
      </main>
    )
	else return (
		<main className="flex flex-col items-center justify-between py-10 h-screen">
			<div>
			Who the hell are you?
			</div>
			<div>
            <Link href="./">Back</Link>
			</div>
		</main>
	);
  }
  