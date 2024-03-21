'use client';
import React from 'react'

const breadcrumb = () => {

    return (
        <>
            <div className='grid grid-cols-8 gap-4' style={{
                backgroundImage: "url('https://ali.vn//assets/img/bg1.jpg')",
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(50%)',
            }}>
                <a className='col-start-2 col-end-2 h-32 flex items-center text-white text-2xl font-bold'>SẢN PHẨM</a>
                <a className='col-end-10 col-span-3 flex items-center text-white text-xs mb-2' href="">
                    TRANG CHỦ - SẢN PHẨM
                </a>
            </div>
        </>
    )
}

export default breadcrumb