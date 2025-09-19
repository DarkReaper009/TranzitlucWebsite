// import './Header.css'
// import logo from '../assets/Images/main_logo.svg'
import dotline from '../assets/Images/dot_line.svg';
import truck from '../assets/Images/blue_truck.svg';

const Home = () => {
  return (
    <div
      className={`[clip-path:polygon(0_0,_100%_0,_100%_69%,_0%_100%)] bg-[#121D50] h-screen w-full relative px-[9rem] pt-0.5 mt-24`}
    >
      <div className="w-[65rem] h-[31rem] flex flex-col  mt-22">
        <div className="w-[65rem] h-[31rem] flex flex-col ">
          <div className="w-full">
            <div className="h-[17.5rem] mb-6">
              <p className="text-white font-grotesc text-[1.1rem] mb-[1rem] tracking-widest">
                PARTENERUL TAU DE INCREDERE PENTRU SERVICII LOGISTICE DE TOP
              </p>
              <p className="text-white font-grotesc-bold text-[4rem] leading-[120%] ">
                OPTIMIZEAZĂ-ȚI <br /> TRANSPORTURILE <br /> CU SERVICIILE
                NOASTRE
              </p>
            </div>
            <p className="text-white w-[35.6rem] text-b1 font-roboto">
              Simplificați procesul de expediere și faceți-l mai eficient cu
              serviciile noastre de transport marfă. De la început până la
              sfârșit, ne ocupăm de tot pentru a ne asigura că marfa
              dumneavoastră ajunge în siguranță.
            </p>
          </div>
          <div className="flex flex-row gap-8 w-[19rem] h-[5.2rem] mt-8">
            <div className="flex flex-col justify-center">
              <p className="text-white font-grotesc-bold leading-[130%] text-5xl">
                225
              </p>
              <p className="text-white">Satisfied Clients</p>
            </div>
            <img src={dotline} alt="no" />
            <div className="flex flex-col justify-center">
              <p className="text-white font-grotesc-bold leading-[130%] text-5xl">
                16+{' '}
              </p>
              <p className="text-white">Ani de Experiență</p>
            </div>
          </div>
          <img
            src={truck}
            alt="err"
            className="absolute right-0 top-0 h-[35rem] w-[34rem] "
          />
        </div>
      </div>
    </div>
  );
};
// to do de realizate headerul aplicatiei
//     <div style={{
//     backgroundImage: `url(${require("../assets/Images/main_logo.svg")})`,
//   }} className={`bg-[#121D50] w-full h-[90vh] items-center justify-center bg-no-repeat bg-center bg-cover`} >
//   <p>this is</p>

//     </div>
export default Home;
