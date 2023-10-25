import Image from "next/image";

const TestimonialCard = (props) => {
  const { image, name, text } = props;
  return (
    <div className="flex flex-col w-full lg:w-[368px] h-full p-2 md:p-8 gap-3 xl:gap-5">
      <div className="flex flex-col lg:flex-row justify-start items-center gap-3 lg:gap-5">
        <div className="w-20 h-20 rounded-full relative overflow-hidden">
          <Image src={image} alt="user photo" fill className="object-cover" />
        </div>
        <h3 className="text-2xl text-black font-eb-garamond font-semibold">
          {name}
        </h3>
      </div>
      <p className="font-dosis font-medium text-center text-lg text-black tracking-wide leading-9 lg:text-left">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
