import Image from 'next/image';
import { motion } from 'framer-motion';
import { showLeft, showRight, transitionDefault } from '@/util/animationProps';
import S from './styles.module.scss';

const Technologies = () => {
  const technologiesData = [
    {
      id: 1,
      technology: 'Html/Css',
      time: '3 anos',
      img: {
        src: '/technologies/logo-html-css.svg',
        width: 90,
        height: 70,
      },
    },
    {
      id: 2,
      technology: 'Javascript',
      time: '3 anos',
      img: {
        src: '/technologies/logo-js.svg',
        width: 80,
        height: 80,
      },
      transform: 'rotate(-10deg)',
    },
    {
      id: 3,
      technology: 'Figma',
      time: '3 anos',
      img: {
        src: '/technologies/logo-figma.svg',
        width: 80,
        height: 80,
      },
      transform: 'rotate(-10deg)',
    },
    {
      id: 4,
      technology: 'ReactJs',
      time: '2 anos',
      img: {
        src: '/technologies/logo-reactjs.svg',
        width: 80,
        height: 80,
      },
    },
    {
      id: 5,
      technology: 'NextJS',
      time: '1 ano e meio',
      img: {
        src: '/technologies/logo-nextjs.svg',
        width: 80,
        height: 80,
      },
    },
    {
      id: 6,
      technology: 'SQL',
      time: '1 ano',
      img: {
        src: '/technologies/logo-sql.svg',
        width: 80,
        height: 80,
      },
      transform: 'rotate(-10deg)',
    },
    {
      id: 7,
      technology: 'GraphQL',
      time: '1 ano',
      img: {
        src: '/technologies/logo-graphql.svg',
        width: 80,
        height: 80,
      },
      transform: 'rotate(-10deg)',
    },
  ];

  return (
    <section className={`mainContainer ${S.technologies}`}>
      <div className={S.wrapper}>
        <motion.h2
          {...showLeft}
          transition={{ ...transitionDefault, delay: 0.15 }}
        >
          Tecnologias.
        </motion.h2>

        <ul className={S.list}>
          {technologiesData.map((tech, idx) => (
            <li key={tech.id}>
              <motion.h3
                {...showLeft}
                transition={{
                  ...transitionDefault,
                  delay: idx > 4 ? 0.25 : idx * 0.12,
                }}
              >
                {tech.technology}
              </motion.h3>
              <div className={S.logo}>
                <Image
                  src={tech.img.src}
                  width={tech.img.width}
                  height={tech.img.height}
                  alt={tech.technology}
                  style={{
                    transform: `${tech.transform ? tech.transform : 'inital'}`,
                  }}
                />
              </div>
              <motion.span
                {...showRight}
                transition={{
                  ...transitionDefault,
                  delay: idx > 4 ? 0.25 : idx * 0.12,
                }}
              >
                {tech.time}
              </motion.span>
            </li>
          ))}
        </ul>
      </div>
      <span className={`redSphere ${S.sphereTech}`}></span>
    </section>
  );
};

export default Technologies;
