import React from 'react';
import { css } from 'emotion';

const benchImgClass = css({
	display: 'flex',
	margin: '0 auto',
})

const benchNameClass = css({
	marginTop: '0px',
	textAlign: 'center',
})

const questionMark = css({
	fontSize: '70px',
	textAlign: 'center',
})

const Bench = ({ bench }) => {
	
	return (
		<div className={css`
					    display: grid;
						grid-template-columns: repeat(6, 1fr);
						margin-bottom: 10px;

						@media (max-width: 420px) {
							grid-template-columns: repeat(3, 1fr);
							grid-template-row: 2;
						  }
				`}>
				{
					bench.map((pokemon, index) => {
						if(!pokemon) {
							return (
								<div key={index}>
									<div className={questionMark}>?</div>
									<h5
										className={benchNameClass}
									>???</h5>
								</div>
							)
						} else if (pokemon) {
							return (
								<div key={index}>
									<img 
										className={benchImgClass} 
										src={pokemon.node.url}
									/>
									<h5
										className={benchNameClass}
									>{pokemon.node.name}</h5>
								</div>
							)
						}
					})
				}
					{/* <div>
						<img 
							className={benchImgClass} 
							src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'}
						/>
						<h5
							className={benchNameClass}
						>Caterpie</h5>
					</div>
					<div>
						<img 
							className={benchImgClass}
							src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png'}
						/>
						<h5
							className={benchNameClass}
						>Caterpie</h5>
					</div>
					<div>
						<img 
							className={benchImgClass}
							src={'https://static.giantbomb.com/uploads/square_medium/9/95666/2775264-sprite_missingno.gif'}
						/>
						<div className={questionMark}>?</div>
						<h5
								className={benchNameClass}
							>???</h5>
					</div>
					<div>
						<img 
							className={benchImgClass}
							src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png'}
						/>
						<h5
								className={benchNameClass}
							>Caterpie</h5>
					</div>
					<div>
						<img 
							className={benchImgClass}
							src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png'}
						/>
						<h5
							className={benchNameClass}
							>Caterpie</h5>
					</div>
					<div>
						<img 
							className={benchImgClass}
							src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png'}
						/>
						<h5
							className={benchNameClass}
						>Caterpie</h5>
					</div> */}
				</div>
	)

}

export default Bench;