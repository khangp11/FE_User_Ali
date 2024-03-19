'use client'
import React, { useState, useEffect } from 'react';
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

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
                    <Menubar className='justify-center border-none rounded-none bg-blue-950 text-white'>
                        <Menubar className='items-center border-none rounded-none bg-blue-950 text-white'>
                            <MenubarMenu>
                                <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                    </svg>
                                    <p className='ml-2'>{inforCompany.email}</p>
                                </MenubarTrigger>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                    </svg>
                                    <p className='ml-2'>{inforCompany.phone}</p>
                                </MenubarTrigger>
                            </MenubarMenu>
                        </Menubar>
                    </Menubar>

                    <Menubar className='justify-center border-none rounded-none bg-blue-950 text-white'>
                        <MenubarMenu>
                            Theo dõi chúng tôi:
                            <a className='ml-2' href={inforCompany.facebook} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"></path>
                                </svg>
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            <a className='ml-2' href={inforCompany.twitter} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 30 30">
                                    <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                                </svg>
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>LIÊN HỆ</MenubarTrigger>
                        </MenubarMenu>
                        <Menubar className='flex items-center border-none rounded-none bg-blue-950 text-white'>
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
                <Menubar className='justify-around  border-none rounded-none bg-blue-950 text-white'>
                    <Menubar className='flex items-center border-none rounded-none bg-blue-950 text-white'>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                </svg>
                                <p className='ml-2'>{inforCompany.email}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                                <p className='ml-2'>{inforCompany.phone}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <Menubar className='border-none rounded-none bg-blue-950 text-white'>
                        <MenubarMenu>
                            Theo dõi chúng tôi:
                            <a className='ml-2' href={inforCompany.facebook} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"></path>
                                </svg>
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            <a className='ml-2' href={inforCompany.twitter} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 30 30">
                                    <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                                </svg>
                            </a>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>LIÊN HỆ</MenubarTrigger>
                        </MenubarMenu>
                        <Menubar className='flex items-center border-none rounded-none bg-blue-950 text-white'>
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
                </Menubar>
            )}
            {isExtraSmallView && (
                <Menubar className='flex flex-col items-center border-none rounded-none bg-blue-950 text-white h-full'>
                    <div className='flex items-center border-none rounded-none bg-blue-950 text-white'>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                                </svg>
                                <p className='ml-2'>{inforCompany.email}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center border-none rounded-none bg-blue-950 text-white'>
                        <MenubarMenu>
                            <MenubarTrigger className='flex items-stretch pointer-events-none'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                                <p className='ml-2'>{inforCompany.phone}</p>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center'>

                        <MenubarMenu>
                            Theo dõi chúng tôi:
                            <a href={inforCompany.facebook} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="20" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"></path>
                                </svg>
                            </a>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center'>
                        <MenubarMenu>
                            <a className='ml-2' href={inforCompany.twitter} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0 0 30 30">
                                    <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                                </svg>
                            </a>
                        </MenubarMenu>
                    </div>
                    <div className='flex items-center'>
                        <MenubarMenu>
                            <MenubarTrigger>LIÊN HỆ</MenubarTrigger>
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
                                <p className='ml-2'>{language === 'EN' ? 'VN' : 'EN'}</p>
                            </a>
                        </MenubarMenu>
                    </div>
                </Menubar>
            )}
        </>
    );
}

export default HeaderTop;
