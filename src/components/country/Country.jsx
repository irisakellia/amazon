import React from 'react';
import { Star } from 'react-feather';
import iphone from '../../assets/iphone.png';
import samsung from '../../assets/samsung.png';
import jupro from '../../assets/jupro.png';

const Country = () => {
  return (
    <div className='grid grid-cols-2 gap-4 flex-gap-20'>
      {/* First column */}
      <div>
        <div className='mt-0 flex gap-5'>
          <img src={iphone} alt='phone' className='w-28 h-28' />
          <div>
            <p><span className='text-black text-opacity-50'>sponsored</span></p>
            <p><span className='font-bold'>Samsung Galaxy Z Fold3 5G (Phantom Black,12GB RAM, 256GB Storage) with No Cost EMI/  Additional Exchange Offers</span></p>
            <p><span className='text-orange-600'>$1,49,999 </span><span className='line-through'>$1,71,999</span> Save $22,000(13%)</p>
            <p><span className='text-black text-opacity-50'>FREE Delivery by Amazon.</span></p>
            <p><span className='text-black text-opacity-50'>This item will be released on September 10,2021.</span></p>
          </div>
        </div>
        <div className='flex gap-5'>
          <img src={samsung} alt='samsung' className='w-28 h-28'/>
          <div>
            <p className='font-bold'>Redmi 9A (Nature Green, 2GB RAM, 32GB Storage )| 2GHz Octa-core Helio G25 Processor|</p>
            <p>500mAh Battery</p>
            <p className='text-black text-opacity-50'>73,948</p>
            <p><span className='text-orange-600'>$6,999</span> <span className='line-through'>$8,499</span><span className='text-black text-opacity-50'>Save $1,500(18%)</span> </p>
            <p className='text-black text-opacity-50'>FREE Delivery by Amazon</p>
            <p className='text-black text-opacity-50'>Get it by Thursday, September 9</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <img src={jupro} alt='jupro' className='h-28 w-28'/>
          <div>
            <p className='font-bold'>Redmi 9A (Nature Green, 2GB RAM, 32GB Storage )| 2GHz Octa-core Helio G25 Processor|</p>
            <p>500mAh Battery</p>
            <p className='text-black text-opacity-50'>73,948</p>
            <p><span className='text-orange-600'>$6,999</span> <span className='line-through'>$8,499</span><span className='text-black text-opacity-50'>Save $1,500(18%)</span> </p>
            <p className='text-black text-opacity-50'>FREE Delivery by Amazon</p>
            <p className='text-black text-opacity-50'>Get it by Thursday, September 9</p>
          </div>
        </div>
      </div>
      <div className='h-96 w-96 text-black leading-10'>
      <p className='block font-bold'>Department</p>
           <p className='block'>Smart Phones & Basic Mobiles</p>
           <p className='block'>Smart Phones</p>
           <p className='block'>Basic Mobiles</p>
           <p className='block text-blue-500'>See all two department</p>
           <p><Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />

       <Star className='inline-block fill-current text-yellow-500' />&Up
       </p>
       <p>
       <Star className='inline-block fill-current text-yellow-500' />
        <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />&Up
         </p>
         <p>
<Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />&Up
         </p>
         <p>
<Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />
         <Star className='inline-block fill-current text-yellow-500' />&Up
         </p>
      </div>
    </div>
  );
};

export default Country;
