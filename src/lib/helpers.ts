export const calcVwToPx = (value: number): number => {
  const vwSize = (value * 100) / 1440; // size in vw;
  return (document.documentElement.clientWidth / 100) * vwSize; // output size in px
};
