import React from 'react'
import CalendarAPI from './CalendarAPI'
import './TopBar.css'

function WorkAccepted() {
  return (
    <div>WorkAccepted
        <div className='TopBar'>
            <button type="button" className='WorkAcceptedBox font-bold bg-yellow-200'> 일일 순찰일지 제출된 기록보기 </button>
            <button type="button" className='WorkSendBox bg-yellow-50'> 일일 순찰점검 신규 요청하기 </button>
            <button type="button" className='WorkSheetBox bg-yellow-50'> 일일 순찰일지 양식 관리 </button>
        </div>
        <div className='AcceptBody'>
            <CalendarAPI/>
            {/* PrevData (Accepted Database Array) */}
        </div>
    </div>
  )
}

export default WorkAccepted