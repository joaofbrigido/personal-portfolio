import { useState, useEffect, useRef, MutableRefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import S from './styles.module.scss';

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
      carousel.current?.scrollWidth - carousel.current?.offsetWidth
    );
  }, []);

  return (
    <section id="Projects" className={`mainContainer ${S.projects}`}>
      <div className={S.wrapper}>
        <h2>Projetos.</h2>

        <motion.ul
          className={S.projectCarousel}
          ref={carousel}
          whileTap={{ cursor: 'grabbing' }}
          drag="x"
          dragConstraints={{ right: 0, left: -widthContainer }}
        >
          {!!projects.length &&
            projects.map((project) => (
              <motion.li
                className={S.carouselItem}
                key={`${project.title}-${project.id}`}
              >
                <div className={S.image}>
                  <Image
                    src={project.img}
                    width={600}
                    height={300}
                    alt={project.title}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={S.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={S.linksWrapp}>
                    <Link href={project.linkProject} target="_blank">
                      Ver Projeto
                    </Link>
                    <Link href={project.linkGithub} target="_blank">
                      Ver No Github
                    </Link>
                  </div>
                </div>
              </motion.li>
            ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Projects;
