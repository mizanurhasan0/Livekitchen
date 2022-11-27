import React from 'react'
import { useState } from 'react'
import Pagination from '../../Utils/Pagination'
import Tables from '../Shares/Tables'
import TitleBar from '../Shares/TitleBar'

export default function Categories() {
  const [currentPosts,setCurrentPosts]=useState(false)

  return (
    <div className='py-10 px-5 bg-parag min-h-screen'>
        <TitleBar title={"Category"} btnName={"Add Category"}/>
   
        <div className="overflow-scroll">
            <Tables tblData={currentPosts}/>
            <div className="block text-center py-5 space-x-1 ">
          <Pagination setCurrentPosts={setCurrentPosts} />
        </div>
        </div>
    </div>
  )
}
