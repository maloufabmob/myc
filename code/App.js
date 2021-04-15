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

const TempForumDown = ({}) => (
	<div css="max-width: 750px; margin: 0 auto; text-align: center; margin-top: 2rem">
		<img
			src="https://img.phonandroid.com/2021/03/incendie-ovh-e1615372715610.jpg"
			css="width: 20rem"
		/>
		<p>forum.fabmob.io est tombé avec le datacenter OVH. </p>
		<p>
			Nous publierons ici des nouvelles quand nous aurons avancé sur sa remise
			en ligne.
		</p>
		<p>
			Il était hébergé à <a href="http://92.222.85.102">cette adresse IP</a>.
		</p>
	</div>
)
