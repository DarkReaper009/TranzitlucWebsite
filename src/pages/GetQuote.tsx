import Section from '../components/Section';
import RequestOffer from '../components/GetQuote/RequestOffer';
import WhyUs from '../components/GetQuote/WhyUs';

const GetQuote = () => {
  return (
    <Section
      id="get-a-quote"
      customPaddings="py-[6rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
      customScroll="scroll-mt-4"
      className=" bg-gr1 "
    >
      {/* <div className="flex flex-row items-center   w-full max-w-[1854px] mx-auto"> */}
      <div className="flex flex-row flex-wrap gap-15 min-[1360px]:gap-0 w-full max-w-[1854px] mx-auto h-full items-center justify-center">
        <WhyUs />
        <RequestOffer />
      </div>
      {/* </div> */}
    </Section>
  );
};
export default GetQuote;
