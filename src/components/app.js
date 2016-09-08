import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import List from './list';

const URL_ALL_TIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const URL_RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dat: [] };
    axios.get(URL_ALL_TIME).then( (response) => {this.setState({ dat: response });}).catch( (error) => {console.log(error);});
    
  }

  render() {
    return (
      <div className='container-fluid'>
        <Header />
        <List campers={this.state.dat} />
      </div>
    );
  }
}