import { ObjectId } from "mongodb";
import styled from "styled-components";
import Xbutton from "../../asset/Xbutton";

interface MessageCardProps {
  name: string;
  message: string;
  id: ObjectId
  mutate: (id: ObjectId) => void
}

const MessageCard = ({ name, message, id, mutate }: MessageCardProps) => {
  return (
    <MessageContainer>
      <TopWrapper>
          <MessageWriter>{name}</MessageWriter>
          <div className="close" onClick={() => mutate(id)}>
            <Xbutton/>
          </div>
      </TopWrapper>
      <MessageContent>{message}</MessageContent>
    </MessageContainer>
  )
}

const MessageContainer = styled.section`
  border-bottom: 1px solid gray;
  padding: 5px 0;
`

const TopWrapper = styled.section`
  display:flex;
  margin-bottom: 5px;
  .close{
    cursor: pointer;
    margin-left: auto;
  }
`
const MessageWriter = styled.div`
  font-weight : bold;
  margin-bottom: 3px;
`
const MessageContent = styled.div`
  overflow: auto;
  min-height:20px;
  max-height: 100px;
  line-height:22px;
`


export default MessageCard