import React, { Component } from 'react';
import ListItem from './list_item';

const CamperList = (props) => {
  if(props.campers.data){
  var leaderboard = props.campers.data.map(function(person) {
			return (
				<ListItem key={Math.random()+person.recent} rank={person.recent} image={person.img} name={person.username} recentPoints={person.recent} allPoints={person.alltime} />
			);
		});
  }
   
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>CamperNr</th>
          <th>Name</th>
          <th>Points30</th>
          <th>PointsAll</th>
        </tr>
      </thead>
      <tbody>
        { leaderboard }
      </tbody>
    </table>
    );
};

export default CamperList;