import "./App.css";
import { auth } from "./config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";

function App() {
	const [user] = useAuthState(auth);

	return (
		<div className="App">
			<header className="App-header">
				<h1>⚛️🔥💬</h1>
				{auth.currentUser && (
					<button onClick={() => auth.signOut()}>Sign Out</button>
				)}
			</header>

			<section>{user ? <ChatRoom /> : <SignIn />}</section>
		</div>
	);
}

export default App;
