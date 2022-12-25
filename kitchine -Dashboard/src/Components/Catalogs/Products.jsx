import React from "react";
import { useState } from "react";
import SearchBar from "../Shares/SearchBar/SearchBar";
import { ActiveOption, TblProductHeader } from "../Shares/StaticData";
import ShareTable from "../Shares/ShareTable";
import TitleBar from "../Shares/TitleBar";
import Pagination1 from "../Shares/Pagination1";
import UseRequest from "../../Hooks/UseRequest";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import AddProduct from "../Modal/Products/AddProduct";
import Dropdown from "../Shares/Dropdown";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const req = UseRequest();
  // Function
  useEffect(() => {
    setLoading(true);
    req({ uri: "products", method: "GET" }).then((res) => {
      setProducts(res?.data);
      setCurrentProducts(
        res?.data.slice(0, process.env.REACT_APP_PRODUCT_PER_PAGE)
      );
      setLoading(false);
    });
  }, []);
  // 
  return (
    <div className="py-10 px-5 bg-parag min-h-screen">
      <TitleBar
        title="Product list"
        btnName="Add product"
        openModal={setOpenModal}
      />

      <div className="bg-txt overflow-x-scroll">
        <div className=" py-5 grid grid-cols-4 gap-5 px-5">
          <div className="col-span-3">
            <SearchBar />
          </div>
          <Dropdown options={ActiveOption}/>
        </div>
        {!loading ? (
          <>
            <ShareTable
              tblData={currentProducts}
              tblHeader={TblProductHeader}
            />
            <div className="block text-center py-5 space-x-1 ">
              <Pagination1
                products={products}
                setCurrentProducts={setCurrentProducts}
              />
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      {openModal && (
        <div className="absolute">
          <AddProduct onClick={() => setOpenModal(!openModal)} />
        </div>
      )}
    </div>
  );
}
