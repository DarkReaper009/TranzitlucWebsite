import dotline from '../assets/Images/dot_line.svg';
import truck from '../assets/Images/blue_truck.svg';
import Section from '../components/Section';
import CountUp from '../components/CountUp';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const Home = () => {
  const [isTruckVisible, setIsTruckVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled less than 100px, truck is visible (enter).
      // If scrolled more, truck exits.
      if (window.scrollY < 100) {
        setIsTruckVisible(true);
      } else {
        setIsTruckVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section
      id="home"
      customPaddings="pt-[6rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
      className="h-screen bg-db1 lg:[clip-path:polygon(0_0,_100%_0,_100%_60%,_0%_100%)] sm:flex sm:items-center md:block lg:block"
    >
      <SEO
        title="Tranzitluc - Servicii de Transport Marfa & Logistica"
        description="Tranzitluc - Partenerul tau de incredere pentru servicii logistice de top in Romania. Transport marfa eficient, sigur si rapid. Afacere de familie din 2008."
        keywords="transport, logistica, expeditie, marfa, Romania, transport marfa, servicii transport, camioane, oferta transport"
      />
      <div className="flex flex-col justify-center sm:justify-center h-full mt-5 sm:mt-0 lg:block lg:pt-[15vh]">
        <div
          id="main-txt"
          className="w-full h-flex flex flex-col justify-evenly"
        >
          <div className=" mb-6">
            <p className="animate-slide-in-left text-white font-grotesc text-[0.9rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.1rem] mb-[1rem] tracking-widest">
              PARTENERUL TAU DE INCREDERE PENTRU SERVICII LOGISTICE DE TOP
            </p>
            <p className="animate-slide-in-left animation-delay-300 text-white font-grotesc-bold text-[3rem] sm:text-[4rem] md:text-[4rem] lg:text-[4rem] leading-[120%] ">
              OPTIMIZEAZĂ-ȚI <br /> TRANSPORTURILE <br /> CU SERVICIILE NOASTRE
            </p>
          </div>
          <p className="animate-slide-in-left animation-delay-600 text-white w-[20.6rem] sm:text-b1 lg:text-b1 md:w-[35.6rem]   font-roboto">
            Simplificați procesul de expediere și faceți-l mai eficient cu
            serviciile noastre de transport marfă. De la început până la
            sfârșit, ne ocupăm de tot pentru a ne asigura că marfa dumneavoastră
            ajunge în siguranță.
          </p>
        </div>
        <div className="flex flex-row items-center gap-8 w-[19rem] mt-8">
          <div className="flex flex-col justify-center">
            <p className="text-white font-grotesc-bold leading-[100%] lg:leading-[130%] text-3xl sm:text-5xl md:text-5xl lg:text-5xl">
              <CountUp end={225} duration={3500} easing="easeOutQuad" />
            </p>
            <p className="fadeIn text-white  sm:text-b2 lg:text-b2 font-roboto">
              Satisfied Clients
            </p>
          </div>
          <img
            src={dotline}
            alt="no"
            className="flex h-full lg:h-25  stretch"
          />
          <div className="flex flex-col justify-center">
            <p className="text-white font-grotesc-bold leading-[100%] lg:leading-[130%] text-3xl sm:text-5xl md:text-5xl lg:text-5xl">
              <CountUp
                end={16}
                suffix="+"
                duration={3000}
                easing="linear"
              />{' '}
            </p>
            <p className="fadeIn text-white  sm:text-b2 lg:text-b2">
              Ani de Experiență
            </p>
          </div>
        </div>
      </div>
      <div className="hidden absolute right-5 top-[65%] -translate-y-[85%] 2xl:flex">
        <img
          src={truck}
          alt="err"
          className={`h-[40rem] w-[39rem] ${isTruckVisible ? 'animate-slide-in-right' : 'animate-slide-out-right'}`}
        />
      </div>
    </Section>
  );
};

export default Home;
