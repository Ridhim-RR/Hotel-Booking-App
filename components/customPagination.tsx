import { Pagination } from '@mui/material'
import { useSearchParams } from 'next/navigation';
import { Router } from 'next/router';
import React from 'react'
import { useRouter } from 'next/navigation';


const CustomPagination = ({totalPages} : any) => {
    const router = useRouter();
    let queryParams;

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
      if (typeof window !== 'undefined'){
        queryParams = new URLSearchParams(window.location.search)
        if(queryParams.has('page')){
          queryParams.set("page",String(page));
        }else{
          queryParams.append('page',String(page));
        }
        const path = `${window.location.pathname}?${queryParams.toString()}`
        router.push(path)
      }
        console.log('Page changed to:', page);
      };

  return (
    <div className="pag">
        <Pagination count={totalPages} variant="outlined" shape="rounded"  color="primary" onChange={handleChange} defaultPage={1} />
    </div>
  )
}

export default CustomPagination