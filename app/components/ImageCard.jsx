import Image from "next/image";
import { UpRevealBox } from "./UpRevealBox";

const ImageCard = (props) => {
    const { image, author, authorPicture, style } = props;
  return (
    <UpRevealBox>
    <div className={`relative w-full h-[250px] lg:h-[300px] rounded-xl box-shadow flex flex-col justify-end overflow-hidden hover:scale-105 lg:hover:scale-105 transition image-card ${style}`}>
        <Image src={image} alt="text" fill className="absolute top-0 left-0 object-cover z-0" />
        <div className="absolute right-[5%] bottom-[5%] flex justify-between items-center gap-5 z-20 bg-total-black/75 p-2 rounded-full image-author-card">
            <h5 className="font-eb-garamond font-medium text-white text-lg text-center tracking-widest w-full text-shadow image-card-title hidden">{author}</h5>
            <div className="relative min-w-[30px] min-h-[30px] overflow-hidden rounded-full">
                <Image src={authorPicture} alt="author-picture" fill className="object-cover" />
            </div>
        </div>
    </div>
    </UpRevealBox>
  )
}

export default ImageCard