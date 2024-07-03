import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

// hook for detecting is element in viewport or not

const useTargetInView = (ref: React.MutableRefObject<null>) => {
  const [isInView, setIsInView] = useState<boolean>(false);

  const inView = useInView(ref);

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return { isInView };
};

export default useTargetInView;
