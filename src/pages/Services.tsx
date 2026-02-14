import KineticText from '../components/KineticText';
import Section from '../components/Section';
import BoxAnimation from '../components/Services/BoxAnimation';

const Services = () => {
  return (
    <Section
      id="services"
      customPaddings="py-[6rem] px-[2rem] sm:px-[4rem] lg:px-[6rem]"
      className=" bg-gr1 "
    >
      <div className="flex flex-col items-center w-full gap-16 max-w-[1854px] mx-auto">
        <div className="flex flex-col items-center gap-4  px-4 max-w-[50rem] min-h-[10rem]">
          <KineticText
            tag="p"
            className="text-sh2 justify-center text-blue1 font-sh2 leading-2.5"
          >
            SERVICIILE NOASTRE
          </KineticText>
          <KineticText
            tag="p"
            className="text-h2 justify-center text-db1 font-h2 leading-[120%] "
          >
            TRANSPORT EFICIENT ȘI DE ÎNCREDERE
          </KineticText>
        </div>
        <div className="flex flex-col items-center justify-center w-[100%] h-[42.3rem] bg-white rounded-2xl gap-[2rem]  px-5">
          <BoxAnimation />
          <div className="flex flex-col gap-4 text-h5 text-db1 font-grotesc-bold leading-[130%]">
            <KineticText tag="p" className="justify-center ">
              TRANSPORT CU CAMIONUL
            </KineticText>
            <KineticText
              tag="p"
              className="text-b1 max-w-[40rem]  justify-center text-gr2 font-b1 leading-[140%]"
            >
              La Tranzitluc, ne concentrăm pe furnizarea de soluții logistice
              personalizate și eficiente, adaptate nevoilor unice ale clienților
              noștri. În prezent, oferim servicii de transport cu remorci cu
              prelată și suntem deschiși să explorăm și alte tipuri de
              transporturi, în funcție de cerințele clienților. Ne asigurăm că
              fiecare transport este realizat într-un timp optim și la un raport
              excelent între cost și calitate.
            </KineticText>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Services;
