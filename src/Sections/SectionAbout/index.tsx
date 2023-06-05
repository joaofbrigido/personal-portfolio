import { useEffect, useRef, useState } from 'react';
import S from './styles.module.scss';

const About = () => {
  const firstH3Ref: React.RefObject<HTMLHeadingElement> = useRef(null);
  const secondH3Ref: React.RefObject<HTMLHeadingElement> = useRef(null);
  const thirdH3Ref: React.RefObject<HTMLHeadingElement> = useRef(null);
  const fourthH3Ref: React.RefObject<HTMLHeadingElement> = useRef(null);

  function handleScroll() {
    const firstH3 = firstH3Ref.current;
    const secondH3 = secondH3Ref.current;
    const thirdH3 = thirdH3Ref.current;
    const fourthH3 = fourthH3Ref.current;

    if (firstH3 && secondH3 && thirdH3 && fourthH3) {
      const firstH3Top = firstH3.offsetTop;
      const firstH3Height = firstH3.offsetHeight;
      const secondH3Top = secondH3.offsetTop;
      const secondH3Height = secondH3.offsetHeight;
      const thirdH3Top = thirdH3.offsetTop;
      const thirdH3Height = thirdH3.offsetHeight;
      const fourthH3Top = fourthH3.offsetTop;
      const fourthH3Height = fourthH3.offsetHeight;
      const halfWindowHeight = window.innerHeight / 1.9;

      if (
        window.scrollY >= firstH3Top - halfWindowHeight &&
        window.scrollY < firstH3Top + firstH3Height - halfWindowHeight
      ) {
        firstH3.classList.add(S.active);
        secondH3.classList.remove(S.active);
        thirdH3.classList.remove(S.active);
        fourthH3.classList.remove(S.active);
      } else if (
        window.scrollY >= secondH3Top - halfWindowHeight &&
        window.scrollY < secondH3Top + secondH3Height - halfWindowHeight
      ) {
        firstH3.classList.remove(S.active);
        secondH3.classList.add(S.active);
        thirdH3.classList.remove(S.active);
        fourthH3.classList.remove(S.active);
      } else if (
        window.scrollY >= thirdH3Top - halfWindowHeight &&
        window.scrollY < thirdH3Top + thirdH3Height - halfWindowHeight
      ) {
        firstH3.classList.remove(S.active);
        secondH3.classList.remove(S.active);
        thirdH3.classList.add(S.active);
        fourthH3.classList.remove(S.active);
      } else if (
        window.scrollY >= fourthH3Top - halfWindowHeight &&
        window.scrollY < fourthH3Top + fourthH3Height - halfWindowHeight
      ) {
        firstH3.classList.remove(S.active);
        secondH3.classList.remove(S.active);
        thirdH3.classList.remove(S.active);
        fourthH3.classList.add(S.active);
      } else {
        firstH3.classList.remove(S.active);
        secondH3.classList.remove(S.active);
        thirdH3.classList.remove(S.active);
        fourthH3.classList.remove(S.active);
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${S.about}`} id='about'>
      <div className={`${S.wrapper} mainContainer`}>
        <h3 ref={firstH3Ref} className={S.active}>
          Me interesso muito por tecnologias e adoro resolver problemas
        </h3>
        <h3 ref={secondH3Ref}>
          Formado em Ciências da Computação, pela Unisagrado - Bauru (SP) em
          2021.
        </h3>
        <h3 ref={thirdH3Ref}>
          Focado em Desenvolvimento Web: Front-end, com um grande interesse em
          UI/UX Design.
        </h3>
        <h3 ref={fourthH3Ref}>
          Tenho experiência em projetos utilizando HTML5, CSS3, Javascript,
          React/NextJS, AdobeXD e Figma.
        </h3>
      </div>
    </section>
  );
};

export default About;
