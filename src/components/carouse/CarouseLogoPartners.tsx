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

const slideShow = [
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2018/12/12/fce1a4e92b9e2e47f446da2e625968ba.png"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
    },
    {
        name: "Hệ thống vận hành xe dịch vụ ",
        imageUrl: "https://ali.vn/images/2019/05/05/414a04514b65f26520450183f11b0716.jpg"
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
        <div className="relative w-full h-full">
            <Carousel setApi={setApi} className="w-full h-full mx-auto overflow-hidden">
                <CarouselContent>
                    {slideShow.map((item, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <Avatar className='rounded-none w-32' >
                                <AvatarImage src={item.imageUrl} alt="" />
                            </Avatar>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}
