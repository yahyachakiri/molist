/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { classValue } from '../util/classValue'
import { ContainerSecond } from './ContainerSecond'
import { Service } from './Service'

export const Services = ({about, homeContent, servicesArray, servicesCategories, servicesItems}) => {
    const [serviceId, setServiceId] = useState(1);
    
    return (
        <div className={`bg-white py-[50px] relative ${!about && 'overflow-hidden'}`}>
            <img src="./images/ServicesIcon.png" className='absolute top-[-300px] left-[-150px]' alt="" />
            <ContainerSecond className='z-20'>
                <div className="flex justify-between gap-6 flex-wrap">
                    <h1 className="font-black text-5xl uppercase flex z-20 font-helveticaneue-black">Our Services</h1>
                    <div className="flex flex-wrap gap-12 z-10">
                        {
                            servicesCategories.map(category => {
                                return (
                                    <button key={servicesCategories.indexOf(category)} onClick={() => setServiceId(servicesCategories.indexOf(category))} className='group font-semibold uppercase'>
                                        <hr className={`h-1 w-[30px] bg-main ${serviceId == servicesCategories.indexOf(category) ? 'opacity-100' : 'opacity-0'} mb-1`} />
                                        <p className={`${serviceId == servicesCategories.indexOf(category) ? 'opacity-100' : 'opacity-50'}`}>{category.name}</p>
                                    </button>
                                )
                            })
                        }
                        </div>
                </div>
                <div className="flex justify-center mt-28 gap-6 flex-wrap">
                    {
                        servicesItems.filter(e => e.categories.nodes[0].id == servicesCategories[serviceId].id).map(item => {
                            return (
                                <Service 
                                    id={item.id}
                                    key={servicesItems.indexOf(item)}
                                    name={item.title}
                                    description={classValue(item.content, '<p')} 
                                    image={item?.featuredImage?.node?.sourceUrl}
                                />
                            )
                        })
                    }
                </div>
            </ContainerSecond>
        </div>
    )
}