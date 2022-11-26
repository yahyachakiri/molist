import React from "react";

export const Partners = ({partnersContent}) => {
    let partners = [];
    for (let i=1; i<partnersContent.split('img').length; i++) {
        partners.push(partnersContent.split('img')[i]?.split('src="')[1]?.split('"')[0]);
    }
    return (
        <div className="py-[65px] flex flex-wrap justify-center items-center gap-14" id='our-partners'>
        {
            partners.map(partner => {
                return <img key={partner} src={partner} className="object-contain" alt="" />
            })
        }
        </div>
    );
};
