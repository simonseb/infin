'use client';

import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/Footer.module.scss';
import Image from 'next/image';
import AnimatedText from '../molecules/AnimatedText';
import Logo from '../atoms/Logo';
import Link from 'next/link';
import Gsap from '../Gsap';
import { getFooter } from '@/lib/strapi/strapi-fetch';

interface IFooterData {
  attributes?: {
    Pages: {
      url: string;
      title: string;
    }[];
    business: {
      url: string;
      title: string;
    }[];
    contact: {
      url: string;
      title: string;
    }[];
    individuals: {
      url: string;
      title: string;
    }[];

    social: {
      url: string;
      title: string;
    }[];
  };
}
interface FooterProps {}

export default function Footer({}: FooterProps) {
  const [dataList, setDataList] = useState<IFooterData[]>();

  const getData = async () => {
    try {
      const res = await getFooter();
      if (res) {
        setDataList(res.data as IFooterData[]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!dataList) {
    return null;
  }
  const { attributes } = dataList[0];

  if (!attributes) {
    return null;
  }

  const {
    Pages = [],
    business = [],
    contact = [],
    individuals = [],
    social = [],
  } = attributes;

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
            {Pages.map((item, index) => (
              <Link href={`${item.url}`} key={index}>
                {item.title}
              </Link>
            ))}
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Business page</h4>
            {business.map((item, index) => (
              // <a
              //   // href={item.url}
              //   key={index}
              //   onClick={() => Gsap.prototype.scrollToSection(item.url)}
              // >
              //   {item.title}
              // </a>

              <Link
                key={index}
                href={`/business/#${item.url}`}
                scroll={false}
                onClick={() => {
                  if (location.pathname === '/business') {
                    // location.hash = `#${item.url}`;
                    Gsap.prototype.scrollToSection(item.url);
                  }
                }}
              >
                {item.title}
              </Link>
            ))}
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>For Individuals</h4>

            {individuals.map((item, index) => (
              <Link
                key={index}
                href={`/individuals/#${item.url}`}
                scroll={false}
                onClick={() => {
                  if (location.pathname === '/individuals') {
                    // location.hash = `#${item.url}`;
                    Gsap.prototype.scrollToSection(item.url);
                  }
                }}
              >
                {item.title}
              </Link>
            ))}
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Contact</h4>

            {contact.map((item, index) => (
              <Link href={`${item.url}`} key={index}>
                {item.title}
              </Link>
            ))}
          </li>

          <li className={styles.listItem}>
            <h4 className={styles.title}>Social Media</h4>
            {social.map((item, index) => (
              <a href={item.url} key={index}>
                {item.title}
              </a>
            ))}
          </li>
        </ul>
      </div>

      <Link
        href="https://www.linkedin.com/company/thinkseb"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.thinkseb}
      >
        <Image src="/icons/thinkseb.svg" alt="ddd" width={18} height={22} />
        <div className={styles.copyright}>
          <span className={styles.copyrightAccent}>© 2024 • Curated by </span>
          ThinkSeb
        </div>
      </Link>

      <Logo className={styles.logo} />
    </footer>
  );
}
