import Link from "next/link"
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Product = ({id, title, description, image, category, link, cart, setCart, cartItems, setCartItems}) => {
    // const [cart, setCart] = useState("");
    useEffect(() => {
        if (cart === id) {
            // const old = localStorage.getItem("cart")?.split(",");
            // old.push(cart)
            // console.log(old);
            // localStorage.setItem("cart", "test");
            if (localStorage.getItem("cart") !== "" && localStorage.getItem("cart")) {
                localStorage.setItem("cart", [...localStorage.getItem("cart")?.split(","), cart]);
            } else {
                localStorage.setItem("cart", [cart]);
            }
        }
        return () => {
            setCart("");
        }
    }, [cart])
    return (
        <div className="relative overflow-hidden max-w-[250px]">
            <div className="relative group">
                <Link href={`shop/${link}`}><img src={image} className="cursor-pointer transition duration-300 group-hover:opacity-90 object-cover object-center w-[250px] h-[250px]" width="250" height="250" alt="" /></Link>
                <div className="cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden group-hover:block bg-mainSecond hover:bg-black py-2 px-4 hover:text-mainSecond transition duration-300">
                    {
                        cartItems.includes(id) ?
                        <Link href='/cart' className="uppercase font-[Teko] font-medium text-lg text-white">View cart</Link>
                        :
                        <button onClick={() => {setCart(id); setCartItems([...cartItems, id])}} className="uppercase font-[Teko] font-medium text-lg text-white">Add to cart</button>
                    }
                </div>
            </div>
            <Link href={`shop/${link}`} className="font-[Teko] font-medium text-2xl my-2 hover:text-mainSecond transition duration-300 block">{title}</Link>
            {/* <button className="uppercase font-[Teko] font-medium text-lg text-paragraph hover:text-mainSecond transition duration-300">Add to cart</button> */}
        </div>
    )
}
