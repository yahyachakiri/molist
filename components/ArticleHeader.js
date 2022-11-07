import React from 'react'
import { ContainerSecond } from './ContainerSecond'

export const ArticleHeader = ({title, image, white}) => {
    return (
        <div style={{background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  className='uppercase py-[150px] sm:py-[200px] font-black text-6xl sm:text-8xl bg-cover'>
            <ContainerSecond className={`${white ? 'text-white' : ''}`}>
                {title}
            </ContainerSecond>
        </div>
    )
}
