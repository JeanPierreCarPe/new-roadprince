import Image from "next/image";
import Button from "./Button";

const ServiceCard = (props) => {
    const { image, text, style } = props;
  return (
    <div className={`relative bg-black w-full lg:w-64 h-[250px] lg:h-[500px] p-4 lg:p-8 rounded-xl box-shadow flex flex-col justify-end overflow-hidden hover:scale-105 lg:hover:scale-110 transition ${style}`}>
        <Image src={image} alt="text" fill className="absolute top-0 left-0 object-cover z-0" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black to-transparent to-60% z-10"></div>
        <div className="flex flex-col gap-4 lg:gap-8 z-20">
            <h4 className="font-eb-garamond font-semibold text-white text-4xl text-center tracking-widest lg:tracking-wide w-full text-shadow">{text}</h4>
            <Button text="Learn more"/>
        </div>
    </div>
  )
}

export default ServiceCard