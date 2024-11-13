"use client"
import React from "react";
import { useFetchSuppliers } from "../hooks/api-libs";
import LinkCard from "../components/LinkCard";

const SuppliersPage = () => {


   const {data: supplier, loading} = useFetchSuppliers();
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <div className="flex flex-wrap gap-6 w-full max-w-xl justify-center items-center">
        <LinkCard
          path="/items"
          title="Items"
          description="View and manage Items."
        />
        <LinkCard
          path="/categories"
          title="Categories"
          description="View and manage categories."
        />
      </div>

      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        supplier
      </h1>
      {loading ? (
        <div className="flex justify-center supplier-center">
          <p className="text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  ID
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  Contact Info
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-600">
                  Created BY ID
                </th>
              </tr>
            </thead>
            <tbody>
              {supplier && supplier.length > 0 ? (
                supplier.map((category) => (
                  <tr
                    key={category.id}
                    className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {category.id}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {category.name}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-700">
                      {category.contactInfo}
                    </td>

                    <td className="py-3 px-4 text-sm text-gray-700">
                      {category.createdBy}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-3 px-4 text-center text-gray-500">
                    No supplier found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SuppliersPage;
