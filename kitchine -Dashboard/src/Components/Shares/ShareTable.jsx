import React from "react";
import { useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import UseRequest from "../../Hooks/UseRequest";
import AddCategory from "../Modal/Category/AddCategory";
import AddProduct from "../Modal/Products/AddProduct";
import AlertToster from "./Toastify/AlertToster";

const ShareTable = ({
  tblData = {},
  tblHeader = {},
  action = true,
  setReload,
}) => {
  const [show, setShow] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [itemId, setItemId] = useState(false);
  const req = UseRequest();
  let pathDir = useLocation()?.pathname.replace("/dashboard/", "");

  const onDelete = (id) => {
    req({ uri: `${pathDir}/remove/${id}`, method: "PATCH" }).then((res) => {
      if (res.status === 200) {
        setShow(false);
        setReload((v) => {
          if (v === false) {
            return true;
          } else {
            return false;
          }
        });
        AlertToster("Deleted", "success");
      } else {
        AlertToster("Something went wrong", "error");
      }
    });
  };

  return (
    <>
      <table className="min-w-full overflow-x-scroll">
        <thead className="bg-white border-b uppercase">
          <tr>
            {tblHeader.map((head) => {
              return (
                <th
                  key={head?.key}
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  {head?.name}
                </th>
              );
            })}

            {action && <th scope="col" className=" w-10  px-6 py-4 "></th>}
          </tr>
        </thead>
        <tbody>
          {tblData.map((data, key) => {
            return (
              <tr
                key={key}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                {tblHeader.map((name, key) => (
                  <td
                    key={key}
                    className="px-6 py-4 whitespace-nowrap text-sm "
                  >
                    {key === 0 && (
                      <img
                        className="w-12"
                        crossOrigin="anonymous"
                        src={
                          process.env.REACT_APP_URL_IMG +
                          `/${name?.imgDir}/${data?.images[0]}`
                        }
                        alt="product"
                      />
                    )}
                    {typeof data[name?.key] === "boolean" ? (
                      data[name?.key] === true ? (
                        "Live"
                      ) : (
                        "Down"
                      )
                    ) : name?.key === "category" ? (
                      data[name?.key]?.name ? (
                        data[name?.key]?.name
                      ) : (
                        <p className="text-primary">Deleted</p>
                      )
                    ) : (
                      data[name?.key]
                    )}
                  </td>
                ))}

                {action && (
                  <td className="relative w-10  px-6 py-4 ">
                    <GrMoreVertical
                      size={20}
                      className="cursor-pointer"
                      onClick={() =>
                        setShow((val) =>
                          val === data?._id ? false : data?._id
                        )
                      }
                    />
                    {show === data?._id && (
                      <div className="absolute bg-primary  ml-[-3rem] p-2 text-white rounded-md z-10">
                        <ul className="capitalize">
                          <li
                            className="cursor-pointer hover:bg-txt hover:text-primary"
                            onClick={() => {
                              setItemId(data._id);
                              setEditModal(true);
                              setShow(false);
                            }}
                          >
                            Edit
                          </li>
                          <li
                            className="cursor-pointer hover:bg-txt hover:text-primary"
                            onClick={() => onDelete(data._id)}
                          >
                            Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
      {editModal && (
        <div className="absolute">
          {pathDir === "products" && (
            <AddProduct
              onClick={() => setEditModal(!editModal)}
              itemId={itemId}
            />
          )}
          {pathDir === "category" && (
            <AddCategory
              onClick={() => setEditModal(!editModal)}
              itemId={itemId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ShareTable;
