import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export async function getStaticProps() {
  console.log("getStaticProps called");

  try {
    const files = fs.readdirSync(path.join("content/blog"));
    console.log("Files found:", files);

    const posts = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("content/blog", filename),
        "utf-8"
      );
      console.log("File content:", markdownWithMeta);

      const { data: frontmatter } = matter(markdownWithMeta);
      console.log("Frontmatter:", frontmatter);

      // Convertir la date en chaîne de caractères
      frontmatter.date = frontmatter.date.toISOString();

      return {
        frontmatter,
        slug: filename.split(".")[0],
      };
    });

    console.log("Posts:", posts);

    // Trier les posts du plus récent au plus ancien
    posts.sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error reading files:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default function BlogPage({ posts }) {
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
            <a href="/something" className="text-white">
              Something
            </a>
          </li>
        </ul>
      </nav>

      <div className="p-6">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {frontmatter.image && (
                <Image
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  width={400}
                  height={250}
                  className="object-cover w-full"
                />
              )}
              <div className="p-4">
                <h2 className="text-2xl font-semibold">
                  <a
                    href={`/blog/${slug}`}
                    className="text-blue-500 hover:underline"
                  >
                    {frontmatter.title}
                  </a>
                </h2>
                <p className="mt-2 text-gray-600">{frontmatter.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
