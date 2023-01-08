import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UseRequest from "../../Hooks/UseRequest";
import Pagination from "../../Utils/Pagination";
import Pagination1 from "../Shares/Pagination1";
import SearchBar from "../Shares/SearchBar/SearchBar";
import ShareTable2 from "../Shares/ShareTable2";
import { TblUsersHeader } from "../Shares/StaticData";
import Tables from "../Shares/Tables";
import TitleBar from "../Shares/TitleBar";

export default function Customers() {
  const [users, setUsers] = useState([]);
  const [currentUsers,setCurrentUsers]=useState([])

  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const req = UseRequest();
  // Function
  useEffect(() => {
    setLoading(true);
    req({ uri: "user", method: "GET" }).then((res) => {
     
      setUsers(res.data.reverse().filter(d=>d.isAdmin[0]!=="admin"));
      setCurrentUsers(
        res.data.reverse().filter(d=>d.isAdmin[0]!=="admin").slice(0, process.env.REACT_APP_PRODUCT_PER_PAGE)
      );
      setLoading(false);
    });
  }, [openModal, reload]);

  return (
    <div className="py-10 px-5 bg-parag min-h-screen">
      <TitleBar title="Customers" btnName="Add Customer" />
      {/*  */}
      <div className="overflow-x-scroll bg-txt ">
        <div className=" py-5 grid grid-cols-4 gap-5 px-5">
         <div className="col-span-3">
         <SearchBar />
         </div>
          <select className="border-2 w-full col-span-1" name="dog-names" id="dog-names">
            <option value="rigatoni">Active</option>
            <option value="dave">Dave</option>
            <option value="pumpernickel">Pumpernickel</option>
            <option value="reeses">Reeses</option>
          </select>
         
        </div>
        <ShareTable2 tblHeader={TblUsersHeader} tblData={currentUsers}/>
        <div className="block text-center py-5 space-x-1 ">
        <Pagination1
                products={users}
                setCurrentProducts={setCurrentUsers}
              />
        </div>
      </div>
    </div>
  );
}
