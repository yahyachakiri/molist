import Link from "next/link"
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export const Product = ({id, title, description, image, category, link, cart, setCart}) => {
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
            <Link href={`shop/${link}`}><img src={image} className="cursor-pointer transition duration-300 hover:opacity-90 object-cover object-center w-[250px] h-[250px]" width="250" height="250" alt="" /></Link>
            <Link href={`shop/${link}`} className="font-[Teko] font-medium text-2xl my-2 hover:text-mainSecond transition duration-300 block">{title}</Link>
            <button onClick={() => setCart(id)} className="uppercase font-[Teko] font-medium text-lg text-paragraph hover:text-mainSecond transition duration-300">Add to cart</button>
            {/* <button className="uppercase font-[Teko] font-medium text-lg text-paragraph hover:text-mainSecond transition duration-300">Add to cart</button> */}
        </div>
    )
}
