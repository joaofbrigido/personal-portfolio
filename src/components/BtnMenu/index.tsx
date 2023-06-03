import S from './styles.module.scss';

const BtnMenu = ({ openMenu }: any) => {
  return (
    <>
      <button className={S.menu} onClick={openMenu}>
        Menu
        <span className={S.menuIcon}></span>
      </button>
    </>
  );
};

export default BtnMenu;
