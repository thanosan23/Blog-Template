import Head from "next/head";
import Link from "next/link";

const blogs = [
    {
        title: "My First Blog",
        about: "This is my first blog! It is about coding!",
        link: "/blog1"
    }
];

export default function Blog1() {
  return (
    <>
      <Head>
        <title>Blog1</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="min-h-screen flex flex-col gap-8 bg-zinc-900 text-white p-20">
          <h1 className="font-bold text-6xl pt-3 mt-3">My First Blog</h1>
          <p className="text-lg">Welcome to my first blog! This blog is about programming!</p>
      </main>
    </>
  );
}
