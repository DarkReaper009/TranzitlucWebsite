import React, { useEffect, useRef, useState } from 'react';

interface KineticTextProps {
  children: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';
  className?: string;
  duration?: number;
  stagger?: number;
}

const KineticText: React.FC<KineticTextProps> = ({
  children,
  tag: Tag = 'p',
  className = '',
  duration = 0.5,
  stagger = 0.02,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const words = children.split(' ');

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
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
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
      className={`${className} flex flex-wrap content-start`}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block whitespace-pre mr-[0.25em] opacity-0 ${isVisible ? 'animate-slide-up-fade' : hasAnimated ? 'animate-slide-down-fade-out' : ''}`}
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${index * stagger}s`,
            animationFillMode: 'forwards',
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
};

export default KineticText;
