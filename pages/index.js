import Image from "next/image";
import Header from "../components/header";
import Hero from "../components/hero";
import QueryBox from "../components/queryBox";
import Footer from "../components/footer";
import Middle from "../components/middle";
import FAQ from "../components/faq";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Middle />
      <FAQ />
      <QueryBox />
      <Footer />
    </>
  );
}
