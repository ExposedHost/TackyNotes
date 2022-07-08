import React from 'react';
import {WiMoonAltThirdQuarter} from 'react-icons/wi'

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Tacky Notes</h1> 
			<h5>An easy way to store your memos</h5>
			<WiMoonAltThirdQuarter
					onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
					className='toggle'
					size='2em'
				/>
			
		</div>
	);
};

export default Header;
