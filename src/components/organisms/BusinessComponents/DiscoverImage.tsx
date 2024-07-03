'use client';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from '../../../styles/components/organisms/Business/DiscoverImage.module.scss';

import PlayButton from '@/components/molecules/PlayButton';
import Image from 'next/image';
import clsx from 'clsx';
import Modal from '@/components/atoms/Modal';

interface DiscoverImageProps {}

export default function DiscoverImage({}: DiscoverImageProps) {
  const [modalActive, setModalActive] = useState(false);
  let videosrc = '/videos/business-video.mp4';

  useEffect(() => {
    modalActive
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'scroll');
  }, [modalActive]);

  return (
    <div className={styles.discoverImage}>
      <Image
        className={clsx(styles.image, styles.imageDesc)}
        src="/images/Business/discover.png"
        alt="dashboard example"
        width={1416}
        height={760}
      />
      <Image
        className={clsx(styles.image, styles.imageMob)}
        src="/images/Business/discover-mobile.jpg"
        alt="dashboard example"
        width={355}
        height={638}
      />

      <PlayButton
        className={styles.playButton}
        onClick={() => setModalActive(true)}
      />

      <Modal active={modalActive} setActive={setModalActive}>
        <ReactPlayer
          className={styles.player}
          width="100%"
          height="auto"
          url={videosrc}
          controls={true}
        />
      </Modal>
    </div>
  );
}
