import React from 'react';
import Rodal from 'rodal';
import { css } from 'emotion'
import Pokeballs from '../components/pokeballs';
import Bench from '../components/Bench';

import 'rodal/lib/rodal.css';

const gridParent = css({
	display: 'grid',
	'grid-template-columns': 'repeat(auto-fill, minmax(65px, 1fr))'
});

const textCenter = css({
	textAlign: 'center'
})

const pokemonImg = css({
	width: '125px'
})

export default class PokemonPage extends React.Component {
	constructor(props) {
		super();
		this.state = {
			pokemonNodes: props.data.allPokemonJson.edges,
			showPokemonModal: false,
			showIntro: false,
			showSocialShare: false,
			selectedPokemonName: "",
			selectedPokemonUrl: "",
			currentStep: 0,
			stepArray: ['', 'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'],
			benchArray: [false, false, false, false, false, false]
		}
	}

	componentDidMount = () => {
		this.setState({
			showIntro: true,
		})
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (this.state.benchArray[5]) {
			const twitterTag = document.createElement('script')

			twitterTag.async = true
			twitterTag.src = 'https://platform.twitter.com/widgets.js'
			twitterTag.charset = 'utf-8'

			document.getElementsByTagName('body')[0].appendChild(twitterTag);
		}
	}

	selectRandomPokemon = () => {
		const randomNum = Math.floor(Math.random() * (this.state.pokemonNodes.length - 0 + 1)) + 0;
		return this.state.pokemonNodes.splice(randomNum, 1)[0];
	}

	handlePokeballClick = () => {
		const pokemonNode = this.selectRandomPokemon();
		const stateBenchArray = this.state.benchArray;
		
		stateBenchArray.splice(this.state.currentStep, 1, pokemonNode)

		this.setState({
			selectedPokemonName: pokemonNode.node.name,
			selectedPokemonUrl: pokemonNode.node.url,
			benchArray: stateBenchArray,
			currentStep: this.state.currentStep + 1,
			showPokemonModal: true,
		});
	}

	handleIntroClose = () => {
		this.setState({
			showIntro: false,
		})
	}

	closePokemonModal = () => {
		if(this.state.currentStep > 5) {
			this.setState({
				showSocialShare: true,
			})
		}
		this.setState({
			showPokemonModal: false,
		})
	}

	render = () => {
		let stringOfPokemon;
		
		if(this.state.benchArray[5]) {
			stringOfPokemon = this.state.benchArray.map(pokemon => pokemon.node.name).join(', ');
		}

		return (
			<div
				style={{
					margin: '0 auto',
					maxWidth: 960,
				}}
			>
				<Rodal 
					visible={this.state.showIntro} 
					onClose={this.handleIntroClose}
					closeOnEsc={true}
					customStyles={{
						maxWidth: '400px',
						width: 'auto',
						maxHeight: '500px',
						height: 'auto',
						overflow: 'scroll'
					}}
				>
					<h2
						className={textCenter}
					>
						Welcome Pokemon Trainer
					</h2>
					<p>
						Do you want to be the very best?
					</p>
					<p>
						The Indigo League believes that only the best Pokemon trainer can turn any Pokemon into a champion, regardless of type or inherent ability.
					</p>
					<p>
						With this irrefutable truth in mind, the Indigo League is excited to announce the introduction of a new tournament mode, Wild Bench.
					</p>
					<p>
						In the new Wild Bench tournament mode, you will be presented with 151 pokeballs, each containing 1 of the original 151 Pokemon.
						You will randomly select 6 Pokemon from the pokeballs, which will make up your bench to train and battle with.
					</p>
					<p>
						Teach them to understand the power that's inside, and remember that 
						to train them is your cause.
					</p>
				</Rodal>
				<Rodal
					visible={this.state.showPokemonModal} 
					onClose={this.closePokemonModal}
					closeOnEsc={true}
					duration={500}
					customStyles={{
						maxWidth: '400px',
						width: 'auto',
						height: 'auto',
  						bottom: 'auto',
  						top: '30%'
					}}
				>
                    <div className={textCenter}>
						<h1>{`Your ${this.state.stepArray[this.state.currentStep]} Pokemon Is`}</h1>
						<h1>{this.state.selectedPokemonName}</h1>
						<img 
							alt="your pokemon"
							src={this.state.selectedPokemonUrl} 
							className={pokemonImg}
						/>
					</div>
                </Rodal>
				<Rodal 
					visible={this.state.showSocialShare} 
					onClose={this.handleIntroClose}
					closeOnEsc={false}
					closeMaskOnClick={false}
					showCloseButton={false}
				>
					<h2 className={textCenter} >Your New Bench Is</h2>
					<p>{stringOfPokemon}</p>
					<h2 className={textCenter} >Share Your Bench</h2>

					<div className={textCenter} >
						{this.state.benchArray[5] &&
							<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text={`My new Pokemon bench: ${stringOfPokemon}`} data-size="large" data-show-count="false">Tweet</a>
						}
					</div>
				</Rodal>
				<h1
					className={css`
						text-align: center;
					`}
				>Pick Your Pokemon</h1>
				<h3
					className={css`
						text-align: center;
					`}
				>Your Bench</h3>
				<Bench 
					bench={this.state.benchArray}
				/>
				<div className={gridParent} >
					{<Pokeballs handlePokeballClick={this.handlePokeballClick}/>}
				</div>
			</div>
		)
	}
}