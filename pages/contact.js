/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@apollo/client';
import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react'
import client from '../apollo/client';
import { ArticleHeader } from '../components/ArticleHeader'
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SEND_EMAIL_RECEIPT } from '../queries/email-receipt';
import { GET_CONTACT } from '../queries/get-contact';
import { GET_MENU } from '../queries/get-menu';
import { GET_SOCIALMEDIA } from '../queries/social-media';
import { classValue, imgValue, loopClassValue } from "../util/classValue";

export default function contact({menuItems, contactContent, contactImg, dataSocialMedia, seo}) {
    const [map, setMap] = useState(false);
    const location=contactContent?.split('href="')[1]?.split('"')[0];
    useEffect(() => {
        setMap(true);
    }, []);
    let emailReceipt = "";
    // let [name, setName] = useState('');
    // let [email, setEmail] = useState('');
    // let [subject, setSubject] = useState('');
    // let [message, setMessage] = useState('');
    const name = useRef(null);
    const email = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);
    const [sendEmailReceiptFunc, sendEmailReceiptReturn] = useMutation(SEND_EMAIL_RECEIPT);
    const emailMessage = (client) => {
        emailReceipt = `
            <div style="color: #000;">
                <p style="color: #000;">Request from: ${client.name},</p>
                <p style="color: #000;">Email: ${client.email},</p>
                <p style="color: #000;">Subject: ${client.subject},</p>
                <p style="color: #000;">${client.message && `Message: ${client.message}`}</p>
            </div>
            `;
        
    }
    const [sendRequest, setSendRequest] = useState(false);
    const [sendRequestMsg, setSendRequestMsg] = useState("");
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );
    return (
        <div>
            <Head>
                { seo?.title && <title>{seo?.title}</title>}
                { seo?.metaDesc && <meta name="description" content={seo?.metaDesc} />}
                { seo?.metaKeywords && <meta name="keywords" content={seo?.metaKeywords} />}
                { (seo?.metaRobotsNofollow && seo?.metaRobotsNoindex) && <meta name="robots" content={`${seo?.metaRobotsNofollow}, ${seo?.metaRobotsNoindex}`} />}
            </Head>
            <Header menuItems={menuItems} />
            <ArticleHeader title='contact' image={contactImg} white />
            {/* <div className='w-full h-[900px] m-laptop:h-[1460px]'> */}
            <div className='w-full min-h-[500px]'>
            {
                map &&
                // <iframe className='w-full h-[900px] m-laptop:h-[1460px]' scrolling="no" marginHeight="0" marginWidth="0" src={'https://maps.google.com/maps?width=100%25&amp;height=1460&amp;hl=en&amp;q=%C4%B0ncirtepe,%20A%C5%9F%C4%B1k%20Mahsuni%20%C5%9Eerif%20Cd.%2011%20A,%2034538%20Beylikd%C3%BCz%C3%BC%20Osb/Esenyurt/%C4%B0stanbul,%20Turquie+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' } width="100%" height="1460" frameBorder="0"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
                    // <iframe className='w-full h-[900px] m-laptop:h-[1460px]' src={location} scrolling="no" marginHeight="0" marginWidth="0" width="100%" height="1460" frameBorder="0" dangerouslySetInnerHTML={{__html: ''}}></iframe>
                    <div className="w-full h-[900px]" dangerouslySetInnerHTML={{__html: `
                    <iframe  className="w-full h-[900px] m-laptop:h-[1460px]" src="${location}" scrolling="no" marginHeight="0" marginWidth="0" width="100%" height="900" frameBorder="0"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
                    `}} />
            }
            
            
            </div>
            <div className='bg-darkBg py-[150px]'>
                <Container className='flex flex-wrap gap-10 justify-around'>
                    <div className='text-white flex flex-col gap-6'>
                        <hr className="w-35 bg-main mb-2 h-0.5 w-40" />
                        <p className="uppercase">Info Contact Us</p>
                        <h1 className="font-black text-mainSecond uppercase text-3xl mt-2">{classValue(contactContent,'adress-main')}</h1>
                        <div>
                            {
                                loopClassValue(contactContent, 'info').map(item => {
                                    return <p key={loopClassValue(contactContent, 'info').indexOf(item)}>{item}</p>
                                })
                            }
                        </div>
                        <p>{classValue(contactContent,'email')}</p>
                    </div>
                    <form action="" className='text-white'
                    onSubmit={e => {
                        e.preventDefault();
                        if (validEmail.test(email.current.value) && name.current.value !== "") {
                            setSendRequest(true);
                            setSendRequestMsg("Loading...");
                            emailMessage({name: name.current.value, email: email.current.value, subject: subject.current.value, message: message.current.value});
                            sendEmailReceiptFunc({ variables: { body: emailReceipt }})
                            .then(e => { 
                                if (e.data?.sendEmail?.sent) {
                                    setSendRequestMsg("Message Sent");
                                    name.current.value='';
                                    email.current.value='';
                                    subject.current.value='';
                                    message.current.value='';
                                } else setSendRequestMsg("Message Not Sent Try Again")})
                            .catch(e => {console.log(e);setSendRequestMsg("There is a problem try again later")});
                        } else {
                            setSendRequest(true); 
                            setSendRequestMsg("Please enter your name and a valid email")
                        }
                    }
                    }
                    >
                        <h2 className="font-teko font-medium text-2xl uppercase">Get in touch</h2>
                        <div className="flex gap-16 flex-wrap max-w-[671px] mt-8">
                            <input ref={name} type="text" placeholder='Name' className='py-4 w-full contact:w-[300px] bg-darkBg text-white placeholder-[#ddd] border-solid border-b-[2px] border-white focus:border-main' />
                            <input ref={email} type="text" placeholder='Email' className='py-4 w-full contact:w-[300px] bg-darkBg text-white placeholder-[#ddd] border-solid border-b-[2px] border-white focus:border-main' />
                        </div>
                        <input ref={subject} type="text" placeholder='Subject' className='py-4 w-full w-full bg-darkBg text-white placeholder-[#ddd] border-solid border-b-[2px] border-white focus:border-main' />
                        <textarea ref={message} rows="7" className='mt-11 block w-full bg-darkBg text-white placeholder-[#ddd] border-solid border-b-[2px] border-white focus:border-main' placeholder='Here goes your message'></textarea>
                        <div className="flex justify-between items-end text-white">
                            <div className="flex items-center mt-11 cursor-pointer">
                                <input type="submit" className='cursor-pointer border-none bg-transparent text-mainThird font-black uppercase' value="Send message" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="38.999" height="10.997"><path fill="#F3B03C" d="m31 0 8 5.5-8 5.5ZM0 6V5h31v1Z" data-name="arrow view"/></svg>
                            </div>
                            {sendRequest && <p className="uppercase font-bold">{sendRequestMsg}</p>}
                        </div>
                    </form>
                </Container>
            </div>
            <Footer contactContent={contactContent} menuItems={menuItems} dataSocialMedia={dataSocialMedia} />
        </div>
    )
}

export async function getStaticProps(context) {
    const {data, loading} = await client.query({
        query: GET_CONTACT
    });
    const dataSocialMedia = await client.query({
        query: GET_SOCIALMEDIA
      });
    return {
        props: {
            menuItems:data?.menuItems?.edges,
            contactContent:data?.Contact?.content,
            seo:data?.Contact?.seo,
            contactImg:data?.Contact?.featuredImage?.node?.sourceUrl,
            dataSocialMedia:dataSocialMedia?.data?.socialMedias?.socialMedia,
        },
        revalidate: 1
    }
}