/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ContainerSecond } from './ContainerSecond'
import { Service } from './Service'

export const Services = () => {
    return (
        <div className='bg-white py-[50px] relative overflow-hidden'>
            <img src="./images/ServicesIcon.png" className='absolute top-[-300px] left-[-150px]' alt="" />
            <ContainerSecond className='z-20'>
                <div className="flex">
                    <h1 className="font-black text-5xl uppercase flex z-20">Our Services</h1>
                </div>
                <div className="flex justify-center mt-28 gap-6 flex-wrap">
                    <Service 
                        name='Interfaces' 
                        description='Aliquam vulputate, tortor nec commodo ultricies,viverra urna' 
                        image='./images/main.png'
                    />
                    <Service 
                        name='Moulds' 
                        description='The idea stats from the architect of the visual artist of the project.' 
                        image='./images/main.png'
                    />
                    <Service 
                        name='Garden Furniture' 
                        description='Aliquam vulputate, tortor nec commodo ultricies,viverra urna'
                        image='./images/main.png' 
                    />
                    <Service 
                        name='Holograms' 
                        description='Aliquam vulputate, tortor nec commodo ultricies,viverra urna' 
                        image='./images/main.png'
                    />
                </div>
                <div className="flex gap-14 justify-between flex-wrap items-end">
                    <div className='z-10'>
                        <hr className="w-35 bg-main mb-8 h-0.5" />
                        <p className="uppercase font-[Teko] text-2xl font-medium w-[73px] leading-none">Our services</p>
                    </div>
                    <div className="flex flex-wrap gap-12 z-10">
                        <button className='group font-medium'>
                            <hr className="h-1 w-[30px] bg-main opacity-0 group-hover:opacity-100 mb-1" />
                            <p className='opacity-50 group-hover:opacity-100'>Home Decor</p>
                        </button>
                        <button className='group font-medium'>
                            <hr className="h-1 w-[30px] bg-main opacity-100 mb-1" />
                            <p className='opacity-100'>Interior Design</p>
                        </button>
                        <button className='group font-medium'>
                            <hr className="h-1 w-[30px] bg-main opacity-0 group-hover:opacity-100 mb-1" />
                            <p className='opacity-50 group-hover:opacity-100'>Office design</p>
                        </button>
                        <button className='group font-medium'>
                            <hr className="h-1 w-[30px] bg-main opacity-0 group-hover:opacity-100 mb-1" />
                            <p className='opacity-50 group-hover:opacity-100'>Light Decor</p>
                        </button>
                    </div>
                </div>
            </ContainerSecond>
        </div>
    )
}