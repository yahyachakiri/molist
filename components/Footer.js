import Link from 'next/link'
import React, { useState } from 'react'
import { classValue, loopClassValue } from '../util/classValue';
import { Container } from './Container'

export const Footer = ({menuItems, contactContent}) => {
    const [menu, setMenu] = useState(false);
    return (
        <footer className='bg-black py-20'>
            <Container className='flex gap-14 flex-wrap justify-around text-white uppercase text-sm font-black'>
                <Link href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="208.109" height="72.188"><g data-name="Group 11"><g fill="#fff" data-name="Group 5"><path d="m65.273 13.985 3.916 22.09h.1l3.917-22.09h13.893v37.287h-9.088V23.49h-.1l-5.17 27.782h-7L60.57 23.49h-.1v27.782h-9.087V13.985Z" data-name="Path 30"/><path d="M90.915 23.725a15.784 15.784 0 0 1 2.245-6 9.141 9.141 0 0 1 4.126-3.395 16.256 16.256 0 0 1 6.267-1.071 16.256 16.256 0 0 1 6.267 1.071 9.138 9.138 0 0 1 4.126 3.395 15.816 15.816 0 0 1 2.246 6 50.11 50.11 0 0 1 .679 8.9 50.083 50.083 0 0 1-.679 8.9 15.817 15.817 0 0 1-2.246 6.006 8.651 8.651 0 0 1-4.126 3.316 17.418 17.418 0 0 1-6.267.992 17.418 17.418 0 0 1-6.267-.992 8.654 8.654 0 0 1-4.126-3.316 15.785 15.785 0 0 1-2.245-6.006 49.841 49.841 0 0 1-.68-8.9 49.868 49.868 0 0 1 .68-8.9Zm9.453 15.144a22.175 22.175 0 0 0 .444 3.944 3.831 3.831 0 0 0 .992 2.037 2.552 2.552 0 0 0 1.75.574 2.555 2.555 0 0 0 1.75-.574 3.845 3.845 0 0 0 .993-2.037 22.453 22.453 0 0 0 .444-3.944q.1-2.48.1-6.24t-.1-6.241a22.421 22.421 0 0 0-.444-3.942 3.845 3.845 0 0 0-.993-2.037 2.555 2.555 0 0 0-1.75-.574 2.552 2.552 0 0 0-1.75.574 3.831 3.831 0 0 0-.992 2.037 22.144 22.144 0 0 0-.444 3.942q-.106 2.482-.1 6.241t.1 6.24Z" data-name="Path 31"/><path d="M130.084 13.985v29.349h11.96v7.938h-21.672V13.985Z" data-name="Path 32"/><path d="M153.9 13.985v37.287h-9.714V13.985Z" data-name="Path 33"/><path d="M172.648 23.855a5.6 5.6 0 0 0-.68-2.846 2.25 2.25 0 0 0-2.089-1.174 2.637 2.637 0 0 0-2.3 1.018 3.793 3.793 0 0 0-.731 2.271 3.728 3.728 0 0 0 1.175 2.9 10.822 10.822 0 0 0 2.951 1.853q1.773.783 3.812 1.593a17.063 17.063 0 0 1 3.813 2.115 10.517 10.517 0 0 1 2.951 3.42 11.3 11.3 0 0 1 1.175 5.51q0 5.952-3.395 8.641t-9.819 2.691a25.832 25.832 0 0 1-5.354-.5 9.612 9.612 0 0 1-3.917-1.723 7.765 7.765 0 0 1-2.429-3.213 12.691 12.691 0 0 1-.834-4.909v-1.3h9.4v.887a4.975 4.975 0 0 0 .887 3.369 2.978 2.978 0 0 0 2.3.966 2.766 2.766 0 0 0 2.324-1.045 4.053 4.053 0 0 0 .809-2.558 3.817 3.817 0 0 0-1.123-2.9 9.881 9.881 0 0 0-2.82-1.828q-1.7-.757-3.682-1.541a16.14 16.14 0 0 1-3.682-2.037 10.026 10.026 0 0 1-2.82-3.289 10.986 10.986 0 0 1-1.124-5.327q0-5.693 3.03-8.669t9.192-2.977q6.371 0 9.217 2.742t2.846 8.747h-9.086Z" data-name="Path 34"/><path d="M183.876 22.236v-8.251h24.232v8.251h-7.311v29.035h-9.714V22.236Z" data-name="Path 35"/></g><g data-name="Group 8"><g data-name="Group 6"><path fill="#fbad02" d="M36.223 20.937v20.916L0 20.919V.001Z" data-name="Path 36"/></g><g data-name="Group 7"><path fill="#fbad02" d="M45.278 51.272v20.916L9.055 51.254V30.335Z" data-name="Path 37"/></g></g></g></svg>
                </Link>
                <p>Copyright &copy; {new Date().getFullYear()} Chiar. All Rights Reversed.</p>
                <div className='flex flex-col gap-2 max-w-[250px]'>
                    <p>{classValue(contactContent,'adress-main')}</p>
                    {
                        loopClassValue(contactContent, 'info').map(item => {
                            return <p key={loopClassValue(contactContent, 'info').indexOf(item)}>{item}</p>
                        })
                    }
                    {/* <p>+905434950753</p>
                    <p>contact@molis.net</p> */}
                    <p>{classValue(contactContent,'email')}</p>
                </div>
                <ul className='flex flex-col gap-2'>
                    {/* <li><Link href='/#parteners' className='transition duration-300 hover:text-mainSecond'>Our Parteners</Link></li>
                    <li><Link href='#' className='transition duration-300 hover:text-mainSecond'>Career</Link></li>
                    <li><Link href='/about' className='transition duration-300 hover:text-mainSecond'>About</Link></li>
                    <li><Link href='/contact' className='transition duration-300 hover:text-mainSecond'>Contact</Link></li> */}
                    {
                        menuItems?.map(item => {
                            return <li key={item?.node?.url}><Link onClick={() => setMenu(false)} href={item?.node?.url} className='transition duration-300 hover:text-mainSecond'>{item?.node?.label}</Link></li>
                        })
                    }
                </ul>
            </Container>
        </footer>
    )
}
