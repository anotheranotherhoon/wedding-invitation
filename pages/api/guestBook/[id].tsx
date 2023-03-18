import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export const deleteMessage = async(id : string | ObjectId) => {
  id = typeof id === 'string' ? new ObjectId(id) : id;
  const mongoClient = await clientPromise;
  return await mongoClient.db().collection('invitation').deleteOne({_id : id})
}

const deleteGuestBookMessage = async(req : NextApiRequest, res : NextApiResponse) => {
  const id = req.query.id!
  if(req.method === 'DELETE'){
    const data = await deleteMessage(id as string)
    res.status(200).json({deletedCount : data.deletedCount})
  }
}
export default deleteGuestBookMessage