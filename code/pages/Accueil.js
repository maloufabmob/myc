import React from 'react'

import { Link } from 'react-router-dom'
export default () => {
	return (
		<div>
			<p>Empreinte climat des villes</p>
			<ul>
				<li>
					<Link to="/Paris">Paris</Link>
				</li>
			</ul>
		</div>
	)
}
