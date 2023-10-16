'use client';

export default function Item({name, quantity, category})
{
    const funnyText = [
        "I could use some",
        "Don't forget the",
        "Man, I want some",
        "I'm craving some",
        "Oh, and some",
        "Consider some",
        "If you're smart, you'll get some",
        "It would be wise to get some",
        "Sexy people buy",
        "Almost forgot, we need some",
        "I'm in the mood for some",
        "Today's daily quest: get some",
        "I bet you could find some",
        "I'm thinking some",
        "You know what would be good? Some",
        "Knock knock. Who's there? It's",
        "Thinkin' about them",
        "You WILL get some",
        "Watch out for the",
        "Don't not get some",
        "You know what's good? Some",
        "There should be some",
        "Always remember to get some",
        "I dare you to get some",
        "I double-dog dare you to get some",
        "I triple-dog dare you to get some",
        "I quadruple-dog dare you to get some",
        "Copilot says we need some",
        "It'd be funny if you got some",
        "Yeah can I get uuuuuuh",
        "I feel compelled to get",
        "I'm feeling lucky. Gimme some",
        "Pro tip: get some",
        "To defeat the Dark Lord, you must get some",
        "Don't ask why, but I need some",
        "Once upon a time, there was some",
        "Running out of ideas, just get some",
        "Here's a funny way of saying get some",
        "Good luck comes to those who get some",
        "Bad luck comes to those who don't get some",
        "The world will end if you don't get some",
        "It'd be real cool if you got some"
    ]
    return(
        <div className="my-3 bg-indigo-400 rounded-xl pl-2">
            <ul>
            <li>{funnyText[Math.floor(Math.random()*funnyText.length)]} <div class="font-bold">{name}</div></li>
            <div className="bg-indigo-900 rounded-full w-7 h-7 text-white flex justify-center"><li>x{quantity}</li></div>
            <li>from the {category} department</li>
            </ul>
        </div>
    )
}