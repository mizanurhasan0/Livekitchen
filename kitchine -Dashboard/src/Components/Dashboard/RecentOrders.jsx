import React from "react";
import { GrMoreVertical } from "react-icons/gr";

const RecentOrders = () => {
  return (
    <table className="min-w-full">
      <thead className="bg-white border-b">
        <tr>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            #
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            First
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Last
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          >
            Handle
          </th>
          <th
            scope="col"
            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
          ></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            1
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            Mark
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            Otto
          </td>
          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            @mdo
          </td>
          <td className=" w-10  px-6 py-4 ">
            <GrMoreVertical size={20} className="cursor-pointer" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RecentOrders;
