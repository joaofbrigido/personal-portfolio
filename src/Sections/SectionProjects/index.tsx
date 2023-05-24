import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const [currentItem, setCurrentItem] = useState<CarouselProps>(
    carouselData[0]
  );

  function activeItem(item: CarouselProps) {
    setCurrentItem(item);
  }

  return (
    <div className={S.projectContainer}>
      <section id="Projects" className={`mainContainer ${S.projects}`}>
        <div className={S.wrapper}>
          <h2>Projetos.</h2>

          <ul className={S.projectList}>
            {projects.map((item) => (
              <li key={item.id + '-carouselItem'}>
                <span
                  className={`${S.number} ${
                    currentItem === item ? S.active : ''
                  }`}
                >
                  {item.position}
                </span>
                <div className={S.content}>
                  <section
                    className={`${S.left} ${
                      currentItem === item ? S.active : ''
                    }`}
                  >
                    <h3 className={`${currentItem === item ? S.active : ''}`}>
                      {item.title}
                    </h3>
                    <p className={`${currentItem === item ? S.active : ''}`}>
                      {item.description}
                    </p>
                    <div
                      className={`${S.linksWrapp} ${
                        currentItem === item ? S.active : ''
                      }`}
                    >
                      <Link href={item.linkProject} target="_blank">
                        Ver Projeto
                      </Link>
                      <Link href={item.linkGithub} target="_blank">
                        Ver No Github
                      </Link>
                    </div>
                  </section>

                  <div
                    className={`${S.image} ${
                      currentItem === item ? S.active : ''
                    } ${item.id < currentItem.id ? S.pass : ''}`}
                  >
                    <Image
                      src={item.img}
                      width={580}
                      height={420}
                      alt={item.title}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={S.btnsWrapp}>
            {projects.map((item) => (
              <button
                key={item.id + '-btnCarousel'}
                className={currentItem === item ? S.active : ''}
                onClick={() => activeItem(item)}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
