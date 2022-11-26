import React from 'react'
import { classValue } from '../util/classValue'
import { ContainerSecond } from './ContainerSecond'

export const Info = ({homeContent}) => {
    const array = [];
    const info = () => {
        for (let i = 1; i < homeContent?.split('achievement-num').length; i++) {
            array[i-1] = {number: homeContent?.split('achievement-num')[i]?.split('>')[1]?.split('</')[0]}
        }
    
        for (let i = 1; i < homeContent?.split('achievement-description').length; i++) {
            array[i-1] = {number: array[i-1]?.number, description: homeContent?.split('achievement-description')[i]?.split('>')[1]?.split('</')[0]}
        }
    }
    info();
    return (
        <div className='bg-darkBg'>
            <ContainerSecond className='pb-[85px] pt-[100px]'>
                <div className='flex gap-[40px] justify-center flex-wrap'>
                    <div className='text-mainSecond'>
                <div className="h-0.5 w-[175px] bg-mainSecond absolute mt-[-50px] "></div>
                        <h1 className="uppercase text-4xl"><span className='font-bodoni'>Embody</span> <span className=' font-black'>Your<br/>Imagination</span></h1>
                        <h1 className='text-[248px] font-black'>{classValue(homeContent, 'years-experience')}</h1>
                        <p className="uppercase w-[136px] text-3xl font-black">Years experience</p>
                    </div>
                    <div className="max-w-[310px] flex flex-col gap-9 text-paragraph">
                        <h1 className="font-black text-[27px] uppercase text-white">About us</h1>
                        <p className='text-sm'>{classValue(homeContent, 'about')}</p>
                        <h1 className="font-black text-[27px] uppercase text-white">Vision</h1>
                        <p className="text-sm">{classValue(homeContent, 'vision')}</p>
                    </div>
                    <div className="max-w-[310px] flex flex-col gap-4 text-paragraph">
                        <h1 className="font-black text-[27px] uppercase text-white">OUR ACHIEVEMENTS</h1>
                        {
                            array.map(item => {
                                return (
                                    <>
                                        <p className="font-thin text-white text-5xl">{item.number}</p>
                                        <p className="text-sm">{item.description}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </ContainerSecond>
        </div>
    )
}
