import { useEffect } from "react"
import CardLayout from "./CardLayout"

interface ISNS {
  title: string;
  description : string;
  canonical : string;
  img : string
}

const SNS = ({title, description, canonical, img} : ISNS) => {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAOMAP_KEY);
}, []);
  const onClick = () => {
    const { Kakao, location } = window;
    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: title,
        description: description,
        imageUrl: img,
        link: {
          mobileWebUrl: location.href,
          webUrl: location.href,
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: location.href,
            webUrl: location.href,
          },
        },
      ],
    });
  };
  return (
    <CardLayout>
      <div onClick={onClick}>카카오톡 공유하기</div>
    </CardLayout>
  )
}

export default SNS