'use client';
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Menu from '../header/Menu';
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const company = {
    addressTitle: "Địa chỉ",
    address: "47 Điện Biên Phủ, DaKao, Quận 1, TP HCM",
    phoneTitle: "Gọi cho chúng tôi",
    phone: "084.277.7777",
    emailTitle: "Email",
    email: "info@ali.vn",
    facebook: "https://www.facebook.com/alivesms/",
    twitter: "https://www.facebook.com/alivesms/"
}
const options = [
    {
        name: "Tin Tức Công Nghệ",
        href: "/blog-nhan-vien"

    },
    {
        name: "Blog Nhân Viên",
        href: "/blog-nhan-vien"

    },
    {
        name: "Thư Viện Kiến Thức",
        href: "/blog-nhan-vien"

    },
    {
        name: "Hướng Dẫn Sử Dụng",
        href: "/blog-nhan-vien"

    },
]
const optionsService = [
    {
        name: "Xe taxi"
    },
    {
        name: "Xe du lịch"
    },
    {
        name: "Logistics"
    },
    {
        name: "Thẻ Thanh Toán"
    }
]

const Footer = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const [isExtraSmallView, setIsExtraSmallView] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(true);

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
    const menuNavigate = [
        {
            name: "TRANG CHỦ",
            href: "/"
        },
        {
            name: "SẢN PHẨM",
            href: "sanpham"
        },
        {
            name: "ĐỐI TÁC",
            href: "doitac"
        },
        {
            name: "TUYỂN DỤNG",
            href: "tuyendung"
        },
        {
            name: "THÔNG TIN DỊCH VỤ",
            href: "tongtindichvu"
        },
    ]
    const Copyright = {
        title: "Copyright © 2024, All Right Reserved",
        name: " ALI CORP"
    }

    return (
        <footer className='bg-neutral-900 mt-5'>
            {isMobileView && (
                <div className='justify-center' style={{ padding: '0 10%' }} >
                    <div className='flex items-center mt-5'>
                        <div className='text-orange-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div className='ml-2'>
                            <h2 className='text-white'>Địa chỉ</h2>
                            <samp className='text-gray-500'>{company.address}</samp>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <div className='text-orange-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div className='ml-2'>
                            <h2 className='text-white'>Gọi cho chúng tôi</h2>
                            <samp className='text-gray-500'>{company.phone}</samp>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <div className='text-orange-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                            </svg>
                        </div>
                        <div className='ml-2'>
                            <h2 className='text-white'>Email</h2>
                            <samp className='text-gray-500'>{company.email}</samp>
                        </div>
                    </div>
                </div>
            )}
            {!isMobileView && !isExtraSmallView && (
                <div className='flex items justify-evenly'>
                    <div className='flex items-center mt-5'>
                        <div className='text-orange-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </div>
                        <div className='ml-6'>
                            <h2 className='text-white'>{company.addressTitle}</h2>
                            <samp className='text-gray-500'>{company.address}</samp>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <div className='text-orange-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                        </div>
                        <div className='ml-6'>
                            <h2 className='text-white'>{company.phoneTitle}</h2>
                            <samp className='text-gray-500'>{company.phone}</samp>
                        </div>
                    </div>
                    <div className='flex items-center mt-5'>
                        <div className='text-orange-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                            </svg>
                        </div>
                        <div className='ml-6'>
                            <h2 className='text-white'>{company.emailTitle}</h2>
                            <samp className='text-gray-500'>{company.email}</samp>
                        </div>
                    </div>
                </div>
            )}
            {isExtraSmallView && (
                <div className='justify-center' style={{ padding: '0 5%' }} >
                    <div className='text-orange-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                    <div className='ml-6'>
                        <h2 className='text-white'>{company.addressTitle}</h2>
                        <samp className='text-gray-500'>{company.address}</samp>
                    </div>
                    <div className='text-orange-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                    </div>
                    <div className='ml-6'>
                        <h2 className='text-white'>{company.phoneTitle}</h2>
                        <samp className='text-gray-500'>{company.phone}</samp>
                    </div>
                    <div className='text-orange-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>
                    </div>
                    <div className='ml-6'>
                        <h2 className='text-white'>{company.emailTitle}</h2>
                        <samp className='text-gray-500'>{company.email}</samp>
                    </div>
                </div>
            )}

            <hr className="mx-auto my-4 w-5/6 border-neutral-700" />



            {isMobileView && (
                <div className='justify-center'>
                    <div>
                        <div className='flex items-center justify-center'>
                            {optionsService.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <a className='text-gray-500'>{item.name}</a>
                                        {index !== optionsService.length - 1 && <span className='mx-1 text-gray-500'> - </span>}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        <br />
                        <div className='flex items-center justify-center'>
                            <a href={company.facebook} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"></path>
                                </svg>
                            </a>
                            <a href={company.twitter} target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                                <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        {options.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center justify-center'>
                                    <a className='text-gray-400'>{item.name}</a>
                                </div>
                            );
                        })}
                    </div>
                    <div >
                        <h2 className='text-gray-500 flex justify-center'>Đăng ký nhận thông tin sản phẩm và dịch vụ.</h2>
                        <div className="flex items-center justify-center w-full">
                            <div className="max-w-sm space-x-2 flex items-center">
                                <Input className="bg-slate-600 border-slate-600 hover:border-slate-600" type="email" placeholder="Email" />
                                <Button className='bg-slate-400' type="submit">Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {(
                <div className='flex items justify-evenly'>
                    <div>
                        <div className='flex'>
                            {optionsService.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <a className='text-gray-500'>{item.name}</a>
                                        {index !== optionsService.length - 1 && <span className='mx-1 text-gray-500'> - </span>}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                        <br />
                        <div className='flex items-center justify-center'>
                            <a href={company.facebook} target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M19.181,11h-1.729 C16.376,11,16,11.568,16,12.718V14h3.154l-0.428,3H16v7.95C15.671,24.982,15.338,25,15,25c-0.685,0-1.354-0.07-2-0.201V17h-3v-3h3 v-1.611C13,9.339,14.486,8,17.021,8c1.214,0,1.856,0.09,2.16,0.131V11z"></path>
                                </svg>
                            </a>
                            <a href={company.twitter} target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                                <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        {options.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center'>
                                    <a className='text-gray-400'>{item.name}</a>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <h2 className='text-gray-500'>Đăng ký nhận thông tin sản phẩm và dịch vụ.</h2>
                        <br />
                        <div className=" flex w-full max-w-sm items-center space-x-2">
                            <Input className="bg-slate-600 border-slate-600 hover:border-slate-600" type="email" placeholder="Email" />
                            <Button className='bg-slate-400' type="submit">Submit</Button>
                        </div>
                    </div>
                </div>
            )}



            {isMobileView && (
                <div>
                    {isMenuVisible && (
                        <Menubar className='flex item justify-around border-none rounded-none bg-neutral-800 h-20 mt-5'>
                            <h2 className='text-gray-500'>{Copyright.title}
                                <a className='text-orange-700'>{Copyright.name}</a>
                            </h2>
                        </Menubar>
                    )}
                </div>
            )}
            {!isMobileView && !isExtraSmallView && (
                <Menubar className='flex item justify-around border-none rounded-none bg-neutral-800 h-20 mt-5'>
                    <h2 className='text-gray-500'>{Copyright.title}
                        <a className='text-orange-700'>{Copyright.name}</a>
                    </h2>
                    <div className='flex items justify-center'>
                        {menuNavigate.map((item, index) => {
                            return (
                                <a href={item.href} key={index} className="block px-4 py-2 text-gray-500 text-sm hover:text-orange-600">{item.name}</a>
                            );
                        })}
                    </div>
                </Menubar>
            )}
            {isExtraSmallView && (
                <div>
                    {isMenuVisible && (
                        <Menubar className='flex item justify-around border-none rounded-none bg-neutral-800 h-20 mt-5'>
                            <h2 className='text-gray-500'>{Copyright.title}
                                <a className='text-orange-700'>{Copyright.name}</a>
                            </h2>
                        </Menubar>
                    )}
                </div>
            )}

        </footer>
    )
}

export default Footer