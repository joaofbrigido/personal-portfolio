import Link from 'next/link';
import Menu from '../Menu';
import S from './styles.module.scss';

const Header = () => {
  return (
    <header className="mainContainer">
      <div className={S.wrapper}>
        <Link href="/">
          <span className={S.logo}>JFAB</span>
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
