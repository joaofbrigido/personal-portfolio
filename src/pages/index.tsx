import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/Sections/SectionHero';
import Technologies from '@/Sections/SectionTechnologies';
import Projects from '@/Sections/SectionProjects';
import About from '@/Sections/SectionAbout';
import Contact from '@/Sections/SectionContact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - João Fernando A. Brígido</title>
        <meta
          name="description"
          content="Portfolio pessoal - João Fernando do Amaral Brígido | Projetos, Sobre mim, Skills, Contato | Desenvolvedor Front-end & UI/UX Designer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <>
        <Header />
        <Hero />
        <Technologies />
        <Projects />
        <About />
        <Contact />
      </>
    </>
  );
}
