import React from 'react';
import { Greeting } from '../greeting/Greeting';
import { Numbers } from '../numbers/Numbers';
// import { Counter } from '../counter/Counter';

import './content.scss'

const getProps = text => ({
  valid: true,
  text: text || 'Good boy!'
});

export const Content = () => (
  <main className='main'>
    <Greeting name='Sveta'/>
    <Numbers from={5} to={7} even />
    {/*<Counter />*/}
  </main>
);

