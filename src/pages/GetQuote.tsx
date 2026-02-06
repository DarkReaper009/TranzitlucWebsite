import Section from '../components/Section';
import RequestOffer from '../components/GetQuote/RequestOffer';
import WhyUs from '../components/GetQuote/WhyUs';

const GetQuote = () => {
  return (
    <Section
      id="get-a-quote"
      customPaddings="py-[4rem] px-[2rem] sm:px-[6rem] lg:px-[9rem]"
      customScroll="scroll-mt-4"
      className=" bg-gr1 min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-row flex-wrap gap-12 min-[1360px]:gap-0 w-full max-w-[1854px] mx-auto justify-center items-stretch">
        <WhyUs />
        <RequestOffer />
      </div>
    </Section>
  );
};
export default GetQuote;
