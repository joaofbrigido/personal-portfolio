import Image from 'next/image';
import S from './styles.module.scss';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className={S.contact}>
      <div className={S.textWrap}>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
        <h4>ENTRE</h4>
      </div>

      <div className={`${S.textWrap} ${S.border}`}>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
        <h4>EM</h4>
      </div>

      <div className={S.textWrap}>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
        <h4>CONTATO</h4>
      </div>

      <div className={`${S.wrapper} mainContainer`}>
        <ul className={S.links}>
          <li>
            <Link href="#" target="_blank">
              <Image
                src="/icons/whatsapp-icon.svg"
                width={48}
                height={48}
                alt="Whatsapp"
              />
              <span>(14) 999683-0102</span>
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <Image
                src="/icons/email-icon.svg"
                width={48}
                height={39}
                alt="Email"
              />
              <span>joaofbrigido@hotmail.com</span>
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <Image
                src="/icons/github-icon.svg"
                width={48}
                height={48}
                alt="Github"
              />
              <span>Github</span>
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
              <Image
                src="/icons/linkedin-icon.svg"
                width={48}
                height={48}
                alt="Linkedin"
              />
              <span>Linkedin</span>
            </Link>
          </li>
        </ul>
        <Image
          src="/contact-mockup.png"
          width={432}
          height={414}
          alt="Ilustração de uma estátua grega"
        />
      </div>
      <span className={`redSphere ${S.sphereHero}`}></span>
    </section>
  );
};

export default Contact;
