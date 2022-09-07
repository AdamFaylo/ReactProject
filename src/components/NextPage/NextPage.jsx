import React from 'react'
import { useDispatch } from 'react-redux'
import { upPage, downPage } from '../../features/next-page-slise'

const NextPage = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{
            dispatch(upPage())
        }}>next</button>
         <button onClick={()=>{
            dispatch(downPage())
        }}>back</button>
    </div>
  )
}

export default NextPage