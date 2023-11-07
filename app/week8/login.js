import { useUserAuth } from "./_utils/auth_context";

export default function Login()
{
	//Sorry ran into some trouble and its late, borrowing this
	async function handleSignIn() {
		try {
		await gitHubSignIn();
		console.log("Logging in as " + user);
		} catch (error) {
		console.log(error);
		}
	}

	async function handleSignOut() {
		try {
		await firebaseSignOut();
		} catch (error) {
		console.log(error);
		}
	}
	const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
	return(
		<div>
			{user ?
			(<button onClick={handleSignOut}>Sign out</button>) :
			(<button onClick={handleSignIn}>Sign in with GitHub</button>)
			}
		</div>
	);
}