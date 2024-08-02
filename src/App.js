import { Button } from './components/button.js';
import { Header } from './components/header.js';

function Text() {
	return (
		<div className='text-center text-3xl my-2'>
			<h1>Tailwind CSS with React</h1>
		</div>
	);
}

export default function App() {
	return (
		<>
			<Header />
		</>

	);
}
