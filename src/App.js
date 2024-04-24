import React from 'react'
import Header from './containers/header/Header.jsx'
import  Taskbar from './containers/taskbar/Taskbar.jsx';



import  Country from './components/country/Country.jsx';
import  Card from './components/card/Card.jsx';
import  Brodcast from './components/brodcast/Brodcast.jsx';

const App = () => (
     <div className=''>
      <Header/>
      <Taskbar/>
      <Brodcast/>
      <Country/>
      {/* <Card/> */}
      
       
     
        </div>
);

export default App



