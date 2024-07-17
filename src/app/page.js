import Add from "@/Components/Add"
import EndHero from "@/Components/EndHero"
import Feature from "@/Components/Feature"
import Footer from "@/Components/Footer"
import HeroSec from "@/Components/HeroSec"
import Navbar from "@/Components/Navbar.js"
import Testimonials from "@/Components/Testimonials"
import { IoIosArrowUp } from "react-icons/io";


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <Feature />
      <Add />
      <Testimonials />
      <EndHero />
      <Footer />

    </div>
  )
}

export default page

