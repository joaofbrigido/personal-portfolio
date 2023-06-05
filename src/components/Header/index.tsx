'use-client';
import { useEffect, useLayoutEffect, useState } from 'react';
import Link from 'next/link';
import BtnMenu from '../BtnMenu';
import {
  showDown,
  showLeft,
  showOpacity,
  showUpLow,
  transitionDefault,
} from '@/util/animationProps';
import { motion } from 'framer-motion';
import { Link as LinkScroll } from 'react-scroll';
import S from './styles.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [positionSphere, setPositionSphere] = useState({ x: 0, y: 0 });

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useLayoutEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPositionSphere({
        x: event.clientX + window.pageXOffset,
        y: event.clientY + window.pageYOffset,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isMenuOpen) body?.classList.add('scrollHidden');
    else body?.classList.remove('scrollHidden');
  }, [isMenuOpen]);

  return (
    <>
      <span
        className={`${S.sphere} ${isMenuOpen ? `${S.active}` : ''}`}
        style={{ top: positionSphere.y, left: positionSphere.x }}
      />
      <header className={S.header}>
        <motion.div
          className={`mainContainer ${S.wrapper}`}
          {...showDown}
          transition={{
            duration: 0.3,
            delay: 1,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          <Link href="/">
            <span className={S.logo}>JFAB</span>
          </Link>
          <BtnMenu openMenu={openMenu} />
        </motion.div>
      </header>

      {isMenuOpen && (
        <motion.section
          className={S.menu}
          {...showOpacity}
          transition={{ ...transitionDefault }}
        >
          <motion.span
            {...showLeft}
            transition={{ ...transitionDefault, delay: 0.25 }}
          >
            MENU
          </motion.span>

          <nav>
            <ul className={S.menuList}>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 0.4 }}
              >
                <LinkScroll
                  to="hero"
                  smooth={true}
                  duration={700}
                  onClick={closeMenu}
                >
                  Home
                </LinkScroll>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 0.55 }}
              >
                <LinkScroll
                  to="technologies"
                  smooth={true}
                  offset={90}
                  duration={700}
                  onClick={closeMenu}
                >
                  Tecnologias
                </LinkScroll>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 0.7 }}
                onClick={closeMenu}
              >
                <LinkScroll
                  to="projects"
                  smooth={true}
                  offset={0}
                  duration={700}
                  onClick={closeMenu}
                >
                  Projetos
                </LinkScroll>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 0.85 }}
                onClick={closeMenu}
              >
                <LinkScroll
                  to="about"
                  smooth={true}
                  offset={-200}
                  duration={700}
                  onClick={closeMenu}
                >
                  Sobre
                </LinkScroll>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 1 }}
                onClick={closeMenu}
              >
                <LinkScroll
                  to="contact"
                  smooth={true}
                  offset={90}
                  duration={700}
                  onClick={closeMenu}
                >
                  Contato
                </LinkScroll>
              </motion.li>
            </ul>
          </nav>

          <button className={S.btnClose} onClick={closeMenu}>
            Fechar X
          </button>
        </motion.section>
      )}
    </>
  );
};

export default Header;
