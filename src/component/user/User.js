import React, {Component} from 'react';

import './user.scss';

export class User extends Component {
  constructor(props){
    super(props);
    this.usersList = this.props.usersList;
  }
  render() {
    console.log(this.usersList);
    return (
      this.usersList.map((elem, index) => (
        <li key={index}>
          User: {elem.name} {elem.fname}; age:{elem.age}
        </li>
        )
      )
    )
  }
}

