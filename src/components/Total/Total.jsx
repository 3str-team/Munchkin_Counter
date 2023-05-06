import React from 'react';
import { useState } from 'react';
import { useStorageState } from '../../hooks/useStorageState';

const Total = ({ value }) => {
	const [isMale, setIsMale] = useStorageState(false, 'isMale');
	const [iconPack, setIconPack] = useState({
		type: 1,
		icons: [
			<i className="bx bx-male-sign"></i>,
			<i className="bx bx-female-sign"></i>,
		],
	});

	const changeGender = () => {
		console.log(typeof isMale, !isMale);
		setIsMale(!isMale);
	};

	const toggleIconPack = () => {
		if (iconPack.type === 1) {
			setIconPack({
				type: 2,
				icons: [
					<i className="bx bx-male"></i>,
					<i className="bx bx-female"></i>,
				],
			});
		} else {
			setIconPack({
				type: 1,
				icons: [
					<i className="bx bx-male-sign"></i>,
					<i className="bx bx-female-sign"></i>,
				],
			});
		}
	};

	return (
		<div className="total">
			<div className="result">{value}</div>
			<ul className="options">
				<li>
					{isMale ? (
						<button
							className={'male btn'}
							onClick={changeGender}
						>
							{iconPack.icons[0]}
						</button>
					) : (
						<button
							className={'female btn'}
							onClick={changeGender}
						>
							{iconPack.icons[1]}
						</button>
					)}
				</li>
				<li>
					<input
						type="checkbox"
						id="switchIcons"
						hidden
					/>
					<label
						className="iconsToggle"
						htmlFor="switchIcons"
						onClick={toggleIconPack}
					></label>
				</li>
			</ul>
		</div>
	);
};

export default Total;
