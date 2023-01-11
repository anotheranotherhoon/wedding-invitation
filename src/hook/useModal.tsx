import { useState } from "react";
export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [bankState, setBankState] = useState<string>('')
  const [accountNumberState, setAccountNumberState] = useState<string>('')
  const [nameState, setNameState] = useState<string>('')
  
  interface IShowModal {
    (bank : string, accountNumber : string, name : string) : void
  }

  const showModal : IShowModal = (bank, accountNumber, name) => {
    setBankState(bank)
    setAccountNumberState(accountNumber)
    setNameState(name);
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
  return{
    isModalOpen, bankState, accountNumberState, nameState, showModal, closeModal
  }
}


