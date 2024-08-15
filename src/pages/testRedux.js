import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";

import HeaderLogo from "@/components/Header";
import ComponentReduxTester from "../components/ComponentReduxTester";

const Home = () => {
  const router = useRouter();
  
  const redirectHome = () => {
    router.push('/test')
  }
  return (
    <div style={{width: "100%"}}>
        <ComponentReduxTester />
    </div>
  );
};

export default Home;
