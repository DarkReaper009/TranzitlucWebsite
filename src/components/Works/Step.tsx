type CardProps = {
  step: string;
  image: string;
  title: string;
  subtitle: string;
};

const Step = ({ step, image, title, subtitle }: CardProps) => {
  return (
    <div className="flex flex-col items-center w-[25rem] h-[24.3rem] ">
      <div className="flex items-center justify-center border-[2px] border-gr1 rounded-[90px] h-[2rem] w-[4.5rem] ">
        <p className="text-db1 text-cap font-cap text-center leading-[140%] tracking-normal">
          {step}
        </p>
      </div>
      <img src={image} alt="" className="w-[8.25rem] h-[8.25rem] mt-3" />
      <div className="flex flex-col mt-8 items-center">
        <p className="text-center text-2xl sm:text-h5 text-db1 font-grotesc-bold leading-[130%]">
          {title}
        </p>
        <p className="text-center text-[1rem] sm:text-b1 text-gr2 font-roboto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default Step;
