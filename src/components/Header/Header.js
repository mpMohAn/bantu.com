import React, { Component } from 'react'
import { Button, Dropdown, Menu, Icon, Image } from 'semantic-ui-react';
import logo from '../../img/logo.jpeg';
import { Link } from 'react-router-dom';


export default class MenuExampleSizeSmall extends Component {
	render() {

		return (
			<Menu size='large' fixed='top' inverted>
				<Menu.Item name='bars' onClick={this.props.toggle}>
					< Icon name='bars' />
				</Menu.Item>
				<Link to='/'>
					<Menu.Item name='bars'>
					<Image src={logo} className='logo'/>
				</Menu.Item>
				</Link>

				<Menu.Menu position='right'>
					<Dropdown item text='More'>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Icon name='phone'/>
								1800-123-5555 
							</Dropdown.Item>
							<Dropdown.Item>
								<Icon name='travel'/>
								Join US
							</Dropdown.Item>
							<Dropdown.Item>
								Become localbantu
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Menu.Item>
						<Button primary>Login</Button>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		)
	}
}
