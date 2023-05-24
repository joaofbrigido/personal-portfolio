import Image from 'next/image';
import Link from 'next/link';
import S from './styles.module.scss';

const Hero = () => {
  return (
    <main className={`mainContainer ${S.hero}`}>
      <span className={`redSphere ${S.sphereHero} ${S.sphereHero1}`}></span>
      <div className={S.wrapper}>
        <div className={S.left}>
          <span>JOÃO FERNANDO A. BRIGIDO</span>
          <h1>Desenvolvedor Front-End & UI/UX Designer</h1>
          <Link href="#projects">PROJETOS</Link>
        </div>
        <Image
          src="/mockup-hero.svg"
          width={531}
          height={463}
          alt="Jovem em frente à um computador"
        />
      </div>
      <span className={`redSphere ${S.sphereHero} ${S.sphereHero2}`}></span>
    </main>
  );
};

export default Hero;
