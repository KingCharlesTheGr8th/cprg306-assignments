export default function Item({name, quantity, category})
{
    return(
        <div >
            <ul class="py-3">
            <li>I could use some {name}</li>
            <li>x{quantity}</li>
            <li>from the {category} department</li>
            </ul>
        </div>
    )
}