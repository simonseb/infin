export interface IReview {
  review: string;
  imageSrc: string;
  name: string;
  job: string;
}

export type TypeCursorVisibility = 'block' | 'none';

export interface CardProps {
  className?: string;
}

export type TypeActiveSection =
  | 'business'
  | 'individuals'
  | 'reviews'
  | 'getstarted'
  | 'undefined'
  | 'home-image'
  | 'discover-image'
  | 'capitalism-image'
  | 'benefits'
  | 'blackcard'
  | 'what'
  | 'webeginwith'
  | 'contact';
