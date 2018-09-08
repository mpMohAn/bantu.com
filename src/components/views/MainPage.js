import HeaderExampleFloating from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import React, { Component } from 'react';

export default class MainPage extends Component {
    
    state = { visible : false }

    handleButtonClick = () => this.setState({
        visible: !this.state.visible
    })
    
    render() {
        return (
        <div>
            <HeaderExampleFloating toggle={() => this.handleButtonClick() }></HeaderExampleFloating>
            <Sidebar visible={this.state.visible}></Sidebar>
        </div>
        )
    }
}
