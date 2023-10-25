import { user2, user3, user4, user5, user6 } from "@/public/assets"
import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <section id="share-your-story" className="max-container h-fit px-4 lg:px-24 py-10 lg:py-20 relative">
      <div className="relative w-full flex flex-col justify-center items-center gap-10 z-10">
        <div className="flex items-center justify-center gap-8">
          <svg
            width="194"
            height="6"
            viewBox="0 0 194 6"
            fill="none"
            className="max-sm:hidden"
          >
            <path
              d="M3 3L191 3"
              stroke="#3B3B3C"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="font-eb-garamond font-semibold text-center text-5xl lg:text-8xl text-black">
            Share Your Road Tale
          </h1>
          <svg
            width="194"
            height="6"
            viewBox="0 0 194 6"
            fill="none"
            className="max-sm:hidden"
          >
            <path
              d="M3 3L191 3"
              stroke="#3B3B3C"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="w-full flex flex-wrap justify-between gap-8 md:justify-center">
          <TestimonialCard
            image={user6}
            name="Mehreen Iqbal"
            text="Curved along the coast, the road led me to hidden beaches and stunning vistas. Each stop brought a new view, a new story, and a renewed love for the freedom of the open road."
          />
          <TestimonialCard
            image={user2}
            name="Saifullah Mirza"
            text="Twisting up the mountains, I found myself amidst clouds and awe-inspiring peaks. The road taught me that the journey is just as remarkable as the destination."
          />
          <TestimonialCard
            image={user5}
            name="Zain Abbas"
            text="From city lights to desert sands, the road was my guide through diverse landscapes and unforgettable moments. Each mile etched a story of exploration and discovery."
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials