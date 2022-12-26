import React from 'react';
import Carousel from '../components/Carousel';
import FasionPage from './FasionPage';
import { Link } from 'react-router-dom';
import AccessoriesPage from './AccessoriesPage';
import DigitalPage from './DigitalPage';
import fakeApi from '../components/fakeApi';
function HomePage() {
  const fashionApi = [];
  const accessoriesApi = [];
  const digitalApi = [];
  fakeApi.forEach((i) => {
    if (i.category === 'electronics') {
      if (digitalApi.length < 4) digitalApi.push(i);
    } else if (i.category === 'jewelery') {
      if (accessoriesApi.length < 4) accessoriesApi.push(i);
    } else {
      if (fashionApi.length < 4) fashionApi.push(i);
    }
  });
  return (
    <div>
      <Carousel />
      <FasionPage Api={fashionApi} />
      <AccessoriesPage Api={accessoriesApi} />
      <DigitalPage Api={digitalApi} />
    </div>
  );
}

export default HomePage;
