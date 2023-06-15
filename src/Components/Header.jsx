import React, { useState } from "react";
import logo from "../assets/images/logo.png"
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,

} from "react-icons/hi2"
import { HiDotsVertical } from "react-icons/hi"

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEARCH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        },

    ]
    return (
        <div className="flex items-center justify-between p-5">
            <div className="flex gap-8 items-center justify-between">
                <img src={logo} alt="logo" className="w-[80px] object-cover md:w-[115px] " />
                <div className='hidden md:flex gap-8'>
                    {menu.map((item) => (
                        <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8" key={item.name}>
                            <item.icon />
                            <h2 className="hidden md:block">{item.name}</h2>
                        </div>
                    ))}
                </div>
                <div className='flex md:hidden gap-5'>
                    {menu.map((item, index) => index < 3 && (
                        <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8" key={item.name}>
                            <item.icon />
                            <h2 className="hidden md:block">{''}</h2>
                        </div>
                    ))}
                    <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                        <h2>
                            {''} {<HiDotsVertical />}
                        </h2>
                        {toggle? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                            {menu.map((item, index) => index > 2 && (
                                <div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2" key={item.name}>
                                    <item.icon />
                                    <h2 className="">{item.name}</h2>
                                </div>
                            ))}
                        </div>:null}
                    </div>
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full' />
        </div>
    )
}

export default Header;