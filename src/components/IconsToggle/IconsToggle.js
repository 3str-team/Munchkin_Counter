import React from 'react';
import { useIconsStore } from '../../store/iconsStore';

const IconsToggle = () => {
	const { icons, switchIcons } = useIconsStore(store => store);

	return (
		<>
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
		</>
	);
};

export default IconsToggle;
