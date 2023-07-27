import Head from "next/head";
import Link from "next/link";

const blogs = [
    {
        title: "My First Blog",
        about: "This is my first blog! It is about coding! Click the button below to read it!",
        link: "/blog1"
    }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="min-h-screen flex flex-col gap-8 bg-zinc-900 text-white p-20">
          <h1 className="font-bold text-6xl pt-3 mt-3">Hi, I'm Thanosan!</h1>
          <p className="text-2xl">Welcome to my blog! This blog will be about all things programming!</p>
          <div className="flex gap-3">
              {blogs.map(({title, about, link}, idx) =>
                  <div key={idx} className="hover:-translate-y-1 transition flex flex-col gap-3 bg-zinc-800 p-5 w-1/3 rounded-xl">
                      <p className="font-bold text-center">{title}</p>
                      <p>
                          {about}
                      </p>
                      <div className="flex justify-center">
                          <Link className="flex justify-center w-1/2" href={link}>
                            <button className="p-3 hover:opacity-70 opacity-100 bg-zinc-700 rounded">View Blog</button>
                          </Link>
                      </div>
                  </div>
              )}
          </div>

      </main>
    </>
  );
}
