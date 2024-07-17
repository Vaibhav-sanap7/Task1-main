import React from 'react'
import { RiTeamLine } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";




const Feature = () => {
    return (
        <div className=' flex justify-center items-center w-full '>
            <div className=' md:px-44 px-5 pb-20 pt-40 grid md:grid-cols-2 grid-cols-1 place-items-center gap-2'>
                <div className='group'>
                    <div className=' border-2 p-12 md:h-[297px] relative group-hover:bg-[#d6cae4] '>
                        <div className='flex gap-3 items-center mb-5'>
                            <RiTeamLine className=' fill-[#8064A2] text-5xl ' />
                            <p className=' font-["Poppins"] font-[600] text-[20px] '>People</p>
                        </div>
                        <p className=' text-[18px] leading-[27px] font-[Poppins] md:mb-0 mb-12 '>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                        <button className=' group-hover:border-[3px] group-hover:font-extrabold absolute bottom-8 left-12  md:w-[122px] w-3/4 h-[40px] border-[1px] border-[#8064A2] p-1 rounded-[8px] text-[14px] leading-[16px] text-[#8064A2] '>Connect</button>
                    </div>
                </div>
                <div className='group'>
                    <div className=' border-2 p-12 md:h-[297px] relative group-hover:bg-[#d1dabd] '>
                        <div className='flex gap-3 items-center mb-5'>
                            <IoLocation className=' fill-[#77933C] text-5xl ' />
                            <p className=' font-["Poppins"] font-[600] text-[20px] '>Place</p>
                        </div>
                        <p className=' text-[18px] leading-[27px] font-[Poppins] md:mb-0 mb-12 '>Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.</p>
                        <button className=' group-hover:border-[3px] group-hover:font-extrabold absolute bottom-8 left-12 md:w-[122px] w-3/4 h-[40px] border-[1px] border-[#77933C] p-1 rounded-[8px] text-[14px] leading-[16px] text-[#77933C] '>Meet Up</button>
                    </div>
                </div>
                <div className="group">
                    <div className=' border-2 p-12 md:h-[297px] relative hover:bg-[#cfb9b8] '>
                        <div className='flex gap-3 items-center mb-5'>
                            <FaShoppingBasket className=' fill-[#C0504D] text-5xl ' />
                            <p className=' font-["Poppins"] font-[600] text-[20px] '>Product</p>
                        </div>
                        <p className=' text-[18px] leading-[27px] font-[Poppins] md:mb-0 mb-12 '>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                        <button className='group-hover:border-[3px] group-hover:font-extrabold absolute bottom-8 left-12 md:w-[122px] w-3/4 h-[40px] border-[1px] border-[#C0504D] p-1 rounded-[8px] text-[14px] leading-[16px] text-[#C0504D] '>Get It</button>
                    </div>
                </div>
                <div className="group">
                    <div className=' border-2 p-12 md:h-[297px] relative hover:bg-[#a9c6d0] '>
                        <div className='flex gap-3 items-center mb-5'>
                            <FaCalendarCheck className=' fill-[#0096C9] text-5xl ' />
                            <p className=' font-["Poppins"] font-[600] text-[20px] '>Program</p>
                        </div>
                        <p className=' text-[18px] leading-[27px] font-[Poppins] md:mb-0 mb-12 '>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                        <button className=' group-hover:border-[3px] group-hover:font-extrabold absolute bottom-8 left-12 md:w-[122px] w-3/4 h-[40px] border-[1px] border-[#0096C9] p-1 rounded-[8px] text-[14px] leading-[16px] text-[#0096C9] '>Attend</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Feature