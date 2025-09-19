import box from '../assets/Images/box.svg';

const Services = () => {
  return (
    <div className="flex flex-col items-center h-[70rem] w-full  px-[9rem] py-[6.9rem]  gap-16 bg-gr1">
      <div className="flex flex-col items-center gap-4 w-[50rem] h-[10rem]">
        <p className="text-sh2 text-blue1 font-sh2 leading-2.5">
          SERVICIILE NOASTRE{' '}
        </p>
        <p className="text-h2 text-db1 font-h2 leading-[120%] text-center">
          TRANSPORT EFICIENT ȘI DE ÎNCREDERE
        </p>
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[42.3rem] bg-white rounded-2xl gap-[2rem]">
        <img src={box} alt="" className="h-20 w-20" />
        <div className="flex flex-col gap-4 text-h5 text-db1 font-grotesc-bold leading-[130%]">
          <p className="text-center ">
            TRANSPORT CU <br /> CAMIONUL
          </p>
          <p className="w-[40rem] text-center leading-[140%] text-b1 text-gr2 font-b1">
            La Tranzitluc, ne concentrăm pe furnizarea de soluții logistice
            personalizate și eficiente, adaptate nevoilor unice ale clienților
            noștri. În prezent, oferim servicii de transport cu remorci cu
            prelată și suntem deschiși să explorăm și alte tipuri de
            transporturi, în funcție de cerințele clienților. Ne asigurăm că
            fiecare transport este realizat într-un timp optim și la un raport
            excelent între cost și calitate.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
