'use client';
import React, { useEffect, useState } from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { useWindowSize } from 'react-use';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const { width } = useWindowSize();
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter()

    useEffect(() => {
        setIsMobile(width <= 768);
    }, [width]);

    const avatarSize = isMobile ? 'h-12 w-12' : 'h-15 w-15';

    const handleLogoClick = () => {
        router.push("/")
    };

    return (
        <>
            <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <Avatar className={`rounded-none ${avatarSize}`} >
                    <AvatarImage src="https://ali.vn/images/2018/11/25/f5ca9e4245f56cf599ee27e5eeaa08e9.png" alt="@ali" />
                    <AvatarFallback>ALI</AvatarFallback>
                </Avatar>
            </div>
        </>
    );
};

export default Logo;
