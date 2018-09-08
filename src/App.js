import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import MainPage from './components/views/MainPage';
import SecondPage from './components/views/SecondPage';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Route path='/' exact component={MainPage}/>
						
					<Route path='/package' exact component={SecondPage}/>

				</div>
			</BrowserRouter>
		);
	}
}

export default App;
