import React from 'react';
import dataBaseImg from '@/components/dataBaseImg.png';
import mobileImg from '@/components/mobileImg.png';
import Image from 'next/image';

function FeaturesAndIcons() {
  return (
    <div className='flex items-center justify-center'>
      {/* Database Feature */}
      <div className='flex items-center justify-center mb-4 mr-8'>
        <Image src={dataBaseImg} alt="Database Icon" className='w-12 h-12 mr-4' />
        <div>
          <h2 className='text-1xl font-bold'>데이터베이스</h2>
          <p className='text-lg'>
            일일 안전 순찰일지를<br />
            신속하고 안전하게<br />
            저장합니다.
          </p>
        </div>
      </div>

      {/* Mobile Feature */}
      <div className='flex items-center justify-center mb-4'>
        <Image src={mobileImg} alt="Mobile Icon" className='w-12 h-12 mr-4' />
        <div>
          <h2 className='text-1xl font-bold'>모바일 업무</h2>
          <p className='text-lg text-center'>
            휴대폰으로<br />
            언제 어디서나 쉽게<br />
            일일 안전 순찰일지를<br />
            기록합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesAndIcons;