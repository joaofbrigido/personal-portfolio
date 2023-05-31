import { useState, useEffect, useRef, MutableRefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';
import S from './styles.module.scss';
import {
  showLeft,
  showUp,
  showUpLow,
  transitionDefault,
  zoom,
  zoomLow,
} from '@/util/animationProps';

type CarouselProps = {
  id: number;
  position: string;
  title: string;
  description: string;
  linkProject: string;
  linkGithub: string;
  img: string;
};

const Projects = () => {
  const carouselData = [
    {
      id: 1,
      position: '01',
      title: 'Cryptoprice',
      description:
        'Aplicação Web em NextJS que faz o cálculo do preço médio de compra das criptomoedas Bitcoin e Ethereum.',
      linkProject: '#',
      linkGithub: '#',
      img: '/projects/project-2.jpg',
    },
    {
      id: 2,
      position: '02',
      title: 'Site DoQR',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, repudiandae minima. Minima dolorum consequuntur error.',
      linkProject: '#',
      linkGithub: '#',
      img: '/projects/project-3.jpg',
    },
    {
      id: 3,
      position: '03',
      title: 'Site Safrasul Alimentos',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.',
      linkProject: '#',
      linkGithub: '#',
      img: '/projects/project-1.jpg',
    },
  ];
  const [projects] = useState<CarouselProps[]>(carouselData);
  const carousel = useRef() as MutableRefObject<HTMLUListElement>;
  const [widthContainer, setWidthContainer] = useState(0);

  useEffect(() => {
    setWidthContainer(
      carousel.current?.scrollWidth + 90 - carousel.current?.offsetWidth
    );
  }, []);

  return (
    <section id="Projects" className={`mainContainer ${S.projects}`}>
      <div className={S.wrapper}>
        <motion.h2
          {...showLeft}
          transition={{ ...transitionDefault, delay: 0.15 }}
        >
          Projetos.
        </motion.h2>

        <motion.ul
          className={S.projectCarousel}
          ref={carousel}
          whileTap={{ cursor: 'grabbing' }}
          drag="x"
          dragConstraints={{ right: 0, left: -widthContainer }}
        >
          {!!projects.length &&
            projects.map((project, idx) => (
              <motion.li
                key={`${project.title}-${project.id}`}
                {...zoomLow}
                transition={{
                  ...transitionDefault,
                  delay: idx >= 2 ? 0.1 : idx * 0.2,
                }}
              >
                <motion.div className={S.carouselItem}>
                  <motion.div
                    className={S.image}
                    {...showUpLow}
                    transition={{ ...transitionDefault, delay: 0.4 }}
                  >
                    <Image
                      src={project.img}
                      width={600}
                      height={300}
                      alt={project.title}
                      style={{ objectFit: 'cover' }}
                    />
                  </motion.div>
                  <div className={S.content}>
                    <motion.h3
                      {...showUpLow}
                      transition={{ ...transitionDefault, delay: 0.5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      {...showUpLow}
                      transition={{ ...transitionDefault, delay: 0.6 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className={S.linksWrapp}
                      {...showUpLow}
                      transition={{ ...transitionDefault, delay: 0.7 }}
                    >
                      <Link href={project.linkProject} target="_blank">
                        Ver Projeto
                      </Link>
                      <Link href={project.linkGithub} target="_blank">
                        Ver No Github
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.li>
            ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;
