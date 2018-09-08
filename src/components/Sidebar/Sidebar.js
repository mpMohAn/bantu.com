import React, { Component } from 'react'
import { Icon, Menu, Sidebar, Grid, Image } from 'semantic-ui-react';
import CardExampleCard from '../Cards/Cards';
import './sidebar.css';
import main_bg from '../../img/main_bg.jpeg';

export default class SidebarExampleDimmed extends Component {


	render() {

		function importAll(r) {
			let images = {};
			r.keys().map((item, index) => {
				images[item.replace('./', '')] = r(item);
			});
			return images;
		}
		const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));


		return (
			<div>
					<Sidebar.Pushable  style={{ marginTop: '78px' }}>
						<Sidebar
						as={Menu}
						animation='overlay'
						icon='labeled'
						inverted
						onClick={this.props.toggle}
						vertical
						visible={this.props.visible}
						width='thin'
						>
							<Menu.Item as='a'>
								<Icon name='home' />
								Home
							</Menu.Item>
							<Menu.Item as='a'>
								<Icon name='gamepad' />
								Games
							</Menu.Item>
							<Menu.Item as='a'>
								<Icon name='camera' />
								Channels
							</Menu.Item>
						</Sidebar>

						<Sidebar.Pusher dimmed={this.props.visible}>
						<div className='main-img'>
							<Image src={main_bg} fluid />
						</div>
							<Grid columns='four' className='pkg-container'>
								<Grid.Row textAlign='center' padded>
									<Grid.Column>
										< CardExampleCard image={images['1.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['2.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['3.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['4.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['5.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['6.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['7.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['8.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['9.jpeg']}></CardExampleCard>
									</Grid.Column>
									<Grid.Column>
										< CardExampleCard image={images['10.jpeg']}></CardExampleCard>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
			</div>
		)
	}
}