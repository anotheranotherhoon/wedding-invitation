import React, { useEffect } from 'react'

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton()
  }, [])

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.NEXT_PUBLIC_KAKAOMAP_KEY)
      }
      kakao.Link.sendScrap({
        requestUrl: 'http://localhost:3000/', // 페이지 url
    templateId: 12345, // 메시지템플릿 번호
    templateArgs: {
      PROFILE : '프로필 이미지 주소', // 프로필 이미지 주소 ${PROFILE}
      THUMB: '썸네일 주소', // 썸네일 주소 ${THUMB}
      TITLE: '제목 텍스트입니다', // 제목 텍스트 ${TITLE}
      DESC: '설명 텍스트입니다', // 설명 텍스트 ${DESC}
},
      })
      
    }
  }

  return (
    <div className="kakao-share-button">
      <button id="kakao-link-btn">
        hello
      </button>
    </div>
  )
}

export default KakaoShareButton