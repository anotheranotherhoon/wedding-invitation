import axios from 'axios'
import {MongoClient} from 'mongodb'

const GuestBook = () => {

  const postComment = async(name : string, comment : string) => {
    const response = await axios.post('/api/guestBook/guestBook',{
      name,
      comment 
    })
    console.log(response)
  }

  return(
    <div onClick={()=>postComment('me', 'thankyoyu')}>test</div>
  )
}

export default GuestBook