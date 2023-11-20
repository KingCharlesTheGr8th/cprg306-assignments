'use client';

import { useState, useEffect } from "react";
import { funnyTextMeal as FunnyTextMeal } from "../../funnytext";

async function fetchMealIdeas(ingredient) {
	try {
	const delicious = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
	const data = await delicious.json()
	return data
	}
	catch(error) {
		console.error("You're going hungry tonight, pal.");
	}
		
}

export default function MealIdeas({ingredient})
{
	const [meal, setMeal] = useState([]);

	async function getMealIdeas(ingredient) {
		const data = await fetchMealIdeas(ingredient);
		setMeal(data.meals);

	}

	useEffect(() => {
		getMealIdeas(ingredient);
	}, [ingredient]);

	/*return (
		<div>
			{meal != null && meal.length > 0? (
				<>
					<p>Ingredient: {ingredient}</p>
					<p>Meal: {meal[0].strMeal}</p>
				</>
			) : (
				<p>Loading meal ideas...</p>
			)}
		</div>
	)*/

    if (ingredient == "" || meal == null || meal.length == 0) return(
        <div className="my-3 bg-indigo-400 rounded-xl pl-2">
            Now, what could I make...
        </div>
    )
	else
	{
		return(
			<div className="my-3 bg-indigo-400 rounded-xl pl-2 h-[630px] overflow-y-auto">
				{meal.map((meal) => (
					<div className="flex justify-between items-end my-2 py-2 pr-1">
						<div>
							<p><FunnyTextMeal /></p>
							<p className="font-bold">{meal.strMeal}</p>
						</div>
						<div>
							<img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 rounded-full"/>
						</div>
					</div>
				))}
			</div>
		)
	}
}