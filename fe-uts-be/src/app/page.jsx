"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-indigo-600">
          Management Inventory Express JS
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          A powerful and user-friendly inventory management system built with
          Express.js.
        </p>
      </header>

      <main className="mt-10">
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Features
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Real-time inventory tracking</li>
              <li>Easy-to-use dashboard</li>
              <li>Category and supplier management</li>
              <li>Detailed reporting</li>
              <li>Secure and reliable</li>
            </ul>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Get Started
            </h2>
            <p className="text-gray-700 mb-4">
              Manage your inventory seamlessly with our Express.js-powered web
              app. Register or log in to access your personalized dashboard.
            </p>
            <div className="flex space-x-4">
              <Link href="/login">
                <h2 className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
                  Login
                </h2>
              </Link>
              <Link href="/register">
                <h2 className="bg-gray-200 text-indigo-600 px-6 py-2 rounded-md hover:bg-gray-300 transition">
                  Register
                </h2>
              </Link>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default Home;
