'use client';
import React from 'react'
import Label from '../lable/lableProps'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { headers } from 'next/headers'

const TechnologyNews = () => {

    const TechnologyNewsTitle = {
        name: 'Tin tức công nghệ'
    }

    const news = [
        {
            id: "123",
            title: "Satoshi Nakamoto tiến gần đến danh sách 25 cá nhân giàu nhất thế giới",
            date: "21:58 26/02/2024",
            description: "Năm 2024 đã mở ra như một năm hưng thịnh đối với Bitcoin, khi vốn hóa thị trường vượt qua cột mốc 1 nghìn tỷ USD,",
            image: "https://ali.vn/assets/img/default.jpg"
        },
        {
            id: "1234",
            title: "Satoshi Nakamoto tiến gần đến danh sách 25 cá nhân giàu nhất thế giới",
            date: "21:58 26/02/2024",
            description: "Năm 2024 đã mở ra như một năm hưng thịnh đối với Bitcoin, khi vốn hóa thị trường vượt qua cột mốc 1 nghìn tỷ USD,",
            image: "https://ali.vn/assets/img/default.jpg"
        },
        {
            id: "12345",
            title: "Satoshi Nakamoto tiến gần đến danh sách 25 cá nhân giàu nhất thế giới",
            date: "21:58 26/02/2024",
            description: "Năm 2024 đã mở ra như một năm hưng thịnh đối với Bitcoin, khi vốn hóa thị trường vượt qua cột mốc 1 nghìn tỷ USD,",
            image: "https://ali.vn/assets/img/default.jpg"
        }
    ]

    const OnclickDetail = (item: any) => {

        console.log(item);

    };

    return (
        <>
            <div>
                <Label className='flex items justify-center font-bold text-2xl mt-2' text={TechnologyNewsTitle.name} />
                <hr style={{ width: '6%', margin: 'auto', borderBottom: '3px solid orange', marginTop: '12px' }} />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10' style={{ padding: '0 10%' }}>
                {news.map((item, index) => (
                    <div key={index}>
                        <a href="" onClick={() => OnclickDetail(item)}>
                            <Card className='rounded-none shadow-md overflow-hidden h-auto transition duration-300 transform hover:scale-105 '>
                                <CardHeader>
                                    <CardTitle className='mb-2 text-base'>
                                        {item.title}
                                    </CardTitle>

                                    <h6 className='text-xs text-gray-400 font-bold mt-2'>{item.date}</h6>

                                    <img className='mt-3' src={item.image} alt="" />
                                    <CardDescription>{item.description}</CardDescription>
                                </CardHeader>
                                <label onClick={() => OnclickDetail(item)} className='ml-5 text-orange-700 font-bold text-sm'>Chi tiết</label>
                            </Card>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TechnologyNews