import React from 'react'
import { ContainerSecond } from './ContainerSecond'

export const ArticleHeader = ({title, image, white, small}) => {
    return (
        <div style={{background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  className={`uppercase ${small ? 'py-[75px] sm:py-[100px]' : 'py-[150px] sm:py-[200px]'} font-black text-6xl sm:text-8xl bg-cover relative`}>
            <div className={`absolute w-full h-full top-0 left-0 ${white ? 'bg-lightblack' : 'bg-lightwhite' } flex jutify-start items-center`}>
            <ContainerSecond className={`${white ? 'text-white' : ''} font-helveticaneue-black grow`}>
                {title}
            </ContainerSecond>
            </div>
        </div>
    )
}
