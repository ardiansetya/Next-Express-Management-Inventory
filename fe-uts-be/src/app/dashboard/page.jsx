"use client";
import React from "react";
import LinkCard from "../components/LinkCard";
import { useFetchSystem } from "../hooks/api-libs";

const Dashboard = () => {
  const { data: systems, loading } = useFetchSystem();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <LinkCard
          path="/items"
          title="Items"
          description="View and manage items."
        />
        <LinkCard
          path="/suppliers"
          title="Suppliers"
          description="View and manage suppliers."
        />
        <LinkCard
          path="/categories"
          title="Categories"
          description="View and manage categories."
        />
      </div>

      {
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6 mt-10">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  Total Items
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  Total Categories
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  Total Suppliers
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  Total Stock Value
                </th>
              </tr>
            </thead>
            <tbody>
              {systems && systems.length > 0 ? (
                systems.map(
                  (system) => (
                    console.log(system),
                    (
                      <tr
                        key={system.id}
                        className="border-t border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {system.totalItems}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {system.totalCategories}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {system.totalSuppliers}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {system.totalStockValue}
                        </td>
                      </tr>
                    )
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-3 px-4 text-center text-gray-500">
                    Data Not Found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Dashboard;
