import React from "react";
import { useState } from "react";
import { GrMoreVertical } from "react-icons/gr";

const ShareTable = ({ tblData = {}, tblHeader = {}, action = true }) => {
  const [show, setShow] = useState(false);

  return (
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
        {tblData.map((data) => {
          return (
            <tr
              key={data?.id}
              className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
            >
              {tblHeader.map((name, key) => (
                <td key={key} className="px-6 py-4 whitespace-nowrap text-sm ">
                  {key === 0 && (
                    <img
                      className="w-12"
                      crossOrigin="anonymous"
                      src={process.env.REACT_APP_URL_IMG + `/products/${data.images[0]}`}
                      alt="product"
                    />
                  )}
                  {typeof data[name.key] === "boolean"
                    ? data[name.key] === true
                      ? "Live"
                      : "Down"
                    :name.key==="category"?data[name.key].name: data[name.key]}
                </td>
              ))}

              {action && (
                <td className="relative w-10  px-6 py-4 ">
                  <GrMoreVertical
                    size={20}
                    className="cursor-pointer"
                    onClick={() =>
                      setShow((val) => (val === data?.id ? false : data?.id))
                    }
                  />
                  {show === data?.id && (
                    <div
                      className="absolute bg-primary  ml-[-3rem] p-2 text-white rounded-md
                z-10"
                    >
                      <ul className="capitalize">
                        <li className="cursor-pointer hover:bg-txt hover:text-primary">
                          Edit
                        </li>
                        <li className="cursor-pointer hover:bg-txt hover:text-primary">
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
    </table>
  );
};

export default ShareTable;
