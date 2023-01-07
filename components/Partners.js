import React from "react";

export const Partners = ({partnersData}) => {
    return (
        <div className="py-[65px] flex flex-wrap justify-center items-center gap-14" id='our-partners'>
        {
            partnersData.map(partner => {
                return <img key={partnersData.indexOf(partner)} src={partner?.featuredImage?.node?.sourceUrl} className="object-contain h-32" alt="" />
            })
        }
        </div>
    );
};
