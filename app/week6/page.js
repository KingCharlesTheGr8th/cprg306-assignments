'use client'
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import Link from "next/link";
import itemList from "./items.json";

export default function Main() {
	const [items, setItems] = useState(itemList.sort((a, b) => a.name.localeCompare(b.name)));

	const handleAddItem = (newItem) => {
		setItems([...items, newItem]);
	}

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className=" bg-indigo-600 rounded-lg p-6">
        <div className="z-10 items-center justify-between flex-col font-mono text-sm lg:flex bg-indigo-400">
          <h1>My Shopping List!</h1>
          </div>
		  <NewItem onAddItem={handleAddItem}/>
          <ItemList items={items}/>

            <div>
            <Link href="./">Back</Link>
          </div>
          </div>
      </main>
    )
  }
  