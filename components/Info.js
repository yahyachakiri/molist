import React from 'react'
import { ContainerSecond } from './ContainerSecond'

export const Info = () => {
    return (
        <div className='bg-darkBg'>
            <ContainerSecond className='pb-[85px] pt-[100px]'>
                <div className='flex gap-[40px] justify-center flex-wrap'>
                    <div className='text-mainSecond'>
                <div className="h-0.5 w-[175px] bg-mainSecond absolute mt-[-50px] "></div>
                        <h1 className="uppercase text-4xl"><span className='font-bodoni'>Embody</span> <span className=' font-black'>Your<br/>Imagination</span></h1>
                        <h1 className='text-[248px] font-black'>20</h1>
                        <p className="uppercase w-[136px] text-3xl font-black">Years experience</p>
                    </div>
                    <div className="max-w-[310px] flex flex-col gap-9 text-paragraph">
                        <h1 className="font-black text-[27px] uppercase text-white">About us</h1>
                        <p className='text-sm'>Molist is a company specialized in the production of interior and exterior decoration materials, both modern and antique. Our factory is supervised by a large qualified technical elite, with great experience in the field. We translate and study the ideas from A to Z, where we offer the customer a ready and apt product according to the requirements and standards agreed upon.</p>
                        <h1 className="font-black text-[27px] uppercase text-white">Vision</h1>
                        <p className="text-sm">Our company aspires to reach a discussion of the entity of global factories in the field of molds and the incarnation of engineering forms of architecture. We also seek to give a remarkable touch to modern facades with contemporary materials of international quality and solidity.</p>
                    </div>
                    <div className="max-w-[310px] flex flex-col gap-4 text-paragraph">
                        <h1 className="font-black text-[27px] uppercase text-white">OUR ACHIEVEMENTS</h1>
                        <p className="font-thin text-white text-5xl">2000</p>
                        <p className="text-sm">Torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibu</p>
                        <p className="font-thin text-white text-5xl">500</p>
                        <p className="text-sm">Employees & Staffs worldwide at present</p>
                        <p className="font-thin text-white text-5xl">1.224</p>
                        <p className="text-sm">Suspendisse faucibus sed dolor eget posuere Sed id interdum urna. Nam ac elit a ante commodo</p>
                    </div>
                </div>
            </ContainerSecond>
        </div>
    )
}
