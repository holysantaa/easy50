// import React, { useState } from 'react';
"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import "./Board.css"
import FeaturesAndIcons from './FeaturesAndIcons';
import dailyCheckScreenShot from '@/components/dailyCheckScreenShot.png';
import Image from 'next/image';

function Board() {

  const [ideas, setIdeas] = useState([]);
  const [input, setInput] = useState("");

  const addIdeas = (e) => {
    e.preventDefault();

    addIdeas([...ideas, input]);
    setInput("");
  }

  // const [featureInput, setFeatureInput] = useState('');

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const emailBody = `Feature Request: ${featureInput}`;
  //   window.location.href = `mailto:holysanta@naver.com?subject=Feature Request&body=${encodeURIComponent(emailBody)}`;
  //   setFeatureInput('');
  // };

  // const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setFeatureInput(event.target.value);
  // };

  return (
    <div className='BoardInfo text-center justify-center mb-4'>
      {/* StartNow Paragraph */}
      <h1 className='font-bold text-3xl'>일일 안전 순찰일지를 쉽게 관리하고 휴대폰으로 기록하세요!</h1>
      <h3 className='text-2xl'>편안50의 일일 안전 순찰일지 기록 기능으로 종이 순찰일지의 불편함을 해결하세요.</h3>

      {/* StartEasy Button */}
      <Link href="/login" passHref>
        <button className='text-gray-600 hover:text-gray-900 bg-yellow-400 text-3xl rounded-full px-5 py-1'>시작하기</button>
      </Link>

      {/* 어떤 서비스인지 알 수 있는 사진 */}
      <div>
        <Image src={dailyCheckScreenShot} alt="일일 순찰일지 서비스 사진" className='dailyCheckScreenShot' />
      </div>

      <div className='bg-gray-50'>
        {/* 기능 아이콘+설명 components */}
        <h1 className='text-left font-bold px-5 py-1 text-3xl'> 편안50의 장점 </h1>
        <FeaturesAndIcons />
      </div>

      <div className='inputIdeas mt-8'>
        <h2>편안50 서비스는 기업의 안전관리자들이 업무를 더 편하고 쉽게 할 수 있도록 돕는 모든 기능들을 제공하고 싶습니다.<br />
          희망하는 다른 기능을 제안하거나 문의사항을 남겨주세요!
        </h2>

        <form>
          <input className='input__Ideas'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="원하는 기능이나 문의사항을 남겨주세요!"
          />
          <button type="submit" className="text-gray-600 hover:text-gray-900 bg-yellow-200 text-1xl rounded-full px-5 py-1" onClick={addIdeas}>
            제출하기
          </button>
          <h4>제출하신 내용은 관리자에게 전달되며, 기타 문의나 회신이 필요한 내용은 대표 이메일 주소(holysanta@naver.com)으로 보내주세요.</h4>
        </form>
        {/* <form onSubmit={handleSubmit}>
          <textarea
            value={featureInput}
            onChange={handleInputChange}
            placeholder="원하는 기능을 입력하세요..."
            rows={4}
            className="w-full border border-gray-300 rounded p-2 mb-2"
          ></textarea>
          <button type="submit" className="text-gray-600 hover:text-gray-900 bg-yellow-400 text-3xl rounded-full px-5 py-1">제출하기</button>
        </form> */}
      </div>
      <div>
        <br />
        <br />        <br />
      </div>
    </div>
  );
}

export default Board;
