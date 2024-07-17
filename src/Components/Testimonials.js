import { ImQuotesLeft } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa6";



const Testimonials = () => {
    return (
        <div className="flex justify-center items-center py-16">
            <div className=' bg-[#F7F5F9] md:h-[500px] flex flex-col justify-between md:p-10 p-2 w-4/5 rounded-[8px]'>
                <div className="flex gap-8 items-center ">
                    <div className=" bg-[#8064A2] rounded-full inline-block p-2 "><ImQuotesLeft className=" text-xl text-white " /></div>
                    <p className=" font-[Poppins] font-[600] text-[24px] leading-[36px] ">Testimonials</p>
                </div>
                <p className=" font-[Poppins] font-[300] text-[1em] leading-[30px] tracking-[0.2px] md:text-left text-center text-[#6D747A] ">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
                <div className="  flex md:flex-row-reverse flex-col items-center justify-between ">
                    <div className=" md:order-1 order-2 bg-[#CCC1DA] flex items-center md:w-4/5 w-full md:p-2 md:h-fit rounded-[8px] ">
                        <audio controls className=" fill-transparent w-full mr-2  h-5 " src=""></audio>
                        <div className="relative flex h-[50px] ">
                            <img src="/images/Profile.png" width={60} alt="" />
                            <FaMicrophone className=" absolute z-30 bottom-0 left-0 text-lg text-white" />
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center gap-2">
                        <img className=" md:order-2 order-1 md:w-fit w-16 my-5 " src="/images/Profile.png" alt="" />
                        <div className=" flex flex-col ">
                            <p className=" md:hidden inline font-[Poppins] font-[600] text-[16px] leading-[24px] text-[#8064A2] ">Shubha Nagarajan</p>
                            <p className=" md:hidden inline font-[Poppins] font-[400] text-[12px] leading-[18px] tracking-[0.2px] text-[#0096C8] ">Classical Dancer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials