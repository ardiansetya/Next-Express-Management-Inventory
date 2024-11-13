"use client";
import Link from "next/link";
import LinkCard from "../components/LinkCard";
import { useFetchItems } from "../hooks/api-libs";

const ItemPage = () => {
  const { data: items, loading } = useFetchItems();

  const renderItems = () => {
    return items && items.length > 0 ? (
      items.map((item) => (
        <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50">
          <td className="py-3 px-4 text-sm text-gray-700">{item.id}</td>
          <td className="py-3 px-4 text-sm text-gray-700">{item.name}</td>
          <td className="py-3 px-4 text-sm text-gray-700">
            {item.description}
          </td>
          <td className="py-3 px-4 text-sm text-gray-700">{item.price}</td>
          <td className="py-3 px-4 text-sm text-gray-700">{item.createdBy}</td>
          <td className="py-3 px-4 text-sm text-gray-700">{item.categoryId}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4" className="py-3 px-4 text-center text-gray-500">
          No items found
        </td>
      </tr>
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-6">
        <div className="flex flex-wrap gap-6 w-full max-w-xl justify-center items-center">
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
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Items
        </h1>
        {loading ? (
          <div className="flex justify-center items-center">
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
                    Description
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-600">
                    Price
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-600">
                    Created BY ID
                  </th>
                  <th className="py-3 px-4 text-sm font-medium text-gray-600">
                    Category ID
                  </th>
                </tr>
              </thead>
              <tbody>{renderItems()}</tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemPage;
