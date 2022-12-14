/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Service = ({name, description, image}) => {
    return (
        <div className="w-[331px] h-[454px] cursor-pointer group py-[100px] px-9 flex flex-col justify-between relative transition duration-300 hover:text-white z-10">
            <img src={image} alt="" className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition duration-300 group-hover:opacity-100" />
            <h2 className="uppercase text-3xl font-medium z-10 font-helveticaneue-medium-extended">{name}</h2>
            <p className="z-10 truncate">
                {description}
            </p>
            <hr className="bg-black z-10" />
            <div className="flex items-center gap-[175px] z-10">
                <p className="font-teko text-lg">More</p>
                <svg className="transition duration-300 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="47" height="14">
                <path
                    d="M37.361 0 47 7l-9.639 7ZM0 7.637V6.364h37.36v1.273Z"
                    data-name="arrow dow copy"
                />
                </svg>
            </div>
        </div>
    );
};
