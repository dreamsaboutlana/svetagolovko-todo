import React, { Component } from 'react';

import { Navigation } from '../navigation';

import './header.scss'

// export const Header = () =>
//   return (
//   <header className='header'>
//     <Navigation islogin />
//   </header>
//   );
// };

export class Header extends Component {
  render(){
    return (
      <header className='header'>
        <Navigation islogin />
      </header>
    );
  }
}

