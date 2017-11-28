import React, { Component } from 'react';

import { Button } from "../button/Button";

import './aside.scss'

export class Aside extends Component {
  constructor(props){
    super(props);
    this.state= {
      active: false
    }
  }

  changeClass = () => {
    this.setState( { active : !this.state.active } );
  };

  render() {
    return (
      <aside className='aside'>
        <Button
          title={'I\'m smart button'}
          active={ this.state.active ? "active" : ''}
          onClick={ this.changeClass }
        />
      </aside>
    );
  }
}
