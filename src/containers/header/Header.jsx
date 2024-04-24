import React from 'react';
import amazon from '../../assets/amazon.png';
import {MapPin} from 'react-feather';
import { Search } from 'react-feather';

const Header = () => {
  return (
  
<div className='inline'>
  <div className="bg-gray-800 py-4 px-6 flex justify-between">
    <div className="flex  w-full"> 
      <img src={amazon} alt='amazon' className='w-60 h-12 m-0 p-0'/>
      <div className="ml-auto"> 
        <MapPin className='h-12 w-12'/> <p className='text-white'>Bangalore 56650</p>
      </div>
      <div className='h-10 w-96 bg-white  '><Search className='text-orange-500'/>
        <button></button>
      </div>
    </div>
  </div>
</div>


 
   );
};

export default Header;
