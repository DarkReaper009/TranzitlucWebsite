import type React from 'react';
// import truck from '../assets/Images/blue_truck.svg';

type SectionProps = {
  className?: string;
  id?: string;
  crosses?: string;
  crossesOffset?: string;
  customPaddings?: string;
  customScroll?: string;
  children: React.ReactNode;
};

const Section = ({
  className,
  id,
  crosses,
  // crossesOffset,
  customScroll,
  customPaddings,
  children,
}: SectionProps) => {
  return (
    <div
      id={id}
      className={` relative ${customPaddings || 'py:10 lg:py-[5rem] xl:py-[6.9rem]'} ${crosses ? 'lg:py-32 xl:py-40' : ''} ${className || ''} ${customScroll || 'scroll-mt-24'}`}
    >
      {children}
    </div>
  );
};

export default Section;
