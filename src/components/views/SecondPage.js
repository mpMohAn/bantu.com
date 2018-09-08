import React, { Component } from 'react';
import { Grid, Image, Divider, Container } from 'semantic-ui-react';
import HeaderExampleFloating from '../Header/Header';
import './secondPage.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import YouTube from 'react-youtube';
import Gallery from 'react-grid-gallery';



export default class SecondPage extends Component {
	state = {
		visible: false
	}
	handleButtonClick = () => this.setState({
		visible: !this.state.visible
	})

	
	render() {

		function importAll(r) {
			let images = {};
			r.keys().map((item, index) => {
				images[item.replace('./', '')] = r(item);
			});
			return images;
		}
		const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));


		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1
		};
		const opts = {
			height: '289',
			width: '415',
			playerVars: { 
				autoplay: 0
			}
		};
		const IMAGES = [{
				src: images['1.jpeg'],
				thumbnail: images['1.jpeg'],
				thumbnailWidth: 320,
				thumbnailHeight: 174,
				caption: "After Rain (Jeshu John - designerspics.com)"
			},
			{
				src: images['10.jpeg'],
				thumbnail: images['10.jpeg'],
				thumbnailWidth: 320,
				thumbnailHeight: 212,
				tags: [{
					value: "Ocean",
					title: "Ocean"
				}, {
					value: "People",
					title: "People"
				}],
				caption: "Boats (Jeshu John - designerspics.com)"
			},

			{
				src: images['2.jpeg'],
				thumbnail: images['2.jpeg'],
				thumbnailWidth: 320,
				thumbnailHeight: 212
			},
			{
				src: images['3.jpeg'],
				thumbnail: images['3.jpeg'],
				thumbnailWidth: 320,
				thumbnailHeight: 212
			},
			{
				src: images['4.jpeg'],
				thumbnail: images['4.jpeg'],
				thumbnailWidth: 320,
				thumbnailHeight: 212
			},
			{
				src: images['5.jpeg'],
				thumbnail: images['5.jpeg'],
				thumbnailWidth: 320,
				thumbnailHeight: 212
			},
			{
				src: images['6.jpeg'],
				thumbnail: images['6.jpeg'],
				thumbnailWidth: 320,
				thumbnailHeight: 212
			}
		]
		return (
			<div className='pkg-details'>
				<HeaderExampleFloating toggle={() => this.handleButtonClick() }></HeaderExampleFloating>
				<div className = 'main-img' >
					<Image  fluid src={this.props.location.state.image} />
				</div>
				<Grid className='pkg-info' columns='1'>
					<Grid.Row>
						<Grid.Column>
							<h1>Package Details Goes here</h1>
							<Divider></Divider>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Slider {...settings}>
					<div>
						<YouTube
							videoId = "jRKfumNPL1Y"
							opts={opts}
						/>
					</div>
					<div>
						<YouTube
							videoId = "bo2KQer1KNM"
							opts={opts}
						/>
					</div>
					<div>
						< Player
						playsInline
						poster = "/assets/poster.png"
						src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /
							>
					</div>
					<div>
						< Player
						playsInline
						poster = "/assets/poster.png"
						src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /
							>
					</div>
					<div>
						< Player
						playsInline
						poster = "/assets/poster.png"
						src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /
							>
					</div>
					<div>
						< Player
						playsInline
						poster = "/assets/poster.png"
						src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4" /
							>
					</div>
				</Slider>

				<Container>
					<Gallery images = {IMAGES}/>
				</Container>
			</div>
		)
	}
}
