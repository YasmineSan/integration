import Head from "next/head";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>My Static Homepage</title>
        <meta name="description" content="This is a static homepage." />
      </Head>
      <header>
        <h1>Welcome to My Static Homepage</h1>
      </header>
      <main>
        <p>This content is not editable through the CMS.</p>
      </main>
      <footer>
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
