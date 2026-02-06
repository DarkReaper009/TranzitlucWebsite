import star from '../../assets/Icons/star.svg';
import KineticText from '../KineticText';

const WhyUs = () => {
  return (
    <div className="w-full max-w-[36rem] flex flex-col gap-[1.5rem]">
      <KineticText tag="p" className="text-3xl sm:text-4xl font-h2 text-db1 ">
        CE NE DIFERENȚIAZĂ
      </KineticText>

      <div className="flex flex-col flex-1 w-full bg-white px-[2rem] sm:px-[2.5rem] py-[2rem] sm:py-[2.5rem] gap-[3rem] sm:gap-[3.5rem] rounded-[0.75rem] min-[1360px]:rounded-tr-none min-[1360px]:rounded-br-none justify-evenly">
        <div className="flex flex-row gap-4 w-full min-h-[4rem] items-center ">
          <img
            src={star}
            alt=""
            className="w-[2.2rem] sm:w-[2.8rem] drop-shadow-[0px_0px_10px_rgba(31,69,228,0.35)]"
          />
          <KineticText tag="p" className="text-xl sm:text-2xl font-h4 text-db1">
            PESTE 15 ANI DE EXPERIENTA
          </KineticText>
        </div>

        <div className="flex flex-row gap-4 w-full min-h-[4rem] items-center">
          <img
            src={star}
            alt=""
            className="w-[2.2rem] sm:w-[2.8rem] drop-shadow-[0px_0px_10px_rgba(31,69,228,0.35)]"
          />
          <KineticText tag="p" className="text-xl sm:text-2xl font-h4 text-db1">
            SERVICII PERSONALIZATE PENTRU FIECARE CLIENT
          </KineticText>
        </div>

        <div className="flex flex-row gap-4 w-full min-h-[4rem] items-center">
          <img
            src={star}
            alt=""
            className="w-[2.2rem] sm:w-[2.8rem] drop-shadow-[0px_0px_10px_rgba(31,69,228,0.35)]"
          />
          <KineticText tag="p" className="text-xl sm:text-2xl font-h4 text-db1">
            DISPONIBILI CLIENȚILOR NOȘTRI 24 / 7
          </KineticText>
        </div>

        <div className="flex flex-row gap-4 w-full min-h-[5rem] items-center">
          <img
            src={star}
            alt=""
            className="w-[2.2rem] sm:w-[2.8rem] drop-shadow-[0px_0px_10px_rgba(31,69,228,0.35)]"
          />
          <KineticText tag="p" className="text-xl sm:text-2xl font-h4 text-db1">
            OPTIMIZAREA RUTELOR ȘI REDUCEREA COSTURILOR CLIENȚILOR
          </KineticText>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
