import React from 'react'
import Image from 'next/image';
import Logo from '@/components/Logo.jpg';
import "./SignUpPage.css"

function SignUpPage() {
  return (
    <div>
      <h1 className='text-left font-bold px-5 py-1 text-3xl'> 회원 가입 </h1>
        <div className='signup'>
          <Image src={Logo} alt='logo' className='logo' />
          <h3>고객님에 대해 알려주세요.</h3>
          <form>
              <input placeholder='이름' type='text'/>
              <input placeholder='회사명(소속)' type='text'/>
              <input placeholder='부서/직위' type='text'/>
              <input placeholder='전화번호' type='text'/>
              <div>
                  <br />
              </div>

              <h2> 서비스를 이용할 아이디(이메일)과 비밀번호를 설정해주세요. </h2>
              <input placeholder='이메일' type='email'/>
              <input placeholder='비밀번호' type='password'/>
              <h3> * 6자리 이상 숫자와 문자로 설정해주세요. </h3>
              <input placeholder='비밀번호 확인' type='password'/>
              <h3> * 비밀번호를 한번 더 입력해주세요. </h3>

              {/*개인정보 수집 및 처리 목적에 대한 내용*/}
              <label>
                  <input type='checkbox'/>
                  <span>개인정보 취급 방침 및 활용에 대해 동의합니다. </span>
              </label>

              <button type='submit'>회원가입</button>
          </form>
        </div>
    </div>
  )
}

export default SignUpPage