import { FaFacebook, FaGooglePlus, FaInstagram, FaPinterest, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";




const Footer = () => {
    return (
        <div>
            <div className=' flex justify-around pt-10 md:flex-row flex-col '>
                <div className="pl-10">
                    <p className='mb-4 font-[Poppins] font-[700] text-[14px] leading-[18px] tracking-[0.5px] '>Hobbycue</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>About Us</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Work with Us</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>FAQ</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Contact Us</p>
                </div>
                <div className="pl-10">
                    <p className='mb-4 font-[Poppins] font-[700] text-[14px] leading-[18px] tracking-[0.5px] '>How Do I?</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Sign Up</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Add a Listing</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Claim Listing</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Post a Query</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Add a Blog Post</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Other Queries</p>
                </div>
                <div className="pl-10">
                    <p className='mb-4 font-[Poppins] font-[700] text-[14px] leading-[18px] tracking-[0.5px] '>Quick Links</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Listings</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Blog Posts</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Shop / Store</p>
                    <p className='mb-2 font-[Poppins] font-[400] text-[14px] leading-[18px] tracking-[0.5px]'>Community</p>
                </div>
                <div>
                    <p className=' pl-10 mb-4 font-[Poppins] font-[700] text-[14px] leading-[18px] tracking-[0.5px] '>Social Media</p>
                    <div className=" pl-10 flex gap-2">
                        <FaFacebook className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                        <FaTwitter className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                        <FaInstagram className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                        <FaPinterest className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                        <FaGooglePlus className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                        <FaYoutube className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                        <FaTelegram className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                        <IoMail className=" bg-gray-300 text-[#6D747A] rounded-full w-5 h-5 " />
                    </div>
                    <p className=' pl-10 my-4 font-[Poppins] font-[700] text-[14px] leading-[18px] tracking-[0.5px] '>Invite Friends</p>
                    <div className=" pl-5 mb-10 md:h-[40px] md:w-[300px] flex ">
                        <input type="search" name="explore" placeholder="Email ID" id="explore" className=" bg-[#f8f9fa] border-[1px] border-[#ebedf0] items-center rounded-tl-[8px] rounded-bl-[8px] " />
                        <div className=" bg-[#8064A2] px-2 text-white h-[40px] flex justify-center items-center rounded-tr-[8px] rounded-br-[8px] ">
                            Invite
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[#F7F5F9] h-[40px] flex justify-center items-center ">
                <p className=" font-[Poppins] text-[12px] leading-[18px] tracking-[0.5px] ">© Purple Cues Private Limited</p>
            </div>
        </div>
    )
}

export default Footer