import axios from "axios"
import { ObjectId } from "mongodb";
import type {GuestBookInput} from "../../types/interface"

export const fetchGuestBook = async()  => {
  const {data} =  await axios.get('/api/guestBook')
  const {guestBookData} = data
  return guestBookData
}

export const registerMessage = async(data : GuestBookInput)=> {
  try {
    await axios.post('/api/guestBook',data)
  } catch (error) {
    console.log(error)
  }
}

export const deleteMessage = async(id: ObjectId)=> {
  try {
    await axios.delete(`/api/guestBook/${id}`)
  } catch (error) {
    console.log(error)
  }
}