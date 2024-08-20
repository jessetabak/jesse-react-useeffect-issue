import { useEffect, useState } from 'react';
import './App.css';

function run(func: () => void) {
	func();
	return Promise.resolve();
}

function App() {
	const [count1, setCount1] = useState(0);

	console.log('RENDER');

	useEffect(() => {
		console.log('EFFECT');
	});

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8}}>
			<div>{count1}</div>
			<button
				onClick={async () => {
					console.clear();
          await run(() => setCount1(count1));
				}}
			>
				{'NO RENDER'}
			</button>
			<button
				onClick={async () => {
					console.clear();
					await run(() => setCount1(count1 + 1));
				}}
			>
				{'RENDER -> EFFECT'}
			</button>
			<button
				onClick={async () => {
					console.clear();
					await run(() => setCount1(count1 + 1));
					await run(() => setCount1(count1 + 2));
				}}
			>
				{'RENDER -> EFFECT -> RENDER -> EFFECT'}
			</button>
			<button
				onClick={async () => {
					console.clear();
					await run(() => setCount1(count1 + 1));
					await run(() => setCount1(count1 + 1));
				}}
			>
				{'RENDER -> EFFECT -> RENDER'}
			</button>
      <button
				onClick={async () => {
					console.clear();
					await run(() => setCount1(c => c + 1));
					await run(() => setCount1(c => c));
				}}
			>
				{'RENDER -> EFFECT -> RENDER'}
			</button>
		</div>
	);
}

export default App;
