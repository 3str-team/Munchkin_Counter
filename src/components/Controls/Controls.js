import React from 'react';
import Counter from '../Counter/Counter';
import { useLevelStore } from '../../store/levelStore';
import { useItemsStore } from '../../store/itemsStore';

const Controls = () => {
	const { level, incrementLevel, decrementLevel, resetLevel } = useLevelStore(
		store => store
	);

	const { items, incrementItems, decrementItems, resetItems } = useItemsStore(
		store => store
	);

	return (
		<div className="counters">
			<Counter
				title={'Уровень'}
				value={level}
				increment={incrementLevel}
				decrement={decrementLevel}
				reset={resetLevel}
			/>
			<Counter
				title={'Шмотки'}
				value={items}
				increment={incrementItems}
				decrement={decrementItems}
				reset={resetItems}
			/>
		</div>
	);
};

export default Controls;
