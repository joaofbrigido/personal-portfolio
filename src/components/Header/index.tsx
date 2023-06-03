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
                <Link href="#">Home</Link>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 0.55 }}
              >
                <Link href="#">Tecnologias</Link>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 0.7 }}
              >
                <Link href="#">Projetos</Link>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 0.85 }}
              >
                <Link href="#">Sobre</Link>
              </motion.li>
              <motion.li
                {...showUpLow}
                transition={{ ...transitionDefault, delay: 1 }}
              >
                <Link href="#">Contato</Link>
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
