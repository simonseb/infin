import styles from '../../styles/components/organisms/Business/BusinessPage.module.scss';

import LargeHero from '@/components/organisms/LargeHero';
import BottomComponent from '@/components/BottomComponent';
import Benefits from '@/components/organisms/BusinessComponents/Benefits';
import Discover from '@/components/organisms/BusinessComponents/Discover';
import DiscoverImage from '@/components/organisms/BusinessComponents/DiscoverImage';
import Directing from '@/components/organisms/BusinessComponents/Directing';

interface BusinessPageProps {}

export default async function BusinessPage({}: BusinessPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topBlock}>
          <LargeHero
            text="The INFIN is a finance tool, yet helps with both the bottom line
              and your People Ops. Imagine how much you could improve your
              business if you:"
            titleFirstRow="Learn the ROI"
            titleSecondRow="of each employee"
            bottomTextAccent="It’s an open secret of any workplace:"
            bottomTextFirst="the team knows who is carrying the team, carrying their weight, and
              being carried.. The INFIN lets employees continuously and dynamically
              observe and rank each other based on job performance and personal
              interaction. And it gets better."
            bottomTextSecond="The algorithm behind The INFIN automatically adjusts the weight of each
              employee’s “vote” based on how others rank them. As a result, you get an
              accurate picture of which employees are driving your success and of the
              strengths and weaknesses of each employee."
            imageSrc="/images/Business/hero.jpg"
            imageMobileSrc="/images/Business/hero-mobile.png"
            imageAlt="girl is doing presentation"
          />
          <Benefits />
        </div>

        <div className={styles.bottomBlock}>
          <Discover />
          <DiscoverImage />
          <Directing />
        </div>
      </main>

      <BottomComponent />
    </div>
  );
}
