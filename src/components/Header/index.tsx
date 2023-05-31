import Link from 'next/link';
import Menu from '../Menu';
import { showDown } from '@/util/animationProps';
import { motion } from 'framer-motion';
import S from './styles.module.scss';

const Header = () => {
  return (
    <header className="mainContainer">
      <motion.div
        className={S.wrapper}
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
        <Menu />
      </motion.div>
    </header>
  );
};

export default Header;
