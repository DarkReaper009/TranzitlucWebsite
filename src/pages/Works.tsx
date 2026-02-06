import { useState, useEffect, useRef } from 'react';
import map from '../assets/Images/map.svg';
import line from '../assets/Images/line_3.svg';
import Step from '../components/Works/Step';
import document from '../assets/Images/document.svg';
import phone from '../assets/Images/phone.svg';
import location from '../assets/Images/location.svg';
import Section from '../components/Section';
import KineticText from '../components/KineticText';

type StepType = {
  step: string;
  image: string;
  title: string;
  subtitle: string;
};

const stepsData: StepType[] = [
  {
    step: 'Pasul 1',
    image: phone,
    title: 'SOLICITĂ O OFERTĂ',
    subtitle:
      'Procesul începe printr-un apel telefonic pentru a discuta nevoile tale și a identifica cea mai bună soluție pentru transportul de marfă. Echipa noastră este pregătită să te asiste și să îți ofere toate informațiile necesare.',
  },
  {
    step: 'Pasul 2',
    image: document,
    title: 'OFERĂ DETALII',
    subtitle:
      'Pentru a-ți oferi cea mai bună soluție, furnizează informații complete despre tipul de marfă, dimensiuni, greutate și destinația finală. Detaliile exacte ne ajută să optimizăm costurile și să îți garantăm o livrare eficientă.',
  },
  {
    step: 'Pasul 3',
    image: location,
    title: 'STABILEȘTE RIDICAREA',
    subtitle:
      'După ce ai acceptat oferta, alegi data și locația de ridicare a mărfii. Echipa noastră se va asigura că transportul începe conform programului stabilit, asigurându-se că totul decurge fără probleme.',
  },
];

const Works = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [areStepsVisible, setAreStepsVisible] = useState(false);
  const mapRef = useRef<HTMLImageElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  // Binary Scroll Animation for Map (Visible/Hidden based on zone)
  useEffect(() => {
    const handleScroll = () => {
      if (!mapRef.current) return;

      const rect = mapRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Distance from center of viewport
      const distance = Math.abs(viewportCenter - elementCenter);

      // Define the active zone.
      // If the element's center is within this distance from the viewport center, it is visible.
      // windowHeight / 2.5 provides a narrower active area, causing it to hide sooner.
      const maxDistance = windowHeight / 2.5;

      if (distance < maxDistance) {
        setIsMapVisible(true);
      } else {
        setIsMapVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for Steps
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === stepsContainerRef.current) {
            if (entry.isIntersecting) {
              setAreStepsVisible(true);
            } else {
              setAreStepsVisible(false);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    if (stepsContainerRef.current) observer.observe(stepsContainerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="works"
      customPaddings="py-[6rem] 2xl:py-[6.9rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
    >
      <div className=" w-full max-w-[1854px] mx-auto">
        <div className="flex flex-col items-center xl:items-start h-full w-full gap-5 xl:gap-11 ">
          <div className="flex flex-col max-w-[36rem] xl:mt-11 gap-4">
            <KineticText
              tag="p"
              className="text-sh2 text-blue1 text-center xl:text-start font-sh2 leading-2.5 justify-center xl:justify-start"
            >
              CUM FUNCTIONEAZA
            </KineticText>
            <KineticText
              tag="p"
              className="text-[2rem] sm:text-h3 text-db1 text-center xl:text-start tracking-normal leading-[130%] font-h3 justify-center xl:justify-start"
            >
              SIMPLIFICĂ PROCESUL DE EXPEDIERE CU AJUTORUL METODEI NOASTRE
              RAPIDE ȘI EFICIENTE.
            </KineticText>
          </div>

          <img
            ref={mapRef}
            src={map}
            alt=""
            className={`w-full sm:w-[40rem] xl:w-[44.3rem] xl:absolute xl:top-0 xl:right-0 transition-all duration-1000 delay-300 ease-in-out ${
              isMapVisible
                ? 'animate-slide-in-right'
                : 'animate-slide-out-right'
            }`}
          />
          <img src={line} alt="" className="w-full h-4  xl:mt-[6rem] " />

          <div
            ref={stepsContainerRef}
            className="w-full flex flex-row flex-wrap justify-evenly gap-[4.5rem]"
          >
            {stepsData.map(({ step, image, title, subtitle }, index) => {
              return (
                <div
                  key={step}
                  className={`${areStepsVisible ? 'animate-slide-in-bottom-left' : 'animate-slide-out-bottom-left'}`}
                  style={{
                    animationDelay: areStepsVisible ? `${index * 0.3}s` : '0s',
                  }}
                >
                  <Step
                    step={step}
                    image={image}
                    subtitle={subtitle}
                    title={title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Works;
