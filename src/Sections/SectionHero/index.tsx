import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { showUp, zoom } from '@/util/animationProps';
import { Link as LinkScroll } from 'react-scroll';
import S from './styles.module.scss';

const Hero = () => {
  return (
    <main className={`mainContainer ${S.hero}`} id="hero">
      <span className={`redSphere ${S.sphereHero} ${S.sphereHero1}`}></span>
      <div className={S.wrapper}>
        <div className={S.left}>
          <motion.span
            {...showUp}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            JOÃO FERNANDO A. BRIGIDO
          </motion.span>
          <motion.h1
            {...showUp}
            transition={{
              duration: 0.3,
              delay: 0.25,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            Desenvolvedor Front-End & UI/UX Designer
          </motion.h1>
          <motion.div
            {...showUp}
            transition={{
              duration: 0.3,
              delay: 0.5,
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <LinkScroll to="projects" smooth={true} duration={700}>
              PROJETOS
            </LinkScroll>
          </motion.div>
        </div>

        <motion.div
          {...zoom}
          transition={{
            duration: 0.4,
            delay: 0.6,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            src="/mockup-hero.svg"
            width={531}
            height={463}
            alt="Jovem em frente à um computador"
          />
        </motion.div>
      </div>
      <span className={`redSphere ${S.sphereHero} ${S.sphereHero2}`}></span>
    </main>
  );
};

export default Hero;
