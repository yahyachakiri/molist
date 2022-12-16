import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Container } from './Container'
import { motion, AnimatePresence } from "framer-motion"

export const Header = ({ cart, items, menuItems}) => {
    const [cartBounce, setCartBounce] = useState(false);
    const [menu, setMenu] = useState(false);
    const [itemsCart, setItemsCart] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("cart")?.split(",")) {
            setItemsCart(localStorage.getItem("cart")?.split(","));
        }
        if (itemsCart.length > 0) {
            setCartBounce(true);
        }
    },[cart])
    useEffect(() => {
        if (items) {
            setItemsCart(items);
        }
    }, [items])
    console.log(menuItems)
    return (
        <div className='py-10 fixed w-full z-50 bg-gradient-to-b from-black font-helveticaneue-black'>
            <Container className='flex items-center justify-between px-4'>
                <Link href='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="130.409" height="45.235"><g data-name="Group 2"><g fill="#fff" data-name="Group 5"><path d="m40.902 8.763 2.454 13.843h.066l2.454-13.843h8.705v23.365h-5.695V14.719h-.066l-3.24 17.409h-4.385l-3.24-17.409h-.065v17.409h-5.695V8.763Z" data-name="Path 30"/><path d="M56.971 14.866a9.89 9.89 0 0 1 1.406-3.763 5.725 5.725 0 0 1 2.585-2.127 10.182 10.182 0 0 1 3.927-.671 10.181 10.181 0 0 1 3.927.671 5.724 5.724 0 0 1 2.585 2.127 9.906 9.906 0 0 1 1.407 3.763 31.375 31.375 0 0 1 .426 5.58 31.358 31.358 0 0 1-.426 5.579 9.908 9.908 0 0 1-1.407 3.764 5.42 5.42 0 0 1-2.585 2.078 10.912 10.912 0 0 1-3.927.622 10.913 10.913 0 0 1-3.927-.622 5.421 5.421 0 0 1-2.585-2.078 9.892 9.892 0 0 1-1.406-3.764 31.214 31.214 0 0 1-.426-5.579 31.231 31.231 0 0 1 .426-5.58Zm5.923 9.49a13.9 13.9 0 0 0 .278 2.471 2.4 2.4 0 0 0 .621 1.276 1.6 1.6 0 0 0 1.1.36 1.6 1.6 0 0 0 1.1-.36 2.409 2.409 0 0 0 .622-1.276 14.064 14.064 0 0 0 .278-2.471q.064-1.554.065-3.91t-.065-3.911a14.051 14.051 0 0 0-.278-2.47 2.409 2.409 0 0 0-.622-1.276 1.6 1.6 0 0 0-1.1-.36 1.6 1.6 0 0 0-1.1.36 2.4 2.4 0 0 0-.621 1.276 13.885 13.885 0 0 0-.278 2.47q-.066 1.556-.066 3.911t.066 3.91Z" data-name="Path 31"/><path d="M81.515 8.763v18.391h7.495v4.974H75.43V8.763Z" data-name="Path 32"/><path d="M96.439 8.763v23.365h-6.087V8.763Z" data-name="Path 33"/><path d="M108.187 14.948a3.511 3.511 0 0 0-.426-1.783 1.41 1.41 0 0 0-1.309-.736 1.652 1.652 0 0 0-1.439.638 2.376 2.376 0 0 0-.458 1.423 2.336 2.336 0 0 0 .737 1.817 6.783 6.783 0 0 0 1.849 1.161q1.111.491 2.388 1a10.671 10.671 0 0 1 2.389 1.325 6.583 6.583 0 0 1 1.849 2.143 7.078 7.078 0 0 1 .737 3.453q0 3.73-2.127 5.415a9.725 9.725 0 0 1-6.153 1.686 16.194 16.194 0 0 1-3.354-.311 6.022 6.022 0 0 1-2.455-1.08 4.867 4.867 0 0 1-1.522-2.013 7.955 7.955 0 0 1-.523-3.076v-.817h5.891v.556a3.117 3.117 0 0 0 .556 2.111 1.867 1.867 0 0 0 1.44.605 1.733 1.733 0 0 0 1.456-.655 2.539 2.539 0 0 0 .507-1.6 2.392 2.392 0 0 0-.7-1.816 6.191 6.191 0 0 0-1.767-1.146q-1.063-.475-2.307-.965a10.117 10.117 0 0 1-2.307-1.276 6.285 6.285 0 0 1-1.767-2.061 6.885 6.885 0 0 1-.7-3.338 7.283 7.283 0 0 1 1.9-5.433q1.9-1.865 5.76-1.865 3.992 0 5.776 1.718t1.783 5.481h-5.694Z" data-name="Path 34"/><path d="M115.223 13.938V8.767h15.185v5.171h-4.581v18.194h-6.087V13.938Z" data-name="Path 35"/></g><g data-name="Group 8"><g data-name="Group 6"><path fill="#fbad02" d="M22.698 13.119v13.107l-22.7-13.118V0Z" data-name="Path 36"/></g><g data-name="Group 7"><path fill="#fbad02" d="M28.373 32.129v13.106l-22.7-13.118V19.009Z" data-name="Path 37"/></g></g></g></svg>
                </Link>
                <div className="z-50 flex items-center gap-6">
                    <Link onClick={() => setCartBounce(false)} href={`${(itemsCart.length > 0 && itemsCart[0].length > 0) ? "/cart" : "/shop"}`} className={`group relative ${ cartBounce && 'animate-bounce'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-8 h-8 group-hover:stroke-mainSecond">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        {
                            itemsCart.length > 0 && itemsCart[0].length > 0 &&
                            <span className='absolute top-[-10px] right-[-10px] bg-mainSecond h-[24px] min-w-[24px] flex justify-center items-center rounded-full font-[Teko] font-medium'>{itemsCart.length}</span>
                        }
                    </Link>
                    <div className="group w-[30px] flex items-center justify-end">
                        {
                            menu ?
                            <button onClick={() => setMenu(!menu)}><svg xmlns="http://www.w3.org/2000/svg" width="22.627" height="22.627"><g className='group-hover:fill-mainSecond' fill="#fff" data-name="Group 17"><path d="M0 21.213 21.213 0l1.414 1.414L1.414 22.627z" data-name="Op component 1"/><path d="m1.414 0 21.213 21.213-1.414 1.414L0 1.414z" data-name="Op component 1"/></g></svg></button>
                            :
                            <button onClick={() => setMenu(!menu)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="14"><path className='group-hover:fill-mainSecond' fill="#fff" d="M15 14v-2h15v2ZM0 8V6h30v2Zm0-6V0h30v2Z" data-name="icon menu"/></svg></button>
                        }
                    </div>
                </div>
            </Container>
            <AnimatePresence>
                {
                    menu &&
                    <motion.div className="absolute w-screen h-screen top-0 left-0 bg-black flex items-center justify-center z-0"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.3}}
                        exit={{opacity: 0}}
                    >
                        <ul className='text-white font-black text-3xl uppercase flex flex-col gap-4'>
                            {/* <li><Link onClick={() => setMenu(false)} href='/#parteners' className='transition duration-300 hover:text-mainSecond'>Our Parteners</Link></li> */}
                            {/* <li><Link onClick={() => setMenu(false)} href='/services' className='transition duration-300 hover:text-mainSecond'>Services</Link></li>
                            <li><Link onClick={() => setMenu(false)} href='/shop' className='transition duration-300 hover:text-mainSecond'>Shop</Link></li>
                            <li><Link onClick={() => setMenu(false)} href='/projects' className='transition duration-300 hover:text-mainSecond'>Projects</Link></li>
                            <li><Link onClick={() => setMenu(false)} href='/about' className='transition duration-300 hover:text-mainSecond'>About</Link></li>
                            <li><Link onClick={() => setMenu(false)} href='/contact' className='transition duration-300 hover:text-mainSecond'>Contact</Link></li> */}
                            {
                                menuItems?.map(item => {
                                    // return <li key={item?.node?.path}><Link onClick={() => setMenu(false)} href={item?.node?.path.split('-')[0] == '/hash' ? `/#${item?.node?.path.split('-').filter(e => e !== '/hash').join('-').split('/').filter(e => e !== '/').join('')}` : item?.node?.path} className='transition duration-300 hover:text-mainSecond'>{item?.node?.label.split(' ')[0] == 'hash' ? item?.node?.label.split(' ').filter(e => e !== 'hash').join(' ') : item?.node?.label}</Link></li>
                                    return <li key={item?.node?.path}><Link onClick={() => setMenu(false)} href={item?.node?.url} className='transition duration-300 hover:text-mainSecond'>{item?.node?.label}</Link></li>
                                })
                            }
                        </ul>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}
