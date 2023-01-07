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
                        <h1 className="uppercase text-4xl"><span className='font-bodoni'>Embody</span> <span className=' font-helveticaneue-black'>Your<br/>Imagination</span></h1>
                        <h1 className='text-[248px] font-helveticaneue-black'>{classValue(homeContent, 'years-experience')}</h1>
                        <p className="uppercase w-[136px] text-3xl font-helveticaneue-black">Years experience</p>
                    </div>
                    <div className="max-w-[310px] flex flex-col gap-9 text-paragraph">
                        <h1 className="font-helveticaneue-black text-[27px] uppercase text-white">About us</h1>
                        <p className='text-sm'>{classValue(homeContent, 'about')}</p>
                        <h1 className="font-helveticaneue-black text-[27px] uppercase text-white">Vision</h1>
                        <p className="text-sm">{classValue(homeContent, 'vision')}</p>
                    </div>
                    <iframe width='853' height='480' src='https://www.dreamreality.com.tr/3d-model/molist/fullscreen/' frameborder='0' allow='vr' allowfullscreen='allowfullscreen'></iframe>
                </div>
            </ContainerSecond>
        </div>
    )
}
