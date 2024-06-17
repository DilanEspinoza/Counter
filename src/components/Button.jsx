// let conter = 0;
// function increment() {}

export default function Button({ name, event }) {
	return <button onClick={event}>{name}</button>;
}
