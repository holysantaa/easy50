import React from 'react'
import Image from 'next/image';
import Logo from '@/components/Logo.jpg';
import Link from 'next/link';

function Header() {
  return (
    <header className='flex items-start justify-between
    bg-gray-50 w-full'>
        <Image
        src={Logo} alt="편안50 로고"
        width={300}
        height={100}
        className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
        />
        
        <div className="flex items-end">
            {/* Community Button */}
            <Link href="/community" passHref>
                <button className='text-gray-600 hover:text-gray-900 bg-gray-200 text-2xl rounded-full px-3 py-0.5'> 커뮤니티 </button>
            </Link>
            {/* SignUp Button */}
            <Link href="/signup" passHref>
                <button className='text-gray-600 hover:text-gray-900 bg-yellow-200 text-2xl rounded-full px-3 py-0.5'> 회원가입 </button>
            </Link>
     
            {/* LogIn Button */}
            <Link href="/login" passHref>
                <button className='text-gray-600 hover:text-gray-900 bg-yellow-400 text-2xl rounded-full px-3 py-0.5'> 로그인 </button>
            </Link>

        </div>
    </header>
  )
}

export default Header