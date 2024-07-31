'use client';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/components/organisms/Privacy/PrivacyPolicy.module.scss';
import BottomComponent from '@/components/BottomComponent';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.body}>
            <div className={styles.title}>
              <h1 className={styles.titleContent}>Privacy Policy</h1>
              <h1 className={styles.updatedData}>Last updated: 27/06/2024</h1>
            </div>
            <div className={styles.content}>
              <div className={styles.privacyContent}>
                <h1 className={styles.explain}>
                  Information We Collect
                  <br />
                  <br />
                  Personal Information: Includes name, email address, phone
                  number, and other information you provide voluntarily. Usage
                  Information: Includes data about how you use our website and
                  services, such as browsing history, IP address, device
                  information, and cookies.
                  <br />
                  <br />
                  <br />
                  How We Use Your Information
                  <br />
                  <br />
                  Personalization: To customize your experience and provide
                  personalized content. Communication: To communicate with you
                  about our products, services, and promotions. Improvement: To
                  analyze usage data and improve our website and services. Legal
                  Compliance: To comply with legal obligations and respond to
                  legal requests.
                  <br />
                  <br />
                  <br />
                  Data Security We implement security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, or destruction. However, no method of transmission
                  over the internet or electronic storage is 100% secure. We
                  cannot guarantee absolute security.
                  <br />
                  <br />
                  <br />
                  Cookies and Tracking Technologies
                  <br />
                  <br />
                  We use cookies and similar tracking technologies to enhance
                  your experience and collect information about how you use our
                  website. You can control cookies through your browser settings
                  and opt-out of certain tracking technologies.
                  <br />
                  <br />
                  <br />
                  Third-Party Links and Services Our website may contain links
                  to third-party websites or services not operated by us. We are
                  not responsible for the privacy practices or content of these
                  third parties. Please review their privacy policies.
                  Children&apos;s Privacy Our website and services are not directed
                  at individuals under the age of 18. We do not knowingly
                  collect personal information from children. If you are a
                  parent or guardian and believe your child has provided us with
                  personal information, please contact us. Your Choices You can
                  choose not to provide certain personal information, but it may
                  limit your ability to use certain features of our website and
                  services. You can update or delete your personal information
                  by contacting us. Changes to This Policy We may update this
                  Privacy Policy from time to time. Any changes will be posted
                  on this page with an updated effective date. We encourage you
                  to review this Privacy Policy periodically. Contact Us If you
                  have any questions, concerns, or requests regarding this
                  Privacy Policy or your personal information, please contact us
                  at info@stride.com
                </h1>
              </div>
            </div>
          </div>
        </main>

        <BottomComponent />
      </div>
    </motion.div>
  );
}
