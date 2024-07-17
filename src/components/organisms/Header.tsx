'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/Header.module.scss';
import clsx from 'clsx';

import { Variants, motion, px } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';
import { Button } from '../atoms/Button';
import { colors } from '@/lib/constants';
import { useSwipeable } from 'react-swipeable';
import { usePathname, useRouter } from 'next/navigation';

import Logo from '../atoms/Logo';
import useCheckIsMobile from '@/hooks/useCheckIsMobile';
import useTargetInView from '@/hooks/useTargetInView';
import ButtonMenu from '../atoms/ButtonMenu';
import PlusIcon from '../../../public/icons/plus.svg';
import Link from 'next/link';
import { calcVwToPx } from '@/lib/helpers';
import { getHeader } from '@/lib/strapi/strapi-fetch';
import Image from 'next/image';
interface IHeaderData {
  attributes?: {
    data: {
      url: string;
      title: string;
    }[];
  };
}
interface HeaderProps {}
export default function Header({}: HeaderProps) {
  const [dataList, setDataList] = useState<IHeaderData[]>();

  const { light, dark, accent } = colors;

  const router = useRouter();
  const pathname = usePathname();
  const targetRef = useRef(null);
  const viewport = document.documentElement.clientWidth;

  const { isInView } = useTargetInView(targetRef);
  const { activeSection } = useContext(AppContext) as IAppContext;
  const { isTablet } = useCheckIsMobile();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const variantsHeader: Variants = {
    short: {
      height: isMenuOpen ? '100dvh' : '',
      transition: { duration: 0.4 },
    },
  };

  const variantsTopBlock = {
    short: {
      backgroundColor: isMenuOpen ? '#121212' : '#1212120',
      transition: { duration: 0.1 },
      height: 'vw(90)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: isTablet ? 20 : 10,
    },
    large: {
      height: 'vw(140)',
      display: 'flex',
      alignItems: 'flex-end',
      paddingTop: isTablet ? 20 : 10,
    },
  };

  const variantsMobileMenu: Variants = {
    short: {
      y: isMenuOpen ? '0%' : '-150%',
      transition: { duration: 0.4 },
    },
  };

  const variantsLogo: Variants = {
    short: {
      maxWidth: viewport > 1440 ? calcVwToPx(160) : 160,
    },
    large: {
      // maxWidth: viewport > 1440 ? 514 : 514,
      maxWidth: 514,
    },
  };

  const variantsButton: Variants = {
    short: {
      height: viewport > 1440 ? calcVwToPx(50) : 50,
      width: viewport > 1440 ? calcVwToPx(130) : 130,
    },
    large: {
      height: viewport > 1440 ? calcVwToPx(90) : 90,
      width: viewport > 1440 ? calcVwToPx(177) : 177,
    },
  };

  const variantsLink = (column: number): Variants => {
    return {
      short: {
        marginRight: viewport > 1440 ? calcVwToPx(24) : 24,
        gridColumn: column,
      },
      large: { gridColumn: 5 },
    };
  };
  const variantsNav: Variants = {
    short: {},
    large: {},
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const onToContactClick = () => {
    router.push('/contact');
    handleCloseMenu();
  };

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleCloseMenu(),
  });

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isTablet) {
      setIsMenuOpen(false);
    }
  }, [isTablet]);

  const calculateLogoColor = () => {
    if (pathname === '/') {
      if (
        isMenuOpen ||
        activeSection?.includes('reviews') ||
        activeSection?.includes('home-image')
      ) {
        return accent;
      }
    } else if (pathname === '/business') {
      if (activeSection?.includes('benefits')) {
        return accent;
      } else {
        return dark;
      }
    } else if (pathname === '/individuals') {
      if (activeSection?.includes('benefits')) {
        return accent;
      } else {
        return dark;
      }
    } else if (pathname === '/capitalism') {
      if (activeSection?.includes('blackcard')) {
        return accent;
      } else {
        return dark;
      }
    } else if (pathname === '/marketing') {
      if (
        activeSection?.includes('what') ||
        activeSection?.includes('webeginwith')
      ) {
        return accent;
      } else {
        return dark;
      }
    } else if (pathname === '/contact') {
      if (activeSection?.includes('contact')) {
        return dark;
      } else {
        return accent;
      }
    } else {
      return dark;
    }
  };

  const calculateLinksColor = () => {
    if (pathname === '/') {
      if (
        activeSection?.includes('reviews') ||
        activeSection?.includes('home-image')
      ) {
        return light;
      } else {
        return dark;
      }
    } else if (pathname === '/business') {
      if (activeSection?.includes('benefits')) {
        return light;
      } else {
        return dark;
      }
    } else if (pathname === '/individuals') {
      if (activeSection?.includes('benefits')) {
        return light;
      } else {
        return dark;
      }
    } else if (pathname === '/capitalism') {
      if (activeSection?.includes('blackcard')) {
        return light;
      } else {
        return dark;
      }
    } else if (pathname === '/marketing') {
      if (
        activeSection?.includes('what') ||
        activeSection?.includes('webeginwith')
      ) {
        return light;
      } else {
        return dark;
      }
    } else if (pathname === '/contact') {
      if (activeSection?.includes('contact')) {
        return dark;
      } else {
        return light;
      }
    } else {
      return dark;
    }
  };

  const calculateContactColor = () => {
    if (pathname === '/') {
      if (activeSection?.includes('reviews')) {
        return accent;
      } else {
        return 'transparent';
      }
    } else if (pathname === '/business') {
      if (activeSection?.includes('benefits')) {
        return accent;
      } else {
        return 'transparent';
      }
    } else if (pathname === '/individuals') {
      if (activeSection?.includes('benefits')) {
        return accent;
      } else {
        return 'transparent';
      }
    } else if (pathname === '/capitalism') {
      if (activeSection?.includes('blackcard')) {
        return accent;
      } else {
        return 'transparent';
      }
    } else if (pathname === '/marketing') {
      if (
        activeSection?.includes('what') ||
        activeSection?.includes('webeginwith')
      ) {
        return accent;
      } else {
        return 'transparent';
      }
    } else if (pathname === '/contact') {
      if (activeSection?.includes('contact')) {
        return 'transparent';
      } else {
        return accent;
      }
    } else {
      return 'transparent';
    }
  };

  const getData = async () => {
    try {
      const res = await getHeader();
      if (res) {
        setDataList(res.data as IHeaderData[]);
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

  const { data = [] } = attributes;
  return (
    <>
      <div ref={targetRef} />
      <motion.header
        className={styles.header}
        initial={'short'}
        animate={!isTablet && isInView ? 'large' : 'short'}
        variants={variantsHeader}
      >
        <motion.div
          className={styles.topBlock}
          variants={variantsTopBlock}
          style={isTablet ? { paddingBottom: '20px' } : {}}
        >
          <motion.div
            variants={variantsLogo}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={styles.logo}
          >
            <Logo
              fill={calculateLogoColor()}
              onClick={() => router.push('/')}
            />
          </motion.div>

          <motion.nav className={styles.nav} variants={variantsNav}>
            <motion.div
              variants={variantsLink(1)}
              transition={{
                duration: 0,
                delay: isInView ? 0.5 : 0.1,
              }}
            >
              <Link
                href={data[0].url}
                className={styles.link}
                style={{ color: calculateLinksColor() }}
              >
                <motion.span
                  animate={{ color: calculateLinksColor() }}
                  transition={{ duration: 0.5 }}
                >
                  {data[0].title}
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              variants={variantsLink(2)}
              transition={{ duration: 0, delay: isInView ? 0.4 : 0.2 }}
            >
              <Link
                href={data[1].url}
                className={styles.link}
                style={{ color: calculateLinksColor() }}
              >
                <motion.span
                  animate={{ color: calculateLinksColor() }}
                  transition={{ duration: 0.5 }}
                >
                  {data[1].title}
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              variants={variantsLink(3)}
              transition={{ duration: 0, delay: 0.3 }}
            >
              <Link
                href={data[2].url}
                className={styles.link}
                style={{ color: calculateLinksColor() }}
              >
                <motion.span
                  animate={{ color: calculateLinksColor() }}
                  transition={{ duration: 0.5 }}
                >
                  {data[2].title}
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              variants={variantsLink(4)}
              transition={{ duration: 0, delay: isInView ? 0.2 : 0.4 }}
            >
              <Link
                href={data[3].url}
                className={styles.link}
                style={{ color: calculateLinksColor() }}
              >
                <motion.span
                  animate={{ color: calculateLinksColor() }}
                  transition={{ duration: 0.5 }}
                >
                  {data[3].title}
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              variants={variantsLink(5)}
              transition={{ duration: 0, delay: isInView ? 0.1 : 0.5 }}
            >
              <Link
                href={data[4].url}
                className={styles.link}
                style={{ color: calculateLinksColor() }}
              >
                <motion.span
                  animate={{ color: calculateLinksColor() }}
                  transition={{ duration: 0.6 }}
                >
                  {data[4].title}
                </motion.span>
              </Link>
            </motion.div>
          </motion.nav>

          <motion.button
            className={clsx(styles.button, {
              // [styles.buttonLightAccent]:
              //   activeSection?.includes('reviews') ||
              //   activeSection?.includes('home-image') === true,
              // [styles.buttonDarkDark]: activeSection?.includes('getstarted'),
              [styles.buttonHidden]: pathname === '/contact',
            })}
            animate={{ backgroundColor: calculateContactColor() }}
            variants={variantsButton}
            transition={{ duration: 0.2 }}
            onClick={onToContactClick}
          >
            Contact
          </motion.button>

          {isTablet && (
            <ButtonMenu
              isOpen={isMenuOpen}
              setIsOpen={handleMenuOpen}
              color={calculateLogoColor() as string}
            />
          )}
        </motion.div>

        {/* mobile menu */}
        {isTablet && (
          <motion.div
            className={styles.mobileMenu}
            variants={variantsMobileMenu}
            {...swipeHandlers}
          >
            <div>
              <div className={styles.topPluses}>
                <Image
                  src="/icons/plus.svg"
                  width={100}
                  height={100}
                  alt={'plusIcon'}
                  className={styles.plusIcon}
                />
                <Image
                  src="/icons/plus.svg"
                  width={100}
                  height={100}
                  alt={'plusIcon'}
                  className={styles.plusIcon}
                />
              </div>

              <div className={styles.navMobileBox}>
                <h3 className={styles.navMobileTitle}>Menu</h3>
                <nav className={styles.navMobile}>
                  <Link
                    href="/"
                    className={styles.mobileLink}
                    onClick={handleCloseMenu}
                  >
                    Home
                  </Link>

                  <Link
                    href="/business"
                    className={styles.mobileLink}
                    onClick={handleCloseMenu}
                  >
                    For Business
                  </Link>

                  <Link
                    href="/individuals"
                    className={styles.mobileLink}
                    onClick={handleCloseMenu}
                  >
                    For Individuals
                  </Link>

                  <Link
                    href="/capitalism"
                    className={styles.mobileLink}
                    onClick={handleCloseMenu}
                  >
                    Capitalism 2.0
                  </Link>

                  <Link
                    href="/marketing"
                    className={styles.mobileLink}
                    onClick={handleCloseMenu}
                  >
                    Marketing Efforts
                  </Link>
                </nav>
              </div>
            </div>

            <div>
              <div className={styles.bottomPluses}>
                <Image
                  src="/icons/plus.svg"
                  width={100}
                  height={100}
                  alt={'plusIcon'}
                  className={styles.plusIcon}
                />
                <Image
                  src="/icons/plus.svg"
                  width={100}
                  height={100}
                  alt={'plusIcon'}
                  className={styles.plusIcon}
                />
              </div>

              <Button
                className={styles.buttonMobile}
                appearance="ghost"
                onClick={onToContactClick}
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
