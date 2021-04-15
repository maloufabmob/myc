import React from 'react'
import { Link as OriginalLink, useLocation } from 'react-router-dom'
import { Link } from 'Components/Lang'

export default () => {
	return (
		<div>
			<header>
				<img
					css="height: 5rem"
					src="http://lafabriquedesmobilites.fr/wp-content/themes/fabmob/images/bg-communs.svg"
				/>
				<h1>Shift mobility through commons</h1>
				<p>
					Non profit building the future forms of mobility by gathering people
					and organisations around
					<mark>open source commons</mark>
				</p>
				<br />
				<p>
					<a href="./mvp.html" target="_blank">
						<i>Discover</i>
					</a>
					<a href="#" target="_blank">
						<b>Join us ! </b>
					</a>
				</p>
			</header>
			<p></p>
		</div>
	)
}
