import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ObjectId } from "mongodb";
import React from "react";
import type { GuestBookData } from "../../../types/interface"
import { fetchGuestBook, deleteMessage } from "../../api/api";
import CardLayout from "../CardLayout"
import Pagination from "./Pagination";
import { usePagination } from "../../hook/usePagination";
import MessageCard from "./MessageCard";
import MessageForm from "./MessageForm";
import styled from "styled-components";

const GusetBook = ( ) => {
  const { page, setPage, offset } = usePagination()
  const queryClient = useQueryClient()
  const {data, isLoading} = useQuery(
    ["guestBook"],fetchGuestBook
  )
  const handleDelete = async(id : ObjectId)=> {
    await deleteMessage(id)
  }
  const {mutate } = useMutation((id :ObjectId ) =>handleDelete(id),
    {
    onSuccess :  () => queryClient.invalidateQueries(["guestBook"])
  })

  if(isLoading){
    return<div>로딩중</div>
  }
  return(
    <CardLayout>
      <GuestBookTitle>방명록 목록</GuestBookTitle>
      <div>
        {data&&
        <React.Fragment>
          {data.slice(offset, offset + 5).map((el : GuestBookData,key : string)=>(
          <MessageCard key={key} name={el.name} message={el.message} id={el._id} mutate={mutate}/>
        ))}
          </React.Fragment>}
          {data.length>0&&<Pagination
        total={data.length}
        limit={5}
        page={page}
        setPage={setPage}
        />}
      </div>
      <MessageForm/>
    </CardLayout>
  )
}

const GuestBookTitle = styled.div`
  text-align:center;
  font-weight: bold;
  font-size:1.3rem;
  margin: 30px 0;
`

export default GusetBook