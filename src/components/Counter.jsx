// import Button from "./Button.jsx";
import { useState } from "react";

function Button({ name, onClick }) {
	return <button onClick={onClick}>{name}</button>;
}

export default function Counter({ value }) {
	const [contador, setContador] = useState(value);
	let p = document.querySelector("p");

	contador > 0 ? (p.style.color = "green") : (p.style.color = "red");

	function increment() {
		setContador(contador + 1);
		console.log(contador + 1);
	}

	function decrement() {
		setContador(contador - 1);
	}

	return (
		<div>
			<p>{contador}</p>
			<Button name='Increment' onClick={increment} />
			<Button name='Decrement' onClick={decrement} />
		</div>
	);
}
