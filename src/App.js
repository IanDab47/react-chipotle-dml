// React
import { useState } from "react";

// Pages
import Hot from "./Screens/Hot";
import Cold from "./Screens/Cold";
import Bag from "./Screens/Bag";

// Components
import Navbar from "./Components/nav/Navbar";

// Styles
import "./App.css";

export default function App() {
	// State
	const [screen, setScreen] = useState('hot')

	return (
		<div>
			{screen === 'hot' ?
				<Hot /> 
				:
				screen === 'cold' ?
				<Cold />
				:
				<Bag />
			}
			<Navbar setScreen={setScreen}/>
		</div>
	);
}
