'use client';
import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Label from '../lable/lableProps';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import BackgroundSection from '../background/BackgroundSection';

const slideShow = [
    {
        name: "Ông Hồ Huy",
        description: "Tập đoàn Mai Linh rất quan tâm đến công nghệ, chúng tôi cất công đi nhiều nơi để học hỏi cái hay của thế giới và mang về áp dụng cho Mai Linh. Thời gian qua, thông qua việc hợp tác với ALI chúng tôi triển khai thành công công nghệ gọi xe, điều hành xe qua nền tảng ứng dụng Mai Linh Online. Với nền tảng đang có Mai Linh sẽ phát triển mạnh trong thời gian tới.",
        imageUrl: "https://ali.vn/images/2019/06/23/01d3e7e495e40e078b6d81a064886a51.jpg",
        position: "Chủ tịch Tập đoàn Mai Linh"
    },
    {
        name: "Ông Hồ Huy",
        description: "Tập đoàn Mai Linh rất quan tâm đến công nghệ, chúng tôi cất công đi nhiều nơi để học hỏi cái hay của thế giới và mang về áp dụng cho Mai Linh. Thời gian qua, thông qua việc hợp tác với ALI chúng tôi triển khai thành công công nghệ gọi xe, điều hành xe qua nền tảng ứng dụng Mai Linh Online. Với nền tảng đang có Mai Linh sẽ phát triển mạnh trong thời gian tới.",
        imageUrl: "https://ali.vn/images/2019/06/23/01d3e7e495e40e078b6d81a064886a51.jpg",
        position: "Chủ tịch Tập đoàn Mai Linh"
    },
    {
        name: "Ông Hồ Huy",
        description: "Tập đoàn Mai Linh rất quan tâm đến công nghệ, chúng tôi cất công đi nhiều nơi để học hỏi.",
        imageUrl: "https://ali.vn/images/2019/06/23/01d3e7e495e40e078b6d81a064886a51.jpg",
        position: "Chủ tịch Tập đoàn Mai Linh"
    }
];
const custosmer = {
    title: "khách hàng nói gì về chúng tôi"
}


export function CarouseCustomer() {
    const [api, setApi] = React.useState<CarouselApi>()
    return (
        <>
            <div>
                <Label text={`${custosmer.title}`} className="flex items justify-center text-3xl mt-4 font-bold" />
                <hr style={{ width: '6%', margin: 'auto', borderBottom: '3px solid orange', marginTop: '12px' }} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4 mt-10' style={{ padding: '0 10%' }}>
                <Carousel setApi={setApi} className="w-full h-full mx-auto overflow-hidden">
                    <CarouselContent>
                        {slideShow.map((item, index) => (
                            <CarouselItem key={index} className="flex items justify-center">
                                <div className="w-4/5 h-96">
                                    <br /><br />
                                    <p className="text-black font-medium italic text-center relative pl-14">
                                        <span className="absolute left-0 top-0 mt-1 transform -translate-y-2/3 text-6xl text-green-600"><RiDoubleQuotesL /></span>

                                        <samp className='m-5 text-black font-medium italic text-center w-3/4'>{item.description}</samp>

                                        <span className="absolute right-0 bottom-0 mb-0 transform translate-y-3/4 text-6xl text-green-600"><RiDoubleQuotesR /></span>
                                    </p>
                                    <div className='flex items justify-center bg-white h-40 items-center'>
                                        <Avatar className='h-24 w-24' >
                                            <AvatarImage src={item.imageUrl} alt="@ali" />
                                            <AvatarFallback>ALI</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <h4 className='flex items justify-center font-bold'>
                                        {item.position}
                                    </h4>
                                    <span className='flex items justify-center mt-2'>{item.name}</span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}