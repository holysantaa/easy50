import React from 'react'
import './TopBar.css'

function WorkSend() {
  return (
    <div>WorkSend
        <div className='TopBar'>
            <button type="button" className='WorkAcceptedBox bg-yellow-50'> 일일 순찰일지 제출된 기록보기 </button>
            <button type="button" className='WorkSendBox font-bold bg-yellow-200'> 일일 순찰점검 신규 요청하기 </button>
            <button type="button" className='WorkSheetBox bg-yellow-50'> 일일 순찰일지 양식 관리 </button>
        </div>
        <div className='SendBody'>
            <div className='SendOrder'>
                <h2>1. 전송 대상 선택하기</h2>
                {/*문자 전송 대상 선택 기능*/}
            </div>
            <div className='SendOrder'>
                <h2>2. 양식 선택하기</h2>
                {/*문자로 전송할 문서 양식 선택 기능*/}
            </div>
            <div className='SendOrder'>
                <h2>3. 전송하기</h2>
                {/*대상, 연락처, 메모, 링크 주소 문자에 첨부해서 보내기 기능*/}
            </div>
        </div>
    </div>
  )
}

export default WorkSend