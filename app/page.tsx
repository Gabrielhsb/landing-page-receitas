import NavBar from "@/componets/Navbar";
import HeroSection from "@/componets/HeroSection";
import Features from "@/componets/Features";
import Footer from "@/componets/Footer";
import CallToAction from "@/componets/CallToAction";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Guia Prático de Milhas Aéreas | Ganhe Dinheiro com Suas Milhas
        </title>
        <meta
          name="description"
          content="Aprenda como ganhar dinheiro com milhas aéreas e maximize seus lucros. Descubra estratégias práticas e eficientes para aproveitar ao máximo suas milhas e obter uma renda extra."
        ></meta>
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
        rel="stylesheet"
      />
      <NavBar />
      <HeroSection />
      <Features />
      {/* <Skills /> */}
      <CallToAction />
      <Footer />
    </main>
  );
}
