import Head from "next/head";
import Link from "next/link";

export default function Blog1() {
    return (
        <>
            <Head>
                <title>Blog1</title>
                <meta name="description" content="" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <main className="min-h-screen bg-zinc-900 text-white p-20">
                <Link href="/"><button className="hover:opacity-80 opacity-100 transition hover:-translate-y-1 bg-zinc-700 rounded py-2 px-5">Back</button></Link>
                <div className="flex flex-col gap-8 ">
                    <h1 className="font-bold text-6xl pt-3 mt-3">My First Blog</h1>
                    <p className="text-zinc-300 italic">July 27, 2023</p>
                    <p className="text-lg">Welcome to my first blog! This blog is about programming!</p>
                </div>
            </main>
            <footer className="flex justify-center pb-5 text-white bg-zinc-900">
                <p>View the source code <Link className="underline" href='https://github.com/thanosan23/Blog-Template'>here!</Link></p>
            </footer>
        </>
    );
}
