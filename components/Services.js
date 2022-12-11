/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { ContainerSecond } from './ContainerSecond'
import { Service } from './Service'

export const Services = ({about, homeContent}) => {
    const [serviceId, setServiceId] = useState(1);
    const serviceType = [];
    const service = [0];
    for (let i = 1; i < homeContent.split('service-type').length; i++) {
        serviceType.push(homeContent.split('service-type')[i]?.split('>')[1]?.split('</')[0]);
        // console.log(homeContent.split('service-type')[i].split('service-title').length)
        for (let j = 1; j < homeContent.split('service-type')[i].split('service-title').length; j++) {
            service.push({
                title: homeContent?.split('service-type')[i]?.split('service-title')[j]?.split('>')[1]?.split('</')[0],
                description: homeContent?.split('service-type')[i]?.split('service-description')[j]?.split('>')[1]?.split('</')[0],
                img: homeContent?.split('service-type')[i]?.split('service-img')[j]?.split('src="')[1]?.split('"')[0],
            });
        }
        service.push(i);
    }
    // console.log(service.slice(service.indexOf(serviceId) + 1, service.indexOf(serviceId + 1)));
    // useEffect(() => {
        // console.log(service.slice(service.indexOf(serviceId), service.indexOf(serviceId + 1)))
        // // console.log(service)
        // console.log(serviceId)
        // console.log((service.indexOf(serviceId)))
        // console.log((service.indexOf(serviceId + 1)))
    // } ,[serviceId])
    
    return (
        <div className={`bg-white py-[50px] relative ${!about && 'overflow-hidden'}`}>
            <img src="./images/ServicesIcon.png" className='absolute top-[-300px] left-[-150px]' alt="" />
            <ContainerSecond className='z-20'>
                <div className="flex justify-between gap-6 flex-wrap">
                    <h1 className="font-black text-5xl uppercase flex z-20">Our Services</h1>
                    <div className="flex flex-wrap gap-12 z-10">
                            {
                                serviceType.map(type => {
                                    return (
                                        <button key={serviceType.indexOf(type)} onClick={() => setServiceId(serviceType.indexOf(type))} className='group font-medium'>
                                            <hr className={`h-1 w-[30px] bg-main ${serviceId == serviceType.indexOf(type) ? 'opacity-100' : 'opacity-0'} mb-1`} />
                                            <p className={`${serviceId == serviceType.indexOf(type) ? 'opacity-100' : 'opacity-50'}`}>{type}</p>
                                        </button>
                                    )
                                })
                            }
                            {/* <button onClick={() => setServiceId(0)} className='group font-medium'>
                                <hr className={`h-1 w-[30px] bg-main ${serviceId == 0 ? 'opacity-100' : 'opacity-0'} mb-1`} />
                                <p className={`${serviceId == 0 ? 'opacity-100' : 'opacity-50'}`}>Home Decor</p>
                            </button>
                            <button onClick={() => setServiceId(1)} className='group font-medium'>
                                <hr className={`h-1 w-[30px] bg-main ${serviceId == 1 ? 'opacity-100' : 'opacity-0'} mb-1`} />
                                <p className={`${serviceId == 1 ? 'opacity-100' : 'opacity-50'}`}>Interior Design</p>
                            </button>
                            <button onClick={() => setServiceId(2)} className='group font-medium'>
                                <hr className={`h-1 w-[30px] bg-main ${serviceId == 2 ? 'opacity-100' : 'opacity-0'} mb-1`} />
                                <p className={`${serviceId == 2 ? 'opacity-100' : 'opacity-50'}`}>Office design</p>
                            </button>
                            <button onClick={() => setServiceId(3)} className='group font-medium'>
                                <hr className={`h-1 w-[30px] bg-main ${serviceId == 3 ? 'opacity-100' : 'opacity-0'} mb-1`} />
                                <p className={`${serviceId == 3 ? 'opacity-100' : 'opacity-50'}`}>Light Decor</p>
                            </button> */}
                        </div>
                </div>
                <div className="flex justify-center mt-28 gap-6 flex-wrap">
                    {
                        service.slice(service.indexOf(serviceId) + 1, service.indexOf(serviceId + 1)).map(item => {
                            return (
                                <Service 
                                    key={service.indexOf(item)}
                                    name={item.title}
                                    description={item.description} 
                                    image={item.img}
                                />
                            )
                        })
                    }
                </div>
            </ContainerSecond>
        </div>
    )
}