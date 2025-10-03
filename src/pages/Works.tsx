// import dotline from '../assets/Images/dot_line.svg';
import map from '../assets/Images/map.svg';
import line from '../assets/Images/line_3.svg';
import Step from '../components/Works/Step';
import document from '../assets/Images/document.svg';
import phone from '../assets/Images/phone.svg';
import location from '../assets/Images/location.svg';

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
    <div className="h-[65.6rem] w-full max-w-[1854px] mx-auto px-[9rem] py-[6.9rem] relative">
      <div className="flex flex-col  h-full w-full gap-11 ">
        <div className="flex flex-col w-[36rem] mt-11 gap-4">
          <p className="text-sh2 text-blue1 font-sh2 leading-2.5">
            CUM FUNCTIONEAZA
          </p>
          <p className="text-h3 text-db1 tracking-normal leading-[130%] font-h3">
            SIMPLIFICĂ PROCESUL DE EXPEDIERE CU AJUTORUL METODEI NOASTRE RAPIDE
            ȘI EFICIENTE.
          </p>
        </div>
        <img src={map} alt="" className="absolute top-0 right-0" />
        <img src={line} alt="" className="mt-[6rem] " />

        <div className="w-full h-[25rem] flex flex-row justify-evenly gap-[7.5rem] ">
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
  );
};
export default Works;
