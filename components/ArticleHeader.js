import React from 'react'
import { ContainerSecond } from './ContainerSecond'

export const ArticleHeader = ({title, image}) => {
    return (
        <div style={{background: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}  className='uppercase py-[150px] sm:py-[200px] font-black text-6xl sm:text-8xl bg-cover'>
            <ContainerSecond>
                About us
            </ContainerSecond>
        </div>
    )
}
