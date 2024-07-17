import { FaPlusCircle } from "react-icons/fa";


const Add = () => {
    return (
        <div className=' h-[500px] bg-[#F7FDFF] flex justify-center items-center '>
            <div className=" bg-white border-[1px] border-[#CED4DA] rounded-[8px] flex flex-col justify-between h-[300px] w-4/5 md:p-[40px] p-[10px] ">
                <div className="flex md:gap-8 gap-2 items-center md:justify-start justify-center">
                    <FaPlusCircle className=" text-3xl fill-[#0096C8] " />
                    <p className=" font-[Poppins] font-[600] text-[24px] leading-[36px] ">Add Your Own</p>
                </div>
                <p className=" font-[Poppins] text-[1em] leading-[30px] tracking-[2%] md:text-left text-center ">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                <button className=" border-[1px] border-[#8064A2] rounded-[8px] md:w-[121px] w-full h-[40px] font-[Poppins] font-[600] text-[14px] leading-[16px] ">Add New</button>
            </div>
        </div>
    )
}

export default Add