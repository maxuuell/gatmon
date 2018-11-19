import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../components/general-styles.css'
import Helmet from 'react-helmet'
import PokemonPage from '../components/pokemonPage';
import Footer from '../components/Footer';

const IndexPage = () => (
	<StaticQuery
		query={graphql`
		query allPokemonQuery {
			allPokemonJson {
				edges {
					node {
						name
						url
					}
				}
			}
		}
		`}
		render={data => {
			return (
				<>
					<Helmet
						title={"Pokemon Bench"}
					>
						<html lang="en" />
						{/* <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" /> */}
					</Helmet>
					<PokemonPage
						data={data}
					/>
					<Footer />
				</>
			)
		}}
	/>
)

export default IndexPage
