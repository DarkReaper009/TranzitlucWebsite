import dotline from '../assets/Images/dot_line.svg';
import Section from '../components/Section';
import KineticText from '../components/KineticText';
import TactileView from '../components/TactileView';

const AboutUs = () => {
  return (
    <Section
      id="about-us"
      customPaddings="py-[6rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
      customScroll="scroll-mt-10"
      className="2xl:h-screen"
    >
      <div className="h-full w-full max-w-[1854px] mx-auto">
        <div className="flex flex-col justify-center h-full w-full gap-11">
          <div className="flex flex-col gap-4 w-full lg:h-[9.5rem]">
            <KineticText
              tag="p"
              className="text-sh2 text-blue1 font-sh2 leading-2.5"
            >
              DESPRE NOI
            </KineticText>
            <KineticText
              tag="p"
              className="text-h2 text-db1 font-h2 leading-[120%]"
            >
              SPRIJINIM AFACEREA DUMNEAVOASTRĂ CU SOLUȚII LOGISTICE
              PERSONALIZATE
            </KineticText>
          </div>
          <div className="flex flex-col gap-4">
            <KineticText
              tag="p"
              className="text-b1 text-gr2 font-b1 leading-[140%]"
            >
              La Tranzitluc, ne dedicăm furnizării de soluții logistice
              personalizate și eficiente, adaptate nevoilor specifice ale
              fiecărui client.
            </KineticText>
            <KineticText
              tag="p"
              className="text-b1 text-gr2 font-b1 leading-[140%]"
            >
              Cu o experiență de peste 16 ani în domeniu și o echipă de
              profesioniști în domeniul transporturilor, ne angajăm să oferim
              servicii de transport impecabile, care să sprijine dezvoltarea
              afacerii dumneavoastră. Suntem o companie de încredere,
              recunoscută pentru seriozitatea și angajamentul nostru față de
              fiecare proiect.
            </KineticText>
            <KineticText
              tag="p"
              className="text-b1 text-gr2 font-b1 leading-[140%]"
            >
              Ne-am consolidat reputația prin prestarea de servicii în sud-estul
              României, în orașe precum București, Constanța, Ploiești,
              Călărași, Galați, Pitești, Slobozia și Medgidia. În decursul
              anilor, am demonstrat că putem duce la bun sfârșit fiecare
              transport, optimizând costurile și asigurându-ne că oferim cele
              mai bune soluții pentru clienții noștri.
            </KineticText>
            <KineticText
              tag="p"
              className="text-b1 text-gr2 font-b1 leading-[140%]"
            >
              Suntem întotdeauna în căutare de noi parteneriate și suntem
              pregătiți să vă oferim soluții logistice eficiente, care să
              răspundă cerințelor afacerii dumneavoastră. Profesionalismul și
              dedicarea echipei noastre sunt garantii pentru succesul
              colaborării noastre.
            </KineticText>
          </div>
          <ul className="flex flex-wrap flex-row gap-5 justify-evenly xl:justify-between">
            <TactileView
              tag="li"
              className="flex items-center justify-center bg-db2 rounded-2xl w-[20.5rem] h-[10rem]"
              delay={0}
            >
              <div className="flex flex-row gap-4 h-[4rem] w-[18rem]">
                <p className="text-h2 text-white font-h2">01</p>
                <img src={dotline} alt="" className="h-full" />
                <p className="text-h5 text-white font-h5">
                  Expertiză și <br /> Experiență
                </p>
              </div>
            </TactileView>
            <TactileView
              tag="li"
              className="flex items-center justify-center bg-db2 rounded-2xl w-[20.5rem] h-[10rem]"
              delay={0.2}
            >
              <div className="flex flex-row gap-4 h-[4rem] w-[18rem]">
                <p className="text-h2 text-white font-h2">02</p>
                <img src={dotline} alt="" className="h-full" />
                <p className="text-h5 text-white font-h5">
                  Dedicați <br /> Calității
                </p>
              </div>
            </TactileView>
            <TactileView
              tag="li"
              className="flex items-center justify-center bg-db2 rounded-2xl w-[20.5rem] h-[10rem]"
              delay={0.4}
            >
              <div className="flex flex-row gap-4 h-[4rem] w-[18rem]">
                <p className="text-h2 text-white font-h2">03</p>
                <img src={dotline} alt="" className="h-full" />
                <p className="text-h5 text-white font-h5">
                  Servicii <br /> Complete
                </p>
              </div>
            </TactileView>
          </ul>
        </div>
      </div>
    </Section>
  );
};
export default AboutUs;
