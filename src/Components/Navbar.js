'use client'

import { useEffect, useState } from "react"

import { IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
    const [explore, setExplore] = useState(false)
    const [hobbies, setHobbies] = useState(false)

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };





    return (
        <>
            <nav className=" flex justify-between md:px-40 px-5 items-center py-[8px] w-full fixed z-30 bg-white h-20 ">
                <img src="images/logo.png" className=" md:w-[293.26px] md:h-[60px] w-52 " alt="" />
                <div className=" h-[40px] w-[300px] md:flex hidden ">
                    <input type="search" name="explore" placeholder="Search Here..." id="explore" className=" bg-[#f8f9fa] border-[1px] border-[#ebedf0] items-center rounded-tl-[8px] rounded-bl-[8px] " />
                    <div className=" bg-[#8064A2] w-[40px] h-[40px] flex justify-center items-center rounded-tr-[8px] rounded-br-[8px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                            <path fill="#fff" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                        </svg>
                    </div>
                </div>
                <div className="flex md:w-[525px] h-[40px] md:justify-evenly justify-between w-1/3 items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" md:hidden visible " width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="#8064A2" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                    </svg>
                    <div className=" md:flex hidden w-[107px] h-[24px] justify-center items-center cursor-pointer relative " onClick={() => setExplore(!explore, setHobbies(false))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                            <path fill="#8064A2" d="M6.5 17.5L14 14l3.5-7.5L10 10zM12 13q-.425 0-.712-.288T11 12t.288-.712T12 11t.713.288T13 12t-.288.713T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                        </svg>
                        <p className=" px-1 font-['Poppins'] ">Explore</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z" />
                            </g>
                        </svg>
                        <div className={`absolute top-10 rounded-sm w-[220px] left-0 shadow-[0_8px_12px_0_rgba(147,156,163,0.12)] ${explore ? 'visible' : 'hidden'} `}  >
                            <p className="p-2 font-['Poppins'] ">People - Community</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Places - Venues</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Programs - Events</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Programs - Events</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Products - Store</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Blogs</p>
                        </div>
                    </div>
                    <div className=" md:flex hidden w-[107px] h-[24px] justify-center items-center cursor-pointer relative " onClick={() => setHobbies(!hobbies, setExplore(false))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                            <path fill="#8064A2" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m.252-12.932a.476.476 0 0 0-.682.195l-1.2 2.432l-2.684.39a.477.477 0 0 0-.266.816l1.944 1.892l-.46 2.674a.479.479 0 0 0 .694.504L8 10.709l2.4 1.261a.478.478 0 0 0 .694-.504l-.458-2.673L12.578 6.9a.479.479 0 0 0-.265-.815l-2.685-.39l-1.2-2.432a.47.47 0 0 0-.176-.195" />
                        </svg>
                        <p className="px-1 font-['Poppins']">Hobbies</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                <path fill="currentColor" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z" />
                            </g>
                        </svg>
                        <div className={`absolute top-10 rounded-sm w-[220px] left-0 shadow-[0_8px_12px_0_rgba(147,156,163,0.12)] ${hobbies ? 'visible' : 'hidden'} `}  >
                            <p className="p-2 font-['Poppins'] ">People - Community</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Places - Venues</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Programs - Events</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Programs - Events</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Products - Store</p>
                            <hr />
                            <p className="p-2 font-['Poppins']">Blogs</p>
                        </div>
                    </div>
                    <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="#8064A2" d="M5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="#8064A2" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" />
                    </svg>
                    <svg className="md:flex hidden" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="#8064A2" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" />
                    </svg>
                    <svg className="md:hidden inline-block" xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="#8064A2" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
                    </svg>
                    <button className=" md:flex justify-center items-center hidden border-[1px] font-['Poppins'] font-[600] text-[#8064A2] border-[#8064A2] rounded-[8px] py-1 px-2 w-[112px] h-[40px] ">Sign In</button>
                </div>
            </nav>
            {showScroll && (
                <button className=" z-50 fixed bottom-4 right-4 bg-white text-[#939ca3] hover:bg-[#8064A2] hover:text-white p-3 rounded-full shadow-md " onClick={scrollToTop}>
                    <IoIosArrowUp size={30} />
                </button>
            )}

        </>




    )
}

export default Navbar