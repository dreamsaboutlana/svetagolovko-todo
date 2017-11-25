import React from 'react';

import { Aside } from '../aside/Aside';
import { Content } from '../content/Content';

import './main.scss';

const Comps = {
  list() {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
    </ul>
    );
  },
  message(props) {
    return <mark>{props.text || 'Hello!'}</mark>
  }
};

// const MainComp = () => (
//   <div>
//     <Comps.list/>
//     <Comps.message text='Test me'/>
//   </div>
// );

const Section = (props) => {
  const Comp = Comps[props.element];
  return <Comp />;
};

export const Main = () => {

  return (
    <div className='wrapper'>
      <Aside/>
      <Content/>
      <Section element='list'/>
      <Section element='message'/>
    </div>
  );
};

