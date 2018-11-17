import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import '../components/grid.css'
import Helmet from 'react-helmet'
import PokemonPage from '../components/pokemonPage';

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
						<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
					</Helmet>
					<PokemonPage
						data={data}
					/>
				</>
			)
		}}
	/>
)

export default IndexPage
