// pages/blog.js
import Link from "next/link";
import React from "react";

const blogPosts = [
  {
    id: "1",
    title: "First Blog Post",
    description: "This is a summary of the first blog post.",
  },
  {
    id: "2",
    title: "Second Blog Post",
    description: "This is a summary of the second blog post.",
  },
  // Ajoute d'autres articles ici...
];

export default function BlogPage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2 className="text-2xl font-semibold">
              <a
                href="href={`/blog/${post.id}`}"
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </a>
            </h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
