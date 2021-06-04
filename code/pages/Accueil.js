import { Route, Switch } from 'react-router'

export default () => (
	<div>
		<div
			css={`
				height: 100vh;
				box-shadow: 0 12px 12px -10px rgba(48, 41, 41, 0.1);
				background: linear-gradient(90deg, #9e2886 -100%, #1bb9d9);
				display: flex;
				flex-direction: column;
				align-items: center;
				overflow: hidden;
			`}
		>
			<div
				css={`
					color: white;
					width: 80%;
					height: 70%;

					text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
					margin: 0 auto;
					padding-left: 1rem;
					display: flex;
					align-items: center;
					header,
					#phone {
						width: 50%;
					}
					h1 {
						font-size: 200%;
						font-weight: 600;
						margin: 1.2rem 0;
						color: white;
					}
					p {
						font-size: 100%;
					}
					@media (max-width: 800px) {
						flex-wrap: wrap;
						header,
						#phone {
							width: 100%;
						}
					}

					@media (max-width: 800px) {
						margin-top: 4rem;
						width: 100%;
						h1 {
							font-size: 150%;
							margin: 0.4rem 0;
						}
						#phone {
							width: 30%;
						}
						header img {
							width: 100px;
						}

						display: flex;
						flex-wrap: nowrap;
						overflow: hidden;
					}
				`}
			>
				<header>
					<h1>Explore how cities move and tackle climate change</h1>
					<p>
						We collect and visualize public data about how inhabitants move, and
						help cities design and reach their mobility climate goals.
					</p>
				</header>
				<Phone />
			</div>
			<p css="color: white; font-style: italic; text-align: center">
				The platform is set to launch in 2021 <br />
				Subscribe to be kept informed ⬇️
			</p>

			<div
				href="https://framalistes.org/sympa/subscribe/mobiliseyourcity_mrv_tool"
				css={`
					width: 100%;
					a {
						display: block;
						background: white;
						border-radius: 0.3rem;
						width: 14rem;
						text-align: center;
						cursor: pointer;
						text-decoration: none;
						padding: 0.2rem 0.6rem;
						font-size: 130%;
						color: black;
						text-transform: uppercase;
						font-weight: 600;
						margin: 0.4rem auto 3rem;
					}
				`}
			>
				<a href="#quoi">I'm interested ✉️</a>
			</div>
		</div>
		<Pourquoi />
		<About />
	</div>
)

let Phone = () => (
	<div
		id="phone"
		css={`
			@media (max-width: 800px) {
				transform: scale(0.8);
			}
			#container {
				position: relative;
				display: block;
				margin: auto;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				background: rgba(10, 10, 10, 1);
				width: 400px;
				height: 400px;
				border-radius: 20px;
				box-shadow: -2px 3px 7px rgba(0, 0, 0, 0.35);
				animation: zoomIn 2s ease;
			}
			@keyframes zoomIn {
				from {
					transform: scale(0.9);
					opacity: 0;
				}
				to {
					transform: scale(1);
					opacity: 1;
				}
			}
			#screen {
				opacity: 0;
				animation: turnOn 1s ease forwards;
				animation-delay: 1s;
				display: flex;
				align-items: center;
				justify-content: center

			}
			@keyframes turnOn {
				from {
					opacity: 0.6;
				}
				to {
					opacity: 1;
				}
			}
			}
		`}
	>
		<div id="container">
			<div id="shadows"></div>
			<div id="screen">
				<img
					src="/images/capture-carte-dt4a.png"
					css="width: 400px; height: 400px"
				/>
			</div>
			<div id="camera">
				<div id="lens"></div>
			</div>
			<div id="sidebutton"></div>
			<div id="ltbutton"></div>
			<div id="lbbutton"></div>
		</div>
	</div>
)

let Pourquoi = () => (
	<div
		id="quoi"
		css={`
			margin: 0 auto 2rem;
			max-width: 40rem;
			padding: 0.3rem 1rem;
			ul {
				list-style-type: none;
				padding-left: 1rem;
			}
			em {
				color: #6c5ce7;
				font-style: normal;
			}
			h2 {
				font-weight: 600;
				font-size: 135%;
				padding-right: 2rem;
				margin: 3rem 0 1.2rem;
				line-height: 1.4rem;
			}
			.illustration {
				font-size: 120%;
				display: block;
				margin: 0 auto 1rem;
				text-align: center;
			}
			.illustration > div {
				font-size: 150%;
				margin: 1rem;
			}

			img {
				max-height: 15rem;
				max-width: 100%;
			}
			display: flex;
			flex-direction: column;
			align-items: center;
			> p {
				margin-bottom: 2rem;
			}
		`}
	>
		<h2>Designed for cities</h2>
		<span className="illustration">
			<div>📏</div> Measure and gather good quality data
		</span>
		<img src="/images/spreadsheet-capture.png" />
		<p>
			As a city official, you most probably have data about how your inhabitants
			move around. It often is partial and not up to date, but it's a good
			start. First, we help you get the basic info needed to compute the climate
			impact of your city's mobility, and help you fill the blanks if needed.
		</p>
		<span className="illustration">
			<div>📢</div>Publish and visualize your data
		</span>{' '}
		<img src="/images/gitlab-capture.png" />
		<p>
			The environmental challenge will be solved through collaboration. Publish
			your mobility data following our simple standards, compare it as it is now
			to national and international GHG targets.
		</p>
		<span className="illustration">
			<div>📉 </div>Evaluate the potential of your projected shifts
		</span>{' '}
		<img src="/images/mission-climat-capture.png" />
		<p>
			Start from your present data to design the future : see the impact of a
			new Bus rapid transit, combined to a financial incentive to carpool.
		</p>
	</div>
)

const About = ({}) => (
	<div
		id="quoi"
		css={`
			padding: 2rem 1rem;
			background: linear-gradient(90deg, #9e2886 -100%, #1bb9d9);
			section {
				max-width: 40rem;
				margin: 0 auto;
			}
			ul {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
			}
		`}
	>
		{' '}
		<section>
			<h2>About</h2>
			<ul>
				<li>
					<a href="https://www.mobiliseyourcity.net">
						<img src="https://www.mobiliseyourcity.net/themes/custom/mobilise_your_city_theme/img/logo.png" />
					</a>
				</li>
				<li>
					<a href="https://lafabriquedesmobilites.fr">
						<img src="https://lafabriquedesmobilites.fr/images/logo fabmob sans texte.svg" />
					</a>
				</li>
				<li>
					<a href="https://afd.fr">
						<img src="https://www.afd.fr/sites/afd/files/logo_0.png" />
					</a>
				</li>
			</ul>
		</section>
	</div>
)
