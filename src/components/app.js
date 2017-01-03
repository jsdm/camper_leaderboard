import React, { Component } from 'react';
import axios from 'axios';

const URL_ALL_TIME = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const URL_RECENT = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
var dats = '' ;

class FCCList extends Component {
  constructor(props) {
    super(props);
    this.state = { dat: [] };
    this.getData = this.getData.bind(this);
  }
  getData(sort) {
    axios.get(sort).then( (response) => {
      this.setState({ dat: response.data });
    }).catch( (error) => {console.log(error);});
  }
  componentWillMount() {
    this.getData(URL_ALL_TIME);
  }
  renderList (listData, idx) {
    if(!listData) { return <td>Loading....</td> }
    const nr = idx + 1;
    const image = listData.img;
    const cambName = listData.username;
    const pnts30 = listData.recent;
    const pntsAT = listData.alltime;
    return (
      <tr key={nr}>
        <td>{nr}</td>
        <td><a href={`http://www.freecodecamp.com/${cambName}`} target="_blank"><img src={image} /> {cambName}</a></td>
        <td>{pnts30}</td>
        <td>{pntsAT}</td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-no-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th onClick={search => this.getData(URL_RECENT)} className='pointer' >Points past 30 days</th>
              <th onClick={search => this.getData(URL_ALL_TIME)} className='pointer'>All time pointses</th>
            </tr>
          </thead>
          <tbody>
            { this.state.dat.map(this.renderList) }
          </tbody>
      </table>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <FCCList />
      </div>
    );
  }
};