'use client';
import React from 'react'
import Menu from '@/components/header/Menu'
import HeaderTop from '@/components/headerTop/headerTop'
import Breadcrumb from '@/components/breadcrumb/breadcrumb'
import Footer from '@/components/footer/Footer';
import Label from '../components/lable/lableProps'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const products = {
    text: "Sản Phẩm",
    description: "Chúng tôi có nhiều kinh nghiệm trong triển khai dịch vụ Điều Hành Xe Taxi với quy mô lớn, với một hệ thống tích hợp trọn vẹn bao gồm: (1) phần mềm xử lý tổng đài (2) phần mềm quản trị admin (3) phần mềm ứng dụng cho lái xe (4) phần mềm ứng dụng cho khách hàng đặt xe. Bên cạnh đó, chúng tôi có kinh nghiệm trong việc triển khai phần mềm Điều Hành Xe Đi Tour Du Lịch, phục vụ cho các công ty du lịch lữ hành (một trong các đối tác của chúng tôi, Tổng công ty Vietravel, có quy mô phủ rất rộng với 26 chi nhánh trong nước và 12 chi nhánh quốc tế)."
}
const productItems = [
    {
        icons: "",
        name: "phần mềm điều hành taxi",
        description: "Phần mềm điều hành taxi gồm có 03 hệ thống chính (1) Phần mềm xử lý cuộc gọi phía tổng đài (2) Phần",
        image: "https://ali.vn/images/2019/06/26/4bb5b8b483dad86e454812024ca01536.jpg"
    },
    {
        icons: "aaaa",
        name: "phần mềm điều hành taxi",
        description: "Phần mềm điều hành taxi gồm có 03 hệ thống chính (1) Phần mềm xử lý cuộc gọi phía tổng đài (2) Phần",
        image: "https://ali.vn/images/2019/06/26/afc3c5c228b00e7d9f480d8e4841a779.jpg"
    },
    {
        icons: "aaaa",
        name: "phần mềm điều hành taxi",
        description: "Phần mềm điều hành taxi gồm có 03 hệ thống chính (1) Phần mềm xử lý cuộc gọi phía tổng đài (2) Phần",
        image: "https://ali.vn/images/2019/11/23/98e49df14f6fb77c4a1ee7d8d8195686.jpg"
    },
    {
        icons: "aaaa",
        name: "phần mềm điều hành taxi",
        description: "Phần mềm điều hành taxi gồm có 03 hệ thống chính (1) Phần mềm xử lý cuộc gọi phía tổng đài (2) Phần",
        image: "https://ali.vn/images/2019/06/26/c7592497f5601038ec4375eb3faa5145.jpg"
    },
    {
        icons: "aaaa",
        name: "phần mềm điều hành taxi",
        description: "Phần mềm điều hành taxi gồm có 03 hệ thống chính (1) Phần mềm xử lý cuộc gọi phía tổng đài (2) Phần",
        image: "https://ali.vn/images/2019/06/26/c644507e3ff93f5679b52a67d2d7cb88.jpg"
    },
    {
        icons: "aaaa",
        name: "phần mềm điều hành taxi",
        description: "Phần mềm điều hành taxi gồm có 03 hệ thống chính (1) Phần mềm xử lý cuộc gọi phía tổng đài (2) Phần",
        image: "https://ali.vn/images/2019/06/26/c644507e3ff93f5679b52a67d2d7cb88.jpg"
    }
]



const page = () => {
    return (
        <>
            <HeaderTop />
            <Menu />
            <Breadcrumb />

            <Label text={`${products.text}`} className="flex items justify-center text-3xl mt-2 font-bold" />
            <Label text={`${products.description}`} className='flex items-center justify-center font-light w-3/5 mx-auto mt-2' />

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10' style={{ padding: '0 10%' }}>
                {productItems.map((item, index) => (
                    <div key={index} className="relative">
                        <Card className='rounded-none shadow-md overflow-hidden h-72'>
                            <CardHeader>
                                <CardTitle className='flex items-center justify-center'>
                                    <img className=' w-full' src={item.image} alt="" />
                                </CardTitle>

                                <CardTitle className='font-sans text-lg text-center'>{item.name}</CardTitle>

                                <CardDescription className='flex items-center justify-center m-3'>{item.description}</CardDescription>
                            </CardHeader>

                        </Card>
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 transition duration-300 hover:bg-opacity-25"></div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    )
}

export default page