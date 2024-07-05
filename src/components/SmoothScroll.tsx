'use client';
import { useTransform, motion, useScroll, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import "../styles/components/SmoothScroll.scss"

export default function SmoothScroll({
  children
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })
  const [contentHeight, setContentHeight] = useState(0);
  const y = useTransform(smoothProgress, value => {
    return value * -(contentHeight - window.innerHeight);
  });
  const contentRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }

  }, [contentRef]);

  return <>
    <div style={{ height: contentHeight }} />

    <motion.div
      className="scrollBody"
      style={{ y }}
      ref={contentRef}
    >
      {children}
    </motion.div>
  </>
}