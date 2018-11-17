import React from 'react'
import { css } from 'emotion';

const pokeballFrame = css({
	cursor: 'pointer',
	border: 'solid grey 1px',
	margin: '1px',
})

const Pokeballs = ({ handlePokeballClick }) => {
	const pokeballArray = [];

	for (let i = 0; i < 151; i++) {
		pokeballArray.push(
			<div key={i} className={pokeballFrame} onClick={handlePokeballClick}>
				<img alt={'pokeball'} src="http://pm1.narvii.com/6508/dbd421799e1fc9118c02766e5c13836c87db6070_00.jpg" />
			</div>
		);
	}

	return pokeballArray;
}

export default Pokeballs;