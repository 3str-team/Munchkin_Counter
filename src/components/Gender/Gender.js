import React from 'react';
import { useGenderStore } from '../../store/genderStore';
import { useIconsStore } from '../../store/iconsStore';

const Gender = () => {
	const { isMale, changeGender } = useGenderStore(store => store);
	const { icons, switchIcons } = useIconsStore(store => store);

	return (
		<ul className="options">
			<li>
				{isMale ? (
					<button
						className={'male btn'}
						onClick={changeGender}
					>
						<i className={icons.male}></i>
					</button>
				) : (
					<button
						className={'female btn'}
						onClick={changeGender}
					>
						<i className={icons.female}></i>
					</button>
				)}
			</li>
			<li>
				<input
					type="checkbox"
					id="switchIcons"
					defaultChecked={icons.type === 1}
					hidden
				/>
				<label
					className="iconsToggle"
					htmlFor="switchIcons"
					onClick={switchIcons}
				></label>
			</li>
		</ul>
	);
};

export default Gender;
