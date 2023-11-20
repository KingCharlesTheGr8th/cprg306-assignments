import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/*Add the getShoppingList function

This async function retrieves all items for a specific user from Firestore. It takes a userId as a parameter, and uses it to query a subcollection named items under a document in the users collection with the same userId. It fetches the documents in the items subcollection, and for each document, it adds an object to the items array containing the document ID and data. It then returns this items array.*/
export async function getShoppingList(userID) {
	const shoppingListRef = collection(db, "users", userID, "items");
	const q = query(shoppingListRef);
	const shoppingListSnapshot = await getDocs(q);
	const shoppingList = [];
	shoppingListSnapshot.forEach((doc) => {
		//shoppingList.push(doc.data());
		console.log("doc:");
		console.log(doc.data());
		const item = doc.data();
		const newItem = {
			name: item.ingredient.name,
			quantity: item.ingredient.quantity,
			category: item.ingredient.category,
			id: item.ingredient.id
		};
		shoppingList.push(newItem);
	});
	//console.log(shoppingList);
	return shoppingList;
}

/*Add the addItem function

This function adds a new item to a specific user's list of items in Firestore. It takes a userId and an item as parameters. It uses the userId to reference the items subcollection of a document in the users collection, and then adds the item to this subcollection. It returns the id of the newly created document.*/

export async function addShoppingListItem(userID, item) {
	const shoppingListRef = collection(db, "users", userID, "items");
	const docRef = await addDoc(shoppingListRef, {
		userID: userID,
		ingredient: item,
	});
}


/*export async function getShoppingList(userID) {
	const shoppingListRef = collection(db, "shopping-list");
	const q = query(shoppingListRef);
	const shoppingListSnapshot = await getDocs(q);
	const shoppingList = [];
	shoppingListSnapshot.forEach((doc) => {
		shoppingList.push(doc.data());
	});
	return shoppingList;
}

export async function addShoppingListItem(userID, item) {
	const shoppingListRef = collection(db, "shopping-list");
	const docRef = await addDoc(shoppingListRef, {
		userID: userID,
		ingredient: item,
	});
}*/