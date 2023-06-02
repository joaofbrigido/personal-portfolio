import Image from 'next/image';
import S from './styles.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { showUpLow, transitionDefault, zoom } from '@/util/animationProps';

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
          <motion.li {...showUpLow} transition={{ transitionDefault }}>
            <Link href="#" target="_blank">
              <Image
                src="/icons/whatsapp-icon.svg"
                width={48}
                height={48}
                alt="Whatsapp"
              />
              <span>(14) 99683-0102</span>
            </Link>
          </motion.li>
          <motion.li
            {...showUpLow}
            transition={{ ...transitionDefault, delay: 0.2 }}
          >
            <Link href="#" target="_blank">
              <Image
                src="/icons/email-icon.svg"
                width={48}
                height={39}
                alt="Email"
              />
              <span>joaofbrigido@hotmail.com</span>
            </Link>
          </motion.li>
          <motion.li
            {...showUpLow}
            transition={{ ...transitionDefault, delay: 0.4 }}
          >
            <Link href="#" target="_blank">
              <Image
                src="/icons/github-icon.svg"
                width={48}
                height={48}
                alt="Github"
              />
              <span>Github</span>
            </Link>
          </motion.li>
          <motion.li
            {...showUpLow}
            transition={{ ...transitionDefault, delay: 0.6 }}
          >
            <Link href="#" target="_blank">
              <Image
                src="/icons/linkedin-icon.svg"
                width={48}
                height={48}
                alt="Linkedin"
              />
              <span>Linkedin</span>
            </Link>
          </motion.li>
        </ul>
        <motion.div
          {...zoom}
          transition={{ ...transitionDefault, delay: 0.75 }}
        >
          <Image
            src="/contact-mockup.png"
            width={432}
            height={414}
            alt="Ilustração de uma estátua grega"
          />
        </motion.div>
      </div>
      <span className={`redSphere ${S.sphereHero}`}></span>
    </section>
  );
};

export default Contact;
