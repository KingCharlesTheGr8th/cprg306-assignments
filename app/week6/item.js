'use client';
import FunnyText from "../funnytext";

export default function Item({name, quantity, category})
{
    
    return(
        <div className="my-3 bg-indigo-400 rounded-xl pl-2">
            <p>{FunnyText()}</p>
			<p className="font-bold">{name}</p>
            <div className="bg-indigo-900 rounded-full w-7 h-7 text-white flex justify-center"><p>x{quantity}</p></div>
            <p>from the {category} department</p>
        </div>
    )
}