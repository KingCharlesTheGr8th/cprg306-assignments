export default function Item({name, quantity, category})
{
    return(
        <div class="my-3 bg-red-300 rounded">
            <ul>
            <li>I could use some <div class="font-bold">{name}</div></li>
            <div class="bg-red-500 rounded-xl w-6"><li>x{quantity}</li></div>
            <li>from the {category} department</li>
            </ul>
        </div>
    )
}