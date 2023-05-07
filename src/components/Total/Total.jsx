import React from 'react';
import Gender from '../Gender/Gender';
import { useLevelStore } from '../../store/levelStore';
import { useItemsStore } from '../../store/itemsStore';

const Total = () => {
	const level = useLevelStore(store => store.level);
	const items = useItemsStore(store => store.items);

	return (
		<div className="total">
			<div className="result">{level + items}</div>
			<Gender />
		</div>
	);
};

export default Total;
