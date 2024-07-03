import { useEffect, useState } from 'react';

// hook for detecting element size on resizing window

export const useRefDimensions = (ref: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (ref.current) {
      const boundingRect = ref.current.getBoundingClientRect();
      const { width, height } = boundingRect;
      const topPosition = ref.current.offsetTop;

      setDimensions({
        width: Math.round(width),
        height: Math.round(height),
      });
    }
  }, [ref]);
  return dimensions;
};
