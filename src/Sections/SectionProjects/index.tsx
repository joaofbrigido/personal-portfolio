import { useState, useEffect, useRef, MutableRefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import S from './styles.module.scss';
import {
  showLeft,
  showUpLow,
  transitionDefault,
  zoomLow,
} from '@/util/animationProps';

type CarouselProps = {
  id: number;
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
      title: 'Site Carol Maconi',
      description:
        'Site para arquiteta Carol Maconi, focado um SEO, performance e acessibilidade. Utilizado NextJs, Tailwind, Shadcn/UI e Figma',
      linkProject: 'https://www.carolmaconi.com.br/',
      linkGithub: 'https://github.com/jfab-projects/carolmaconi',
      img: '/projects/imgProject5.jpg',
    },
    {
      id: 2,
      title: 'Cryptoprice',
      description:
        'Aplicação Web em NextJS, que faz o cálculo do preço médio de compra das criptomoedas Bitcoin e Ethereum e exibe a cotação em tempo real.',
      linkProject: 'https://cryptoprice.joaobrigido.com.br/',
      linkGithub: 'https://github.com/joaofbrigido/cryptoprice',
      img: '/projects/imgProject1.jpg',
    },
    {
      id: 3,
      title: 'Site DoQR',
      description:
        'Site e blog para empresa DoQR Tecnologia, totalmente gerenciável por um CMS. Utilizado NextJs, Sass, GraphQL (Hygraph) e Figma',
      linkProject: 'https://www.doqr.com.br/',
      linkGithub: '#',
      img: '/projects/imgProject2.jpg',
    },
    {
      id: 4,
      title: 'Site Safrasul Alimentos',
      description:
        'Desenvolvimento e Design do site para Safrasul Alimentos. Tecnologias utilizadas: Html/Css/Javascript, C# Asp.Net Core e AdobeXD',
      linkProject: 'https://safrasul.com.br/',
      linkGithub: '#',
      img: '/projects/imgProject3.jpg',
    },
    {
      id: 5,
      title: 'Controle Financeiro',
      description:
        'Aplicação Web que faz a gestão de receitas e despezas utilizando Html/Css/Javascript',
      linkProject: 'https://joaofbrigido.github.io/controle-financeiro/',
      linkGithub: 'https://github.com/joaofbrigido/controle-financeiro',
      img: '/projects/imgProject4.jpg',
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
    <section id="projects" className={`mainContainer ${S.projects}`}>
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
                      {project.linkProject === '#' ? (
                        <span
                          className={S.linkDisabled}
                          title="Projeto privado"
                        >
                          Ver Projeto
                        </span>
                      ) : (
                        <Link href={project.linkProject} target="_blank">
                          Ver Projeto
                        </Link>
                      )}

                      {project.linkGithub === '#' ? (
                        <span
                          className={S.linkDisabled}
                          title="Projeto privado"
                        >
                          Ver No Github
                        </span>
                      ) : (
                        <Link href={project.linkGithub} target="_blank">
                          Ver No Github
                        </Link>
                      )}
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
