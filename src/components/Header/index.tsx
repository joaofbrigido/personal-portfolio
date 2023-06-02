import Link from 'next/link';
import BtnMenu from '../BtnMenu';
import { showDown } from '@/util/animationProps';
import { motion } from 'framer-motion';
import S from './styles.module.scss';

const Header = () => {
  return (
    <header className="">
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
        <BtnMenu />
      </motion.div>
    </header>
  );
};

export default Header;
