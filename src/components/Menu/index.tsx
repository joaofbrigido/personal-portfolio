import S from './styles.module.scss';

const Menu = () => {
  return (
    <button className={S.menu}>
      Menu
      <span className={S.menuIcon}></span>
    </button>
  );
};

export default Menu;
