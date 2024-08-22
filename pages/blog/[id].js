import fs from "fs";
import path from "path";
import matter from "gray-matter";
import React from "react";

// Fonction pour récupérer les chemins de tous les articles de blog
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content/blog"));

  const paths = files.map((filename) => ({
    params: { id: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Fonction pour récupérer les données de chaque article de blog
export async function getStaticProps({ params: { id } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("content/blog", `${id}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date.toISOString(), // Convertir la date en chaîne de caractères
      },
      content,
    },
  };
}

export default function BlogPostPage({ frontmatter, content }) {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">{frontmatter.title}</h1>
      <p>{content}</p>
    </div>
  );
}
