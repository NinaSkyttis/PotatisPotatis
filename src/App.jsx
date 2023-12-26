import React from 'react';
import ChapterCreator from './componets/ChapterCreator';
import DataDisplay from './componets/DataDisplay';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
// import {store} from '../store.js';


const App = () => {
  return (
    <div>
      <Navbar/>
      <ChapterCreator/>
      <DataDisplay/>
      <Footer/>
    </div>
  );
};

export default App;
