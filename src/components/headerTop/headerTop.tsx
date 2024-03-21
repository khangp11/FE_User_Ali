'use client'
import React, { useState, useEffect } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { TbMailOpened } from "react-icons/tb";
import { AiFillPhone } from "react-icons/ai";



const inforCompany = {
    facebook: "https://www.facebook.com/alivesms/",
    twitter: "https://www.facebook.com/alivesms/",
    email: "info@ali.vn",
    phone: "084.227.7777",

}

const HeaderTop = () => {
    const [language, setLanguage] = useState('VN');
    const [isMobileView, setIsMobileView] = useState(false);
    const [isExtraSmallView, setIsExtraSmallView] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'VN' : 'EN');
    };
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 350) {
                setIsExtraSmallView(true);
                setIsMobileView(false);
            } else if (window.innerWidth <= 768) {
                setIsExtraSmallView(false);
                setIsMobileView(true);
            } else {
                setIsExtraSmallView(false);
                setIsMobileView(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            {isMobileView && (
                <div>
                    <Menubar className='justify-center border-none rounded-none bg-slate-950 text-white'>
                        <Menubar className='items-center border-none rounded-none bg-slate-950 text-white'>
                            <MenubarMenu>
                                <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                    <TbMailOpened className='text-green-600 text-sm' />
                                    <p className='ml-2'>{inforCompany.email}</p>
                                </MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                    <AiFillPhone className='text-green-600 text-base' />
                                    <p className='ml-2'>{inforCompany.phone}</p>
                                </MenubarTrigger>
                            </MenubarMenu>
                        </Menubar>
                    </Menubar>
                    <Menubar className='justify-center border-none rounded-none bg-slate-950 text-white'>
                        <MenubarMenu>
                            Theo dõi chúng tôi:
                            <a className='ml-3' href={inforCompany.facebook} target='_blank'>
                                <BsFacebook />
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            <a className='ml-3' href={inforCompany.twitter} target='_blank'>
                                <BsTwitterX />
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            {/* <MenubarTrigger className='rounded-none bg-green-600' >LIÊN HỆ</MenubarTrigger> */}
                        </MenubarMenu>
                        <Menubar className='flex items-center border-none rounded-none bg-slate-950 text-white'>
                            <MenubarMenu>
                                <a onClick={toggleLanguage} className='flex items'>
                                    {language === 'VN' ? (
                                        <img src="https://ali.vn/images/20181125/7d06376b2a774ab961641c41abd7b48f.png" title="EN" className='w-8 h-5' />

                                    ) : (
                                        <img src="https://ali.vn/images/20181125/0977eb1c450f42912716e7e8163095ba.png" title="VI" className='w-8 h-5' />
                                    )}
                                    <p className='ml-2'>{language === 'EN' ? 'VN' : 'EN'}</p>
                                </a>
                            </MenubarMenu>
                        </Menubar>
                    </Menubar>
                </div>
            )}
            {!isMobileView && !isExtraSmallView && (
                <Menubar className='justify-around border-none rounded-none bg-slate-950 text-white'>
                    <Menubar className='flex items-center border-none rounded-none bg-slate-950 text-white'>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                <TbMailOpened className='text-green-600 text-sm' />
                                <p className='ml-2 text-xs'>{inforCompany.email}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-center pointer-events-none'>
                                <AiFillPhone className='text-green-600 text-base' />
                                <p className='ml-2 text-xs'>{inforCompany.phone}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <Menubar className='flex items justify-between border-none rounded-none bg-slate-950 text-white'>
                        <MenubarMenu>
                            <a href="" className='text-xs'> Theo dõi chúng tôi:</a>
                            <a href={inforCompany.facebook} target='_blank'>
                                <BsFacebook className='ml-2' />
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            <a href={inforCompany.twitter} target='_blank'>
                                <BsTwitterX className='ml-2 mr-2' />
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className='rounded-none bg-green-600' >LIÊN HỆ</MenubarTrigger>
                        </MenubarMenu>
                        <Menubar className='flex items-center border-none rounded-none bg-slate-950 text-white '>
                            <MenubarMenu>
                                <a onClick={toggleLanguage} className='flex items'>
                                    {language === 'VN' ? (
                                        <img src="https://ali.vn/images/20181125/7d06376b2a774ab961641c41abd7b48f.png" title="EN" className='w-8 h-5' />
                                    ) : (
                                        <img src="https://ali.vn/images/20181125/0977eb1c450f42912716e7e8163095ba.png" title="VI" className='w-8 h-5' />
                                    )}
                                    <p className='ml-2 text-xs'>{language === 'EN' ? 'VN' : 'EN'}</p>
                                </a>
                            </MenubarMenu>
                        </Menubar>
                    </Menubar>
                </Menubar>

            )}
            {isExtraSmallView && (
                <Menubar className='flex flex-col items-center border-none rounded-none bg-slate-950 text-white h-full'>
                    <div className='flex items-center border-none rounded-none bg-slate-950 text-white'>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                <TbMailOpened className='text-green-600 text-sm' />
                                <p className='ml-2 text-xs'>{inforCompany.email}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center border-none rounded-none bg-slate-950 text-white'>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                <AiFillPhone className='text-green-600 text-base' />
                                <p className='ml-2 text-xs'>{inforCompany.phone}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center'>

                        <MenubarMenu>
                            <a href="" className='text-xs'> Theo dõi chúng tôi:</a>
                            <a href={inforCompany.facebook} target='_blank'>
                                <BsFacebook />
                            </a>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center'>
                        <MenubarMenu>
                            <a className='ml-2' href={inforCompany.twitter} target='_blank'>
                                <BsTwitterX />
                            </a>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center'>
                        <MenubarMenu>
                            {/* <MenubarTrigger className='rounded-none bg-green-600' >LIÊN HỆ</MenubarTrigger> */}
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center'>
                        <MenubarMenu>
                            <a onClick={toggleLanguage} className='flex items'>
                                {language === 'VN' ? (
                                    <img src="https://ali.vn/images/20181125/7d06376b2a774ab961641c41abd7b48f.png" title="EN" className='w-8 h-5' />

                                ) : (
                                    <img src="https://ali.vn/images/20181125/0977eb1c450f42912716e7e8163095ba.png" title="VI" className='w-8 h-5' />
                                )}
                                <p className='ml-2 text-xs'>{language === 'EN' ? 'VN' : 'EN'}</p>
                            </a>
                        </MenubarMenu>
                    </div>
                </Menubar>
            )}
        </>
    );
}

export default HeaderTop;
