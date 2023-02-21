import Header from "@/components/global/Header/Header";
import Preview from "@/components/EditorPage/Preview/Preview";
import Profile from "@/components/EditorPage/Profile/Profile";
import Sidebar from "@/components/EditorPage/Sidebar/Sidebar";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>Test for x</title>
        <meta name="description" content="Test for x" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header setShow={setShow} />
      <div className="main">
        <Sidebar />
        <Profile show={show} />
        <Preview show={show} />
      </div>
    </>
  );
}
