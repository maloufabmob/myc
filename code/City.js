import { useParams } from 'react-router'
import styled from 'styled-components'
import cities from './cities.yaml'

export default ({}) => {
	const { city } = useParams()
	const data = cities[city]

	return (
		<div
			css={`
				margin: 0 auto;
				max-width: 800px;
				padding: 0 1rem;
				div {
					margin: 4rem 0;
				}
			`}
		>
			<h1 css="text-transform: capitalize">{city}</h1>
			<div>
				<ul
					css={`
						max-width: 20rem;
						margin-left: 30%;
						li {
							display: flex;
							justify-content: space-between;
						}
					`}
				>
					{Object.entries(data.meta).map(([key, value]) => (
						<li key={key}>
							<Attribute>{key}</Attribute> {value}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h3>Millions de km parcourus par mode en 2019</h3>
				<ul
					css={`
						li {
						}
						li span {
							display: inline-block;
						}
					`}
				>
					{Object.entries(data.transport.repartition)
						.sort(([, a], [, b]) => a < b)
						.map(([key, value]) => (
							<li key={key}>
								<span css="text-transform: uppercase; font-size: 85%; color: grey; width: 10rem">
									{key}
								</span>{' '}
								<span
									css={`
										width: ${(value /
											Math.max(...Object.values(data.transport.repartition))) *
										10}rem;
										background: #a29bfe;
										height: 1rem;
										display: inline-block;
										margin: 0 1rem;
									`}
								/>
								{value}
							</li>
						))}
				</ul>
			</div>
			<div css="margin-left: 30% !important">
				<p>
					<span
						css={`
							font-size: 400%;
						`}
					>
						{Math.round(
							Object.values(data.transport.repartition).reduce(
								(memo, next) => Math.random() * next + memo,
								0
							)
						)}{' '}
					</span>

					<Attribute>tCO2e en 2019</Attribute>
				</p>
			</div>
		</div>
	)
}

const Attribute = styled.span`
	text-transform: uppercase;
	font-size: 85%;
	color: grey;
`
