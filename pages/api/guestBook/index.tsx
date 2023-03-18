import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from '../../../lib/mongodb'
import type {GuestBookDataProps} from '../../../types/interface'

interface GuestMessage {
  _id?: ObjectId;
  name : string;
  message : string
}
export const getGuestBookMessage = async() => {
  const mongoClient = await clientPromise;
  const data = await mongoClient.db().collection('invitation').find().toArray()
  data.reverse()
  return JSON.parse(JSON.stringify(data))
}

export const addGuestBookMessage = async(message : GuestMessage) => {
  const mongoClient = await clientPromise;
  const response = await mongoClient.db().collection('invitation').insertOne(message)
  return response.insertedId
}
const getGuestBook = async(req : NextApiRequest, res : NextApiResponse<GuestBookDataProps | ObjectId | {error : string}>) => {
  if(req.method === 'GET'){
    const data = await getGuestBookMessage()
    res.status(200).json({guestBookData : data})
  }else if(req.method === 'POST'){
    if(req.body.name && req.body.message){
      const message = {
        name : req.body.name,
        message : req.body.message
      }
      const insertedId = await addGuestBookMessage(message)
      res.status(200).json(insertedId)
    }else{
      res.status(400).json({'error' : 'name and message are required '})
    }
    }
}

export default getGuestBook