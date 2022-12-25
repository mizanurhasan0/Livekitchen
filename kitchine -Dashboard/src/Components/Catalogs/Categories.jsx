import React, { useEffect } from 'react'
import { useState } from 'react'
import UseRequest from '../../Hooks/UseRequest'
import Loading from '../Loading/Loading'
import AddCategory from '../Modal/Category/AddCategory'
import Dropdown from '../Shares/Dropdown'
import Pagination1 from '../Shares/Pagination1'
import SearchBar from '../Shares/SearchBar/SearchBar'
import ShareTable from '../Shares/ShareTable'
import { ActiveOption, TblCategoryHeader } from '../Shares/StaticData'
import TitleBar from '../Shares/TitleBar'

export default function Categories() {
// 
const [category, setCategory] = useState([]);
const [currentCategory, setCurrentCategory] = useState([]);
const [loading, setLoading] = useState(false);
const [openModal, setOpenModal] = useState(false);
const req = UseRequest();
// Function
useEffect(() => {
  setLoading(true);
  req({ uri: "category", method: "GET" }).then((res) => {
   
    setCategory(res?.data.reverse());
    setCurrentCategory(
      res?.data.slice(0, process.env.REACT_APP_PRODUCT_PER_PAGE)
    );
    setLoading(false);
  });
}, [openModal]);
// 
  return (
    <div className='py-10 px-5 bg-parag min-h-screen'>
        <TitleBar title={"Category"} btnName={"Add Category"} openModal={setOpenModal}/>
   {/* Table */}
        <div className="bg-txt overflow-x-scroll">
        <div className="py-5 grid grid-cols-4 gap-5 px-5">
          <div className="col-span-3">
            <SearchBar />
          </div>
          <Dropdown options={ActiveOption}/>
        </div>
        {!loading ? (
          <>
            <ShareTable
              tblData={currentCategory}
              tblHeader={TblCategoryHeader}
            />
            <div className="block text-center py-5 space-x-1 ">
              <Pagination1
                products={category}
                setCurrentProducts={setCurrentCategory}
              />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      {openModal && (
        <div className="absolute">
          <AddCategory onClick={() => setOpenModal(!openModal)} />
        </div>
      )}
    </div>
  )
}
