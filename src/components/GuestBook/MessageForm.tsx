import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form"
import styled from "styled-components";
import type { GuestBookInput } from "../../../types/interface"
import { registerMessage } from "../../api/api";



const MessageForm = () => {
  const { register, handleSubmit, getValues, setValue } = useForm<GuestBookInput>()
  const queryClient = useQueryClient()
  const clearInput = () => {
    setValue('message', '')
    setValue('name', '')
  }
  const handleRegister = async () => {
    await registerMessage(getValues())
    clearInput()
  }
  const handleEnterPress = async (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      await registerMessage(getValues())
      clearInput()
    }
  }

  const { mutate } = useMutation(handleRegister,
    {
      onSuccess: () => queryClient.invalidateQueries(["guestBook"])
    })
  return (
    <form onSubmit={handleSubmit(() => mutate())}>
      <MessageFormWrapper>
        <InputWrapper>
          <label>작성자</label>
          <input {...register('name')} onKeyDown={handleEnterPress} />
        </InputWrapper>
        <InputWrapper>
          <label>메세지</label>
          <ContentInput {...register('message')} />
        </InputWrapper>
        <button>등록</button>
      </MessageFormWrapper>
    </form>
  )
}
const MessageFormWrapper = styled.section`
  button{
    cursor:pointer;
    letter-spacing:1px;
    float: right;
    margin-bottom: 20px;
    background-color:#524344;
    border:#524344;
    border-radius: 9px;
    color : var(--color-white);
    padding:5px 8px;
  }
`
const InputWrapper = styled.section`
    display:flex;
    flex-direction:column;
    margin: 5px 0;
    label{
      margin-bottom: 5px;
    }
`
const ContentInput = styled.textarea`
  height: 50px;
`
const ButtonWrapper = styled.div`
`
export default MessageForm