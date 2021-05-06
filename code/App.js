import React, { createContext, useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import css from './main.css.js'
import Nav from './Nav'
import About from './pages/About'
import Accueil from './pages/Accueil'
import { fetchLastEvents } from './wikiAPI.js'
import City from './City'

const UtmFriendlyRedirect = (props) => (
	<Redirect
		computedMatch={props.computedMatch}
		to={{ pathname: props.to, search: props.location.search }}
	/>
)

// Create Context Object
export const WikiContext = createContext()

// Create a provider for components to consume and subscribe to changes
export const WikiContextProvider = (props) => {
	const [eventData, setEventData] = useState([])

	useEffect(() => fetchLastEvents(setEventData), [])

	return (
		<WikiContext.Provider value={[eventData, setEventData]}>
			{props.children}
		</WikiContext.Provider>
	)
}

// is this a good idea ? Would it be quicker for the user to load as .css in index.html ?
const GlobalStyle = createGlobalStyle`${css}`
const Container = () => (
	<WikiContextProvider>
		<GlobalStyle />
		<Router>
			{false && <Nav />}
			<div
				css={`
					img {
						width: 5rem;
					}
					position: absolute;
					left: 0.2rem;
					color: white;
					display: flex;
					align-items: center;
				`}
			>
				<img src={'/images/logo.svg'} />
				MYC Data
			</div>

			<Switch>
				<Route path="/à-propos">
					<About />
				</Route>
				<Route path="/:city">
					<City />
				</Route>
				<Route path="/">
					<Accueil />
				</Route>
			</Switch>
		</Router>
	</WikiContextProvider>
)

export default Container
