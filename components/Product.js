import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
export const Product = ({title, description, image, category, link}) => {
    return (
        <div className="relative overflow-hidden max-w-[250px]">
            <Link href={`shop/${link}`}><img src={image} className="cursor-pointer transition duration-300 hover:opacity-90 object-cover object-center w-[250px] h-[250px]" width="250" height="250" alt="" /></Link>
            {/* <div className="bg-darkBg flex items-center gap-10 absolute bottom-0 right-0 py-5 px-7 bg-white opacity-100 transition duration-300 transition duration-300 group-hover:opacity-0">
                <div>
                    <p className="text-paragraph text-sm capitalize">{category}</p>
                    <p className="uppercase text-2xl text-white font-teko font-medium max-w-[240px] mt-1">{title}</p>
                </div>
                <div width='38.999'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38.999" height="10.997"><path fill="#ffd800" d="m31 0 8 5.5-8 5.5ZM0 6V5h31v1Z" data-name="arrow view"/></svg>
                </div>
            </div>
            <div className="absolute top-0 left-0 p-12 opacity-0 transition duration-300 transition duration-300 group-hover:opacity-100">
                <p className="text-paragraph capitalize">{category}</p>
                <p className="uppercase text-3xl font-teko">{title}</p>
                <p className="text-paragraph mt-9">{description}</p>
            </div> */}
            <Link href={`shop/${link}`} className="font-[Teko] font-medium text-2xl my-2 hover:text-mainSecond transition duration-300 block">{title}</Link>
            <button className="uppercase font-[Teko] font-medium text-lg text-paragraph hover:text-mainSecond transition duration-300">Add to cart</button>
        </div>
    )
}
