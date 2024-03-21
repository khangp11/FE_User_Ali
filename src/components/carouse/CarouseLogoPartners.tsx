'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Label from "../lable/lableProps";

const slideShow = [
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/12/94150b88118b81938cee016c11faf1c7.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/12/e55079e4b480aa05cdb61bd5f7bc2366.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/11/925a40479939c6c3c268c99d816d64f7.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/12/6a14b6353912387b41846b0e2dfd80b0.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/12/8077c1f3b67cb1bbf09e87e67e5e8d88.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/12/c28febfda1a8ff854ba0a31049cc106e.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/11/1e44b8cb098026cf27c00ad8d72b806d.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/11/3411cfd4dfc07a9a595e7eed40facc48.png"
    }
];

export function CarouseLogoPartners() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [currentContentIndex, setCurrentContentIndex] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)

        api.on("select", () => {
            setCurrentContentIndex(api.selectedScrollSnap() % count)
        })
    }, [api, count])

    return (
        <>
            <div className="relative w-full h-28 mt-16">
                <Carousel setApi={setApi} className="flex items justify-center w-11/12 h-full mx-auto overflow-hidden">
                    <CarouselContent className="flex items-center">
                        {slideShow.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6 hover:scale-105">
                                <Avatar className='rounded-none w-28 h-20 ' >
                                    <AvatarImage src={item.imageUrl} alt="" />
                                </Avatar>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}
