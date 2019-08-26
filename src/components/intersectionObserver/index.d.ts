export interface LocationObserverPropsInterface {
  margin?: string;
  threshold?: number;
  children?: React.ReactNode | React.ReactNode[];
  root?: HTMLElement;
  style?: any;
  continueObserving?: boolean;
  onIntersection?: (entries: IntersectionEntry[]) => void;
}

export interface LocationObserverStateInterface {
  hasIntersected: boolean;
}

export interface LocationObserverOptions {
  root: HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

type rect = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
};

export interface IntersectionEntry {
  boundingClientRect: rect;
  intersectionRatio: number;
  intersectionRect: rect;
  isIntersecting: boolean;
  rootBounds: rect;
  target: HTMLElement;
  time: number;
}
