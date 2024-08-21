import Head from "next/head";
import React from "react";

// pages/home.js
export default function HomePage() {
  return (
    <div className="bg-blue-500 text-white p-6">
      <h1 className="text-4xl font-bold">Welcome to My Static Homepage</h1>
      <p className="mt-4">This content is not editable through the CMS.</p>
    </div>
  );
}
