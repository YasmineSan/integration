import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

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
      <Navbar />

      <div className="p-6">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="space-y-6">
          {posts.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image à gauche */}
              {frontmatter.image && (
                <div className="w-full md:w-1/3">
                  <Image
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}

              {/* Texte à droite */}
              <div className="p-4 w-full md:w-2/3 flex flex-col justify-center">
                {/* Tags (hashtags) */}
                <p className="text-sm text-gray-500">#{frontmatter.tags.join(' #')}</p>
                <h2 className="text-2xl font-semibold mt-2">
                  <Link href={`/blog/${slug}`}>
                    <a className="text-blue-500 hover:underline">{frontmatter.title}</a>
                  </Link>
                </h2>
                <p className="mt-2 text-gray-600">{frontmatter.summary}</p>

                {/* Bouton "Consulter" */}
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  <Link href={`/blog/${slug}`}>
                    <a>Consulter</a>
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

