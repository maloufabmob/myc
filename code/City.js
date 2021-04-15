import { useParams } from 'react-router'
import cities from './cities.yaml'

export default ({}) => {
	const { city } = useParams()
	const data = cities[city]

	return (
		<div
			css={`
				margin: 0 auto;
				max-width: 800px;
			`}
		>
			<h1 css="text-transform: capitalize">{city}</h1>
			<ul
				css={`
					max-width: 20rem;
					margin-left: 20rem;
					li {
						display: flex;
						justify-content: space-between;
					}
				`}
			>
				{Object.entries(data.meta).map(([key, value]) => (
					<li key={key}>
						<span css="text-transform: uppercase; font-size: 85%; color: grey">
							{key}
						</span>{' '}
						{value}
					</li>
				))}
			</ul>
		</div>
	)
}