import React from 'react';

import { Header } from './component/header';
import { Main } from './component/main';
import { Footer } from './component/footer';
import { Error } from './component/error/Error';

import './app.scss';

export const App = (
  <div className='inner-app'>
    <Header/>

    <Error
      text='Im props'
      data={ {test:123} }
      color='red'
    />

    <Main/>
    <Footer/>
  </div>
);