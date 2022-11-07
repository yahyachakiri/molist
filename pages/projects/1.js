/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { ContainerSecond } from '../../components/ContainerSecond'

export default function Project() {
    return (
        <div className='pt-32 sm:pt-52 pb-40 sm:pb-60 bg-white'>
            <img src=".././images/project.png" alt="" className='w-full h-[300px] sm:h-[633px] object-cover object-center' />
            <ContainerSecond>
                <h1 className="text-6xl sm:text-8xl font-black uppercase mt-32 sm:mt-40">Project Name</h1>
                <hr className="w-35 bg-main my-7 h-0.5 w-40 inline-block" />
                <div className="flex flex-wrap gap-10">
                    <div className='w-[300px]'>
                        <p className="font-[Teko] text-3xl uppercase">Location:</p>
                        <p className='text-lg text-paragraph'>Poland</p>
                    </div>
                    <div className='w-[300px]'>
                        <p className="font-[Teko] text-3xl uppercase">Completed:</p>
                        <p className='text-lg text-paragraph'>January 2020</p>
                    </div>
                    <div className='w-[300px]'>
                        <p className="font-[Teko] text-3xl uppercase">Area:</p>
                        <p className='text-lg text-paragraph'>1,364 sqr</p>
                    </div>
                    <div className='w-[300px]'>
                        <p className="font-[Teko] text-3xl uppercase">Client:</p>
                        <p className='text-lg text-paragraph'>Poland Art Museum Nation</p>
                    </div>
                    <div className='w-[300px]'>
                        <p className="font-[Teko] text-3xl uppercase">Architect:</p>
                        <p className='text-lg text-paragraph'>Robert Downey Jr</p>
                    </div>
                </div>
                <div className="pt-24">
                    <h2 className='font-[Teko] text-4xl font-medium mb-7'>The Challenges</h2>
                    <p className="text-paragraph">
                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                    Inflexibility is another challenges. Map out your plan and continually review your plan versus reality. Be willing to make changes when you see your plan is failing. Without a plan or refusing to gauge success against your plan has doomed many companies to continue down a road to failure. Have a willingness to change the plan and learn. Fail teachs you a lot. 
                    </p>
                </div>
                <div className="pt-24">
                    <h2 className='font-[Teko] text-4xl font-medium mb-7'>The Challenges</h2>
                    <p className="text-paragraph">
                    Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                    Inflexibility is another challenges. Map out your plan and continually review your plan versus reality. Be willing to make changes when you see your plan is failing. Without a plan or refusing to gauge success against your plan has doomed many companies to continue down a road to failure. Have a willingness to change the plan and learn. Fail teachs you a lot. 
                    </p>
                </div>
                <div className="mt-40">
                    <img src=".././images/project.png" className='h-[300px] sm:h-[706px] object-cover object-center' alt="" />
                </div>
            </ContainerSecond>
        </div>
    )
}
