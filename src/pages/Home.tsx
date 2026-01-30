// import './Header.css'
// import logo from '../assets/Images/main_logo.svg'
import dotline from '../assets/Images/dot_line.svg';
import truck from '../assets/Images/blue_truck.svg';
import Section from '../components/Section';

const Home = () => {
  return (
    <Section
      id="home"
      customPaddings="pt-[6rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
      className="h-screen bg-db1 lg:[clip-path:polygon(0_0,_100%_0,_100%_60%,_0%_100%)] sm:flex sm:items-center md:block lg:block"
    >
      <div
        className={` lg:[clip-path:polygon(0_0,_100%_0,_100%_60%,_0%_100%)] bg-[#121D50] h-[calc(100vh-8rem)] lg:h-screen max-h-[950px] max-w-[1854px] mx-auto pt-0.5 `}
      >
        {/* <div className="w-[65rem] h-full bg-amber-900 flex flex-col items-center justify-center mt-22"> */}
        <div
          // OLD: lg:mt-20 xl:mt-30 (These fixed units caused the desync)
          // NEW: lg:pt-[15vh] (Dynamic spacing based on screen height)
          // REMOVED: "justify-center" on large screens to allow manual placement via padding
          className="flex flex-col justify-center sm:justify-center h-full mt-5 sm:mt-0 lg:block lg:pt-[15vh]"
        >
          <div className="w-full h-flex flex flex-col justify-evenly">
            <div className=" mb-6">
              <p className="text-white font-grotesc text-[0.9rem] sm:text-[1.1rem] md:text-[1.1rem] lg:text-[1.1rem] mb-[1rem] tracking-widest">
                PARTENERUL TAU DE INCREDERE PENTRU SERVICII LOGISTICE DE TOP
              </p>
              <p className="text-white font-grotesc-bold text-[3rem] sm:text-[4rem] md:text-[4rem] lg:text-[4rem] leading-[120%] ">
                OPTIMIZEAZĂ-ȚI <br /> TRANSPORTURILE <br /> CU SERVICIILE
                NOASTRE
              </p>
            </div>
            <p className="text-white w-[20.6rem] sm:text-b1 lg:text-b1 md:w-[35.6rem]   font-roboto">
              Simplificați procesul de expediere și faceți-l mai eficient cu
              serviciile noastre de transport marfă. De la început până la
              sfârșit, ne ocupăm de tot pentru a ne asigura că marfa
              dumneavoastră ajunge în siguranță.
            </p>
          </div>
          <div className="flex flex-row items-center gap-8 w-[19rem] mt-8">
            <div className="flex flex-col justify-center">
              <p className="text-white font-grotesc-bold leading-[100%] lg:leading-[130%] text-3xl sm:text-5xl md:text-5xl lg:text-5xl">
                225
              </p>
              <p className="text-white  sm:text-b2 lg:text-b2 font-roboto">
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
                16+{' '}
              </p>
              <p className="text-white  sm:text-b2 lg:text-b2">
                Ani de Experiență
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={truck}
        alt="err"
        // OLD: bottom-60 (Fixed unit caused the drift)
        // NEW: top-[60%] (Matches the clip-path vertex)
        // NEW: -translate-y-[85%] (Pulls the truck up to sit ON the line)
        className="hidden absolute right-5 top-[65%] -translate-y-[85%] h-[35rem] w-[34rem] 2xl:flex"
      />
      {/* <img
        src={truck}
        alt="err"
        className="hidden absolute right-0 bottom-60 h-[35rem] w-[34rem] 2xl:flex "
      /> */}
    </Section>
    // </div>
  );
};
// to do de realizate headerul aplicatiei
//     <div style={{
//     backgroundImage: `url(${require("../assets/Images/main_logo.svg")})`,
//   }} className={`bg-[#121D50] w-full h-[90vh] items-center justify-center bg-no-repeat bg-center bg-cover`} >
//   <p>this is</p>

//     </div>
export default Home;
