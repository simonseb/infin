import React from 'react';
import styles from '../../styles/components/Footer.module.scss';

import ThinksebIcon from '../../../public/icons/thinkseb.svg';
import AnimatedText from '../molecules/AnimatedText';
import Logo from '../atoms/Logo';
import Link from 'next/link';
interface FooterProps {}
export default function Footer({}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBlock}>
        <AnimatedText
          className={styles.text}
          el="p"
          text="Take part in the evolution of Human Capital."
          once
        />

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <h4 className={styles.title}>Pages</h4>

            <Link href="/">Home</Link>
            <Link href="/business">For Businesses</Link>
            <Link href="/individuals">For Individuals</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/marketing">Marketing&nbsp;Efforts</Link>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Business page</h4>

            <a href="">Benefits</a>
            <a href="">Performance</a>
            <a href="">Data</a>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>For Individuals</h4>

            <a href="">Label link 1</a>
            <a href="">Label link 2</a>
            <a href="">Label link 3</a>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Contact</h4>

            <Link
              href="tel:4212730427"
              target="_blank"
              rel="noopener noreferrer"
            >
              421-273-0427
            </Link>
            <Link
              href="mailto:info@theinfin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@theinfin.com
            </Link>
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Social Media</h4>

            <a href="">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">X</a>
          </li>
        </ul>
      </div>

      <Link
        href="https://www.linkedin.com/company/thinkseb"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.thinkseb}
      >
        <ThinksebIcon />
        <div className={styles.copyright}>
          <span className={styles.copyrightAccent}>© 2024 • Curated by </span>
          ThinkSeb
        </div>
      </Link>

      <Logo className={styles.logo} />
    </footer>
  );
}
