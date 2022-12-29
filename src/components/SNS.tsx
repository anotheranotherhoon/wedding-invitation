import { useEffect } from "react"
import KaKaoShareButton from './KaKaoShareButton'
import CardLayout from "./CardLayout"

const SNS = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js`
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <CardLayout>
      <div>카카오톡 공유하기</div>
      <KaKaoShareButton />
    </CardLayout>
  )
}

export default SNS