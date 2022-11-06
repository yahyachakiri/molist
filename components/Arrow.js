import React from 'react'

export const Arrow = ({left, right, bg}) => {
    return (
        <button className={`w-[70px] h-[70px] flex items-center justify-center ${bg ? bg : 'bg-darkBg'} transition duration-300 hover:bg-main`}>
            {
                right ?
                <svg xmlns="http://www.w3.org/2000/svg" width="13.48" height="30.59"><path fill="#fff" d="M1.8 0 .19 1.19l10.47 14.28L0 29.42l1.66 1.17 10.73-13.78 1.09-1.4-.89-1.17Z" data-name="Path 41"/></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="13.48" height="30.59"><path fill="#fff" d="m11.68 30.59 1.61-1.19L2.82 15.12 13.48 1.17 11.82 0 1.09 13.78 0 15.18l.89 1.17Z" data-name="Path 41"/></svg>
            }
        </button>
    )
}
