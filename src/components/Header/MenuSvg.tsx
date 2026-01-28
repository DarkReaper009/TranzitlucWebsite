type MenuSvgProps = {
  openNavigation: boolean;
};

const MenuSvg = ({ openNavigation }: MenuSvgProps) => {
  return (
    <svg
      className="overflow-visible"
      width="24"
      height="16"
      viewBox="0 0 24 16"
    >
      {/* Top bar */}
      <rect
        className="transition-all origin-center"
        y={openNavigation ? '7' : '0'}
        width="24"
        height="2"
        rx="1.5"
        fill="white"
        transform={`rotate(${openNavigation ? '45' : '0'})`}
      />

      {/* Middle bar */}
      <rect
        className={`transition-all origin-center ${
          openNavigation ? 'opacity-0' : 'opacity-100'
        }`}
        y="7"
        width="24"
        height="2"
        radius=""
        rx="1.5"
        fill="white"
      />

      {/* Bottom bar */}
      <rect
        className="transition-all origin-center"
        y={openNavigation ? '7' : '14'}
        width="24"
        height="2"
        rx="1.5"
        fill="white"
        transform={`rotate(${openNavigation ? '-45' : '0'})`}
      />
    </svg>
  );
};

export default MenuSvg;
