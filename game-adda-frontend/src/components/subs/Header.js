import React, { useState } from 'react';
import axios from 'axios';

const Header = ({ bal }) => {
	const [balance, setBalance] = useState(bal);

	const handleAdd = async () => {
		const newBal = await axios.post(
			`http://localhost:5020/add?num1=${balance}&num2=50`
		);
		setBalance(newBal.data);
	};

	const handleSub = async () => {
		const newBal = await axios.post(
			`http://localhost:5020/sub?num1=${balance}&num2=70`
		);
		setBalance(newBal.data);
	};

	return (
		<div id='recharge'>
			<h1>Available Balance: ₹{balance}</h1>
			<div>
				<button className='add' onClick={handleAdd}>
					Recharge
				</button>
				&nbsp;
				<button className='sub' onClick={handleSub}>
					Withdraw
				</button>
			</div>
		</div>
	);
};

export default Header;
