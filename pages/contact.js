/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { ArticleHeader } from '../components/ArticleHeader'
import { Container } from '../components/Container';

export default function contact() {
    const [map, setMap] = useState(false);
    useEffect(() => {
        setMap(true);
    }, []);
    return (
        <div>
            <ArticleHeader title='contact' image='./images/contact.png' white />
            <div className='w-full h-[900px] m-laptop:h-[1460px]'>
            {
                map &&
                <iframe className='w-full h-[900px] m-laptop:h-[1460px]' scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=1460&amp;hl=en&amp;q=%C4%B0ncirtepe,%20A%C5%9F%C4%B1k%20Mahsuni%20%C5%9Eerif%20Cd.%2011%20A,%2034538%20Beylikd%C3%BCz%C3%BC%20Osb/Esenyurt/%C4%B0stanbul,%20Turquie+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="1460" frameborder="0"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
            }
            </div>
            <Container className='flex flex-wrap gap-10 justify-around bg-darkBg py-[150px]'>
                <div className='text-paragraph flex flex-col gap-6'>
                    <hr className="w-35 bg-main mb-2 h-0.5 w-40" />
                    <p className="uppercase">Info Contact Us</p>
                    <h1 className="font-black text-mainSecond uppercase text-3xl mt-2">Istanbul, Turkey.</h1>
                    <div>
                        <p>İncirtepe, Esenyurt, Aşık Mahsuni Şerif Cd.11 A, 34510 Beylikdüzü. </p>
                        <p>WSP  +905434950743</p>
                        <p>Mobile  +905061804530/ +90 212 423 24 29</p>
                    </div>
                    <p>contact@molist.net</p>
                </div>
                <form action="" className='text-paragraph'>
                    <h2 className="font-teko font-medium text-2xl uppercase">Get in touch</h2>
                    <div className="flex gap-16 flex-wrap max-w-[671px] mt-8">
                        <input type="text" placeholder='Name' className='py-4 w-full contact:w-[300px] bg-darkBg text-white placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' />
                        <input type="text" placeholder='Subject' className='py-4 w-full contact:w-[300px] bg-darkBg text-white placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' />
                    </div>
                    <textarea rows="7" className='mt-11 block w-full bg-darkBg text-white placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' placeholder='Here goes your message' />
                    <div className="flex items-center mt-11 cursor-pointer">
                        <input type="submit" className='cursor-pointer border-none bg-transparent text-mainThird font-black uppercase' value="Send message" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="38.999" height="10.997"><path fill="#ffd800" d="m31 0 8 5.5-8 5.5ZM0 6V5h31v1Z" data-name="arrow view"/></svg>
                    </div>
                </form>
            </Container>
        </div>
    )
}