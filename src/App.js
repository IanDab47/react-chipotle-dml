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

const currTime = new Date()

const order = 
	{ 
		name: 'Ian Dabinett',
		type: 'Burrito',
		items: ['White Rice', 'Pinto Beans', 'Chicken', 'Steak', 'Mild Tomato', 'Sour Cream', 'Medium Green', 'Cheese'],
		purch_at: currTime.getTime(),
		expected_pickup: null,
	}

export default function App() {
	// State
	const [screen, setScreen] = useState('hot')

	return (
		<div>
			{screen === 'hot' ?
				<Hot order={order} /> 
				:
				screen === 'cold' ?
				<Cold order={order} />
				:
				<Bag />
			}
			<Navbar setScreen={setScreen}/>
		</div>
	);
}
