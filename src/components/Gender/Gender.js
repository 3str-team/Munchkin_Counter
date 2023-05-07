import React from 'react';
import GenderButton from '../GenderButton/GenderButton';
import IconsToggle from '../IconsToggle/IconsToggle';

const Gender = () => {

	return (
		<ul className="options">
			<li>
				<GenderButton />
			</li>
			<li>
				<IconsToggle />
			</li>
		</ul>
	);
};

export default Gender;
