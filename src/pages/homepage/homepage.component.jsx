import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

// homepage is a functional component
// we do not need any life-cycle methods here
const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
);

export default HomePage;
