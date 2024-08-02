import { Button } from './components/button.js';

function Text() {
	return (
		<div className='text-center text-3xl my-2'>
			<h1>Tailwind CSS with React</h1>
		</div>
	);
}

export default function App() {
	return (
		<section>
			<div className='container flex gap-4'>
				<Button text="search properties" />
				<Button variant="secondary" text="hello world" />
			</div>
		</section>
	);
}
