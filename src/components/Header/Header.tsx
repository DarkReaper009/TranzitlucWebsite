import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/Images/main_logo.svg';
import { navigation } from '../../constants/index';
import { HamburgerMenu } from './HamburgerMenu';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
// import {disablePageScroll, enablePage} from 'scroll-lock'
import MenuSvg from './MenuSvg';

const Header = () => {
  const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    setOpenNavigation(false);
  };
  console.log(openNavigation);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[#121D50]/90 xl:bg-[#121D50]/90 xl:backdrop-blur-sm w-full mx-auto h-24 text-white flex flex-row ${openNavigation ? 'bg-db1' : 'bg-db1/90 backdrop-blur-sm'} `}
      //   style={{ position: '', w idth: '100%' }}
    >
      <div className="flex items-center px-[2rem] sm:px-[6rem] lg:px-[9rem] w-full">
        <div className="logo-container flex items-center h-[100%] w-auto mr-auto">
          <img src={logo} alt="error showing picture" className="h-24 w-2xs" />
        </div>
        <nav
          className={`${openNavigation ? 'flex items-center justify-center pb-30' : 'hidden'} fixed top-[6rem] bg-db1 left-0 right-0 bottom-0 w-[100%] h-[100%] lg:flex lg:static lg:justify-end lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center lg:justify-end lg:flex-row lg:items-center w-[40rem] h-[100%]">
            {navigation.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  className={`inline-flex relative text-h5 tracking-h1 font-grotesc uppercase whitespace-nowrap text-white transition-colors  ${item.onlyMobile ? 'lg:hidden' : ''} px-3 py-6 md:py-8 lg:-mr-0.25 lg:text-sh2 lg:font-semibold  ${item.url === pathname.hash ? 'z-2 lg:text-white' : 'lg:text-white/50'} lg:leading-5 hover:text-org`}
                  onClick={handleClick}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
          <HamburgerMenu />
        </nav>
        <button
          className={`flex ml-auto lg:hidden`}
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};
// to do de realizate headerul aplicatiei

export default Header;
