import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * 5;
  return{
    page, setPage, offset
  }
}