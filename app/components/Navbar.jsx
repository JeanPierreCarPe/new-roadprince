import { logo } from "@/public/assets"
import Image from "next/image"

const links = [
  {
    label: "HOME",
  },
  {
    label: "DISCOVER",
  },
  {
    label: "PLAN YOUR TRIP",
  },
  {
    label: "GALLERY",
  },
  {
    label: "SHARE YOUR STORY",
  }
]

const Navbar = () => {
  return (
    <div className="w-full h-16 px-4 lg:px-24 fixed z-50 flex items-center justify-between">
      <Image src={logo} alt="logo-image" height={50} />
      <ul className="gap-12 hidden lg:flex">
        {links.map((item)=>
          <li key={item.label}><a className="font-dosis font-light text-xl text-white text-shadow tracking-wide hover:text-custom-green cursor-pointer">{item.label}</a></li>
        )}
      </ul>
      <div className="w-10 h-8 flex flex-col gap-2 lg:hidden">
        <div className="w-full h-1 bg-white rounded-2xl"></div>
        <div className="w-full h-1 bg-white rounded-2xl"></div>
        <div className="w-full h-1 bg-white rounded-2xl"></div>
      </div>
    </div>
  )
}

export default Navbar