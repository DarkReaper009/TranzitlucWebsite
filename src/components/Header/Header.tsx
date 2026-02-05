import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../../assets/Images/main_logo.svg';
import { navigation } from '../../constants/index';
import { HamburgerMenu } from './HamburgerMenu';
import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import MenuSvg from './MenuSvg';

const Header = () => {
  const location = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // Center the detection zone to avoid early triggers on scroll up
      threshold: 0,
    });

    navigation.forEach((item) => {
      // Remove '#' from url to get id
      const id = item.url.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Sync active state with URL hash on load
  useEffect(() => {
    if (location.hash) {
      setActiveId(location.hash.replace('#', ''));
    }
  }, [location.hash]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleNavClick = (url: string) => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    }

    const id = url.replace('#', '');
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[#121D50]/90 xl:bg-[#121D50]/90 xl:backdrop-blur-sm w-[100vw]  mx-auto h-24 text-white flex flex-row ${openNavigation ? 'bg-db1' : 'bg-db1/90 backdrop-blur-sm'} `}
    >
      <div className="flex items-center px-[2rem] sm:px-[6rem] lg:px-[9rem] w-screen">
        <Link
          to="#home"
          className="logo-container flex items-center h-[100%] w-[50%]"
          onClick={() => handleNavClick('#home')}
        >
          <img src={logo} alt="Tranzitluc Logo" className="h-24 w-2xs" />
        </Link>
        <nav
          className={`${openNavigation ? 'flex items-center justify-center pb-30' : 'hidden'} fixed top-[6rem] bg-db1 left-0 right-0 bottom-0 w-[100%] h-[100%] display xl:flex xl:static xl:justify-end xl:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center xl:justify-end xl:flex-row xl:items-center w-[40rem] h-[100%]">
            {navigation.map((item) => {
              const isActive = activeId === item.url.replace('#', '');
              return (
                <Link
                  key={item.id}
                  to={item.url}
                  className={`inline-flex relative text-h5 tracking-h1 font-grotesc uppercase whitespace-nowrap text-white transition-colors  ${item.onlyMobile ? 'lg:hidden' : ''} px-3 py-6 md:py-8 xl:-mr-0.25 xl:text-sh2 xl:font-semibold  ${isActive ? 'z-2 xl:text-white' : 'xl:text-white/50'} xl:leading-5 hover:text-org after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-5 after:left-0 after:bg-org after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
                  onClick={() => handleNavClick(item.url)}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <HamburgerMenu />
        </nav>
        <button
          className={`${openNavigation ? 'display' : 'flex'} ml-auto xl:hidden`}
          onClick={toggleNavigation}
          aria-label="Toggle navigation menu"
          aria-expanded={openNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
