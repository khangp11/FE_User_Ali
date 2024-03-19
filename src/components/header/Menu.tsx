'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter từ next/router

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

import Logo from './Logo';

const Menu = ({ showLogo = true, className }: { showLogo?: boolean; className?: string }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) {
                setIsMobileView(true);
            } else {
                setIsMobileView(false);
                setIsMenuVisible(true);
            }
        }
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const Copyright = {
        name: "Copyright © 2024, All Right Reserved ALI CORP"
    }
    const menuNavigate = [
        {
            name: "TRANG CHỦ",
            href: "/"
        },
        {
            name: "SẢN PHẨM",
            href: "product"
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

    return (
        <>
            <div className={`flex items-center justify-around ${className}`}>
                {showLogo ? (
                    <Logo />
                ) : (
                    <h2>{Copyright.name}</h2>
                )}
                {isMobileView ? (
                    <div>
                        {isMenuVisible && (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="py-2">
                                    {menuNavigate.map((item, index) => {
                                        return (
                                            <a key={index} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{item.name}</a>
                                        );
                                    })}
                                </DropdownMenuContent>

                            </DropdownMenu>
                        )}
                    </div>
                ) : (
                    <Menubar className='border-none'>
                        {menuNavigate.map((item, index) => {
                            return (
                                <a href={item.href} key={index} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{item.name}</a>
                            );
                        })}
                    </Menubar>
                )}
            </div>
        </>
    );
};

export default Menu;
