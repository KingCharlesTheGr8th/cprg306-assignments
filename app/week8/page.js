'use client'

import { useUserAuth } from "./_utils/auth_context";
import Link from "next/link";
import Login from "./login";

export default function Main() {
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	return (
		<main className="flex flex-col items-center justify-between py-10">
		<div>
		<div className="flex flex-row justify-between w-full">
			{/*Main container*/}
			<div className=" bg-indigo-600 rounded-lg p-6 mr-4">
				<div className="items-center justify-between flex-col font-mono text-sm lg:flex bg-indigo-400">
					<h1>My Shopping List!</h1>
				</div>
				<Login />
				{user ? (<div><p className="text-white">Welcome, {user.displayName}!</p><p><Link href="week8/shopping-list">Your shopping list</Link></p></div>) : (<p className="text-white">Please sign in.</p>)}
			</div>
		</div>
        <div>
            <Link href="./">Back</Link>
		</div>
          </div>
      </main>
	);
}