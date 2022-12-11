/* eslint-disable @next/next/no-img-element */
import React from "react";

export const TeamMember = ({ image, position, name, description }) => {
    return (
        <div className="relative group overflow-hidden">
        <img src={image} width="410" height="510" alt="" />
        <div className="absolute bottom-0 right-0 py-4 px-7 bg-white opacity-100 transition duration-300 group-hover:opacity-0">
            <p className="text-mainSecond uppercase text-xs font-medium">{position}</p>
            <h1 className="font-black text-2xl uppercase">{name}</h1>
        </div>
        <div className="absolute top-0 left-0 p-4 opacity-0 transition duration-300 group-hover:opacity-100">
            <p className="text-white mb-3">
            {description}
            </p>
            <p className="text-mainSecond uppercase text-xs font-medium">{position}</p>
            <h1 className="font-bold text-2xl uppercase">{name}</h1>
        </div>
        </div>
    );
};
