import star from '../../assets/Icons/star.svg';

const WhyUs = () => {
  return (
    <div className="w-[36.25rem] min-[1360px]:h-[52.25rem] flex flex-col gap-[1.85rem]">
      <p className="text-h3 sm:text-h2 font-h2 text-db1 ">CE NE DIFERENȚIAZĂ</p>
      <div className="flex flex-col h-[46.5rem] w-full bg-white px-[2rem] sm:px-[2.6rem] py-[2.1rem] sm:py-[2.5rem] gap-[5rem] sm:gap-[5.3rem] rounded-[0.75rem] min-[1360px]:rounded-tr-none min-[1360px]:rounded-br-none">
        <div className="flex flex-row gap-2.5 w-full h-[5.75rem] items-center ">
          <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
          <p className="text-h5 sm:text-h4 font-h4 text-db1">
            PESTE 15 ANI DE EXPERIENTA
          </p>
        </div>

        <div className="flex flex-row gap-2.5 w-full h-[5.75rem] items-center">
          <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
          <p className="text-h5 sm:text-h4 font-h4 text-db1">
            SERVICII PERSONALIZATE PENTRU FIECARE CLIENT{' '}
          </p>
        </div>

        <div className="flex flex-row gap-2.5 w-full h-[5.75rem] items-center">
          <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
          <p className="text-h5 sm:text-h4 font-h4 text-db1">
            DISPONIBILI CLIENȚILOR NOȘTRI 24 / 7
          </p>
        </div>

        <div className="flex flex-row gap-2.5 w-full h-[7.8rem] items-center">
          <img src={star} alt="" className="w-[2.5rem] sm:w-[3.1rem]" />
          <p className="text-h5 sm:text-h4 font-h4 text-db1">
            OPTIMIZAREA RUTELOR ȘI REDUCEREA COSTURILOR CLIENȚILOR
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
