import { useState } from "react";

const fruits = ["Apple", "Banana", "Mango", "Avocado", "Orange"];

function FruitApp() {
	const [onlyA, setOnlyA] = useState(false);

	const displayed = onlyA
		? fruits.filter((f) => f.toUpperCase().startsWith("A"))
		: fruits;

	return (
		<div className="fruit-app">
			<h2>My Favorite Fruits</h2>

			<button onClick={() => setOnlyA((s) => !s)}>
				{onlyA ? "Show All Fruits" : "Show Only 'A' Fruits"}
			</button>

			<ul>
				{displayed.length > 0 ? (
					displayed.map((fruit) => (
						<li key={fruit}>{fruit}</li>
					))
				) : (
					<li className="empty">No fruits found</li>
				)}
			</ul>
		</div>
	);
}

export default FruitApp;