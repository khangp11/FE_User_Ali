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

const slideShow = [
    {
        name: "Hệ thống vận hành xe du lịch chuyên nghiệp và hiệu quả ",
        description: "Hệ thống quản lý và điều hành xe dịch vụ, xe du lịch, xe cho thuê chuyên nghiệp. Phù hợp với các công ty du lịch lữ hành và nhà xe chuyên kinh doanh xe tuyến.",
        imageUrl: "https://ali.vn/images/20190625/2ea649c59b62defabddea4a77e94d02f.jpg"
    },
    {
        name: "Hệ thống vận hành xe du lịch chuyên nghiệp và hiệu quả ",
        description: "Hệ thống quản lý và điều hành xe dịch vụ, xe du lịch, xe cho thuê chuyên nghiệp. Phù hợp với các công ty du lịch lữ hành và nhà xe chuyên kinh doanh xe tuyến.",
        imageUrl: "https://ali.vn/images/20190625/5638e9413295d506cbf89e8ecfb582ec.jpg"
    },
    {
        name: "Hệ thống vận hành xe du lịch chuyên nghiệp và hiệu quả ",
        description: "Hệ thống quản lý và điều hành xe dịch vụ, xe du lịch, xe cho thuê chuyên nghiệp. Phù hợp với các công ty du lịch lữ hành và nhà xe chuyên kinh doanh xe tuyến.",
        imageUrl: "https://ali.vn/images/20190625/78ca3cb825a6ad2e29bb56054bf9686d.jpg"
    },
];

export function CarouselPlugin() {
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
                    {slideShow.map((content, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <div className="relative w-full h-96">
                                <div className="absolute inset-0 bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${content.imageUrl})` }}></div>
                                <div className="absolute inset-y-0 left-[10%] flex flex-col justify-center items-start text-white w-3/5">
                                    <p className="text-5xl font-bold mb-4">{content.name}</p>
                                    <p className="text-lg">{content.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

    )
}
