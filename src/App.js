import React, { useEffect, useState } from 'react';
import Counter from './components/Counter/Counter';
import Random from './components/Random/Random';
import Total from './components/Total/Total';

import './styles/app.css';
import { useStorageStateNumber } from './hooks/useStorageStateNumber';

function App() {
	const [level, setLevel] = useStorageStateNumber(1, 'level');
	const [items, setItems] = useStorageStateNumber(0, 'items');
	const [total, setTotal] = useState(Number(level) + Number(items));

	useEffect(() => {
		setTotal(level + items);
	}, [level, items]);

	const incrementLevel = () => {
		setLevel(Math.min(10, level + 1));
	};

	const decrementLevel = () => {
		setLevel(Math.max(1, level - 1));
	};

	const incrementItems = () => {
		setItems(items + 1);
	};

	const decrementItems = () => {
		setItems(items - 1);
	};

	return (
		<div className="App">
			<Random />
			<Total value={total} />
			<div className="counters">
				<Counter
					title={'Уровень'}
					value={level}
					increment={incrementLevel}
					decrement={decrementLevel}
					reset={() => setLevel(1)}
				/>
				<Counter
					title={'Шмотки'}
					value={items}
					increment={incrementItems}
					decrement={decrementItems}
					reset={() => setItems(0)}
				/>
			</div>
		</div>
	);
}

export default App;
