import { useState, useEffect, useRef } from 'react';
import box from '../../assets/Images/box.svg';

const BoxAnimation = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [entryDirection, setEntryDirection] = useState<
    'fromTop' | 'fromBottom'
  >('fromBottom');
  const boxRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check direction: if top is negative, it came from top (scrolling up)
            setEntryDirection(
              entry.boundingClientRect.top < 0 ? 'fromTop' : 'fromBottom'
            );
            setIsBoxVisible(true);
            setHasAnimated(true);
          } else {
            setIsBoxVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (isBoxVisible) {
      return entryDirection === 'fromTop' ? 'riseBoxFadeIn' : 'dropBoxFadeIn';
    }
    if (hasAnimated) return 'dropBoxFadeOut';
    return 'opacity-0';
  };

  return (
    <img
      ref={boxRef}
      src={box}
      alt="Animated box"
      className={`h-20 w-20 ${getAnimationClass()}`}
    />
  );
};

export default BoxAnimation;
