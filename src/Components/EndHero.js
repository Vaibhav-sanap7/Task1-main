import React from 'react'

const EndHero = () => {
    return (
        <div className=' md:h-[670px] bg-[#F7FDFF] relative md:p-24 p-4'>
            <h3 className=' font-[Poppins] font-[500] italic md:text-[36px] text-[24px] leading-[54px] '>Your <span className=' text-[#8064A2] '>Hobby</span>, Your <span className=' text-[#0096C8] '>Community...</span></h3>
            <button className=' w-[147px] h-[46px] bg-[#8064A2] rounded-[8px] mt-[16px] mb-28 font-[Poppins] font-[600] text-[14px] leading-[30px] text-white '>Get Started</button>
            <img src="/images/img3.png" className='absolute bottom-0 left-0' alt="" />
        </div>
    )
}

export default EndHero