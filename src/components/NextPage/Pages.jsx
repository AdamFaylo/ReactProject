import React, { useEffect } from 'react'
import { useState } from 'react'
import "./pages.css"


export default React.memo(function Pages({onNextPage}) {
    const [page,setPage] = useState(1)
    const nextPage =  () => {
      setPage(p => p+1)
  }
  const backPage = () => {
      if (page < 1) {
        return
      }
      setPage(p => p-1)
  }

  useEffect(() => {

    onNextPage(page)
  }, [page])

  return (
    <div className='next_page'>
        <button className='btn_next btn btn-info' onClick={()=>{
          nextPage()
        }}>Next</button>
         <button className='btn_next btn btn-info' onClick={()=>{
           backPage()
        }}>Back</button>
    </div>
  )
})


