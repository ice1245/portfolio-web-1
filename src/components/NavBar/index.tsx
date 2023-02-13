import React, {useState} from 'react';
//@ts-ignore
import logo from '../../assets/logo.svg'
//@ts-ignore
import closeIcon from '../../assets/close.svg'
//@ts-ignore
import menuIcon from '../../assets/menu.svg'
import {navLinks} from '../../constants'

const Index = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="w-full flex py-6 justify-between
        items-center navbar">
            <img src={logo} alt="hoobank"
                 className="w-[124px] h-[32px]"/>
            <ul className="list-none sm:flex hidden justify-end
            items-center flex-1 text-white">
                {navLinks.map((nav: any, index: any) => {
                    return <li key={nav.id} className={`font-poppins 
                   font-normal cursor-pointer text-[16px] text-white
                     ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                })}
            </ul>
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? closeIcon : menuIcon}
                     alt="menu" className="w-[28px] h-[28px] object-contain"
                     onClick={() => setToggle((prevState) => !prevState)}/>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
                    absolute top-20 right-0 mx-4  my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end
                            items-center flex-1 text-white ">
                        {navLinks.map((nav: any, index: any) => {
                            return <li key={nav.id} className={`font-poppins 
                            font-normal cursor-pointer text-[16px] text-white
                             ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Index;