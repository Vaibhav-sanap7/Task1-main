'use client'

import { useState } from "react"
import Signin from "./Signin"
import Joinin from "./Joinin"




const HeroSec = () => {

    const [signin, setSignin] = useState(true)

    return (
        <div className=' relative top-20 bg-[#F7F5F9] md:h-[678px] h-fit flex md:flex-row flex-col justify-center items-start md:px-40 px-5 pt-10 '>
            <div className=' md:w-1/2 relative h-full'>
                <p className=' font-["Poppins"] font-[600] italic text-[36px] '>Explore your <span className=' text-[#0096C8] '>hobby</span> or <span className='text-[#8064A2] '>passion</span></p>
                <p className='mt-8'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. <span className="md:inline hidden " >Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</span></p>
                <p className='mt-4 md:flex hidden'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
            </div>
            <div className=' md:w-1/2 md:pl-32 md:mt-0 mt-7  font-["Poppins"] font-[600] text-[20px] '>
                <div className='w-full flex gap-5 justify-center md:justify-start'>
                    <p onClick={() => setSignin(true)} className={` transition-all duration-300 cursor-pointer ${signin ? 'text-[#8064A2] border-b-2 border-[#8064A2] pb-2 ' : ' text-[#939CA3] '} `} >Sign In</p>
                    <p onClick={() => setSignin(false)} className={` transition-all duration-300 cursor-pointer ${signin ? ' text-[#939CA3] ' : 'text-[#8064A2] border-b-2 border-[#8064A2] pb-2 '} `} >Join In</p>
                </div>
                {signin ? <Signin /> : <Joinin />}
            </div>
            <img className=' md:absolute md:bottom-0 md:left-20 md:mt-0 mt-5' src="images/img1.png" alt="" />
        </div>
    )
}

export default HeroSec