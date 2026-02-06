import React, { useEffect, useRef, useState } from 'react';

interface TactileViewProps {
  children: React.ReactNode;
  tag?: React.ElementType;
  className?: string;
  delay?: number;
}

const TactileView: React.FC<TactileViewProps> = ({
  children,
  tag: Tag = 'div',
  className = '',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    const currentElement = elementRef.current;
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={elementRef as any}
      className={`${className} ${isVisible ? 'animate-tactile-entrance' : hasAnimated ? 'animate-tactile-exit' : 'opacity-0'} hover:scale-105 hover:shadow-2xl hover:bg-db1 transition-all duration-300 ease-out cursor-pointer`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
};

export default TactileView;
