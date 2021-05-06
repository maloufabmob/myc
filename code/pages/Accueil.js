import { Route, Switch } from 'react-router'

export default () => (
	<div>
		<div
			css={`
				height: 90vh;
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
						We collect public data about how inhabitants move in cities,
						visualise them, and help them measure and reach their climate goals.
					</p>
				</header>
				<Phone />
			</div>
			<p css="color: white; font-style: italic; text-align: center">
				The platform is set to launch in 2021. <br />
				Click the following button to susbscribe to our newsletter.
			</p>

			<div
				href="#quoi"
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
				<a href="#quoi">Get involved ✉️</a>
			</div>
		</div>
		<Pourquoi />
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
				animation-delay: 1.5s;
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
				<span>🚶🏿‍♀️ </span>
				<span>🚲</span>
				🚗 🚌 🚅
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
			margin: 0 auto;
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
		`}
	>
		<h2>Designed for cities</h2>
		<span className="illustration">
			<div>📏</div> Measure and gather good quality data
		</span>
		<p>
			As a city official, you most probably have data about how your inhabitants
			move around. It often is partial and not up to date, but it's a good
			start. First, we help you get the basic info needed to compute the climate
			impact of your city's mobility, and help you gather the necessary
			information if needed.
		</p>
		<span className="illustration">
			<div>📢</div>Publish and visualize your data
		</span>{' '}
		<p>
			The environmental challenge will be solved through collaboration. Publish
			your mobility data following our simple standards, compare it as it is now
			to national and international GHG targets.
		</p>
		<span className="illustration">
			<div>📉 </div>Evaluate the potential of your projected shifts
		</span>{' '}
		<p>
			Start from your present data to design the future : see the impact of a
			new Bus rapid transit, combined to a financial incentive to carpool.
		</p>
	</div>
)
