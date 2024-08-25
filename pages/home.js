import Link from "next/link";
import React from "react";


export default function HomePage() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/home" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/blog" className="text-white">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="/test" className="text-white">
              test
            </a>
          </li>
        </ul>
      </nav>
      <div className="bg-blue-500 text-white p-6">
        <h1 className="text-4xl font-bold">Welcome to My Static Homepage</h1>
        <p className="mt-4">This content is not editable through the CMS.</p>
      </div>
      
    </div>
    
  );
}
