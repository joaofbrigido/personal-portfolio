import S from './styles.module.scss';

const BtnMenu = () => {
  return (
    <>
      <button className={S.menu}>
        Menu
        <span className={S.menuIcon}></span>
      </button>
    </>
  );
};

export default BtnMenu;
