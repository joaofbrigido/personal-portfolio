import Image from 'next/image';
import S from './styles.module.scss';

const Technologies = () => {
  return (
    <section className={`mainContainer ${S.technologies}`}>
      <div className={S.wrapper}>
        <h2>Tecnologias.</h2>

        <ul className={S.list}>
          <li>
            <h3>Html/Css</h3>
            <div className={S.logo}>
              <Image
                src="/technologies/logo-html-css.svg"
                width={90}
                height={70}
                alt="Html/Css"
              />
            </div>
            <span>3 anos</span>
          </li>
          <li>
            <h3>Javascript</h3>
            <div className={S.logo}>
              <Image
                src="/technologies/logo-js.svg"
                width={80}
                height={80}
                alt="Html/Css"
                style={{ transform: 'rotate(-10deg)' }}
              />
            </div>
            <span>3 anos</span>
          </li>
          <li>
            <h3>Figma</h3>
            <div className={S.logo}>
              <Image
                src="/technologies/logo-figma.svg"
                width={80}
                height={80}
                alt="Html/Css"
                style={{ transform: 'rotate(-10deg)' }}
              />
            </div>
            <span>3 anos</span>
          </li>
          <li>
            <h3>ReactJs</h3>
            <div className={S.logo}>
              <Image
                src="/technologies/logo-reactjs.svg"
                width={80}
                height={80}
                alt="Html/Css"
              />
            </div>
            <span>2 anos</span>
          </li>
          <li>
            <h3>NextJS</h3>
            <div className={S.logo}>
              <Image
                src="/technologies/logo-nextjs.svg"
                width={80}
                height={80}
                alt="Html/Css"
              />
            </div>
            <span>1 ano e meio</span>
          </li>
          <li>
            <h3>SQL</h3>
            <div className={S.logo}>
              <Image
                src="/technologies/logo-sql.svg"
                width={80}
                height={80}
                alt="Html/Css"
                style={{ transform: 'rotate(-10deg)' }}
              />
            </div>
            <span>1 ano</span>
          </li>
          <li>
            <h3>GraphQL</h3>
            <div className={S.logo}>
              <Image
                src="/technologies/logo-graphql.svg"
                width={80}
                height={80}
                alt="Html/Css"
                style={{ transform: 'rotate(-10deg)' }}
              />
            </div>
            <span>1 ano</span>
          </li>
        </ul>
      </div>
      <span className={`redSphere ${S.sphereTech}`}></span>
    </section>
  );
};

export default Technologies;
