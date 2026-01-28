// import dotline from '../assets/Images/dot_line.svg';
import map from '../assets/Images/map.svg';
import line from '../assets/Images/line_3.svg';
import Step from '../components/Works/Step';
import document from '../assets/Images/document.svg';
import phone from '../assets/Images/phone.svg';
import location from '../assets/Images/location.svg';
import Section from '../components/Section';

type steps = {
  step: string;
  image: string;
  title: string;
  subtitle: string;
};

const steps = [
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
  return (
    <Section
      id="works"
      customPaddings="py-[6rem] 2xl:py-[6.9rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
    >
      <div className=" w-full max-w-[1854px] mx-auto">
        <div className="flex flex-col items-center xl:items-start h-full w-full gap-5 xl:gap-11 ">
          <div className="flex flex-col max-w-[36rem] xl:mt-11 gap-4">
            <p className="text-sh2 text-blue1 text-center xl:text-start font-sh2 leading-2.5">
              CUM FUNCTIONEAZA
            </p>
            <p className="text-[2rem] sm:text-h3 text-db1 text-center xl:text-start tracking-normal leading-[130%] font-h3 ">
              SIMPLIFICĂ PROCESUL DE EXPEDIERE CU AJUTORUL METODEI NOASTRE
              RAPIDE ȘI EFICIENTE.
            </p>
          </div>
          <img
            src={map}
            alt=""
            className="w-full sm:w-[40rem] xl:w-[44.3rem] xl:absolute xl:top-0 xl:right-0"
          />
          <img src={line} alt="" className="w-full h-4  xl:mt-[6rem] " />

          <div className="w-full  flex flex-row flex-wrap justify-evenly gap-[4.5rem] ">
            {steps.map(({ step, image, title, subtitle }) => {
              return (
                <Step
                  step={step}
                  image={image}
                  subtitle={subtitle}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Works;
