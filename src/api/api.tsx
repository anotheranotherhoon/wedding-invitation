import axios from "axios"
import { ObjectId } from "mongodb";
import type {GuestBookInput} from "../../types/interface"

export const fetchGuestBook = async()  => {
  try {
    const {data} =  await axios.get('/api/guestBook')
    const guestBookData = data.guestBookData
    return guestBookData
  } catch (error) {
    return console.log(error,'here')
  }
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