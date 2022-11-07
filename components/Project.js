/* eslint-disable @next/next/no-img-element */
export const Project = ({title, description, image}) => {
    return (
        <div className="relative group overflow-hidden mb-40 cursor-pointer">
            <img src={image} className="transition duration-300 group-hover:opacity-90" width="410" height="572.64" alt="" />
            <div className="bg-darkBg flex items-center gap-10 absolute bottom-0 right-0 py-5 px-7 bg-white opacity-100 transition duration-300 transition duration-300 group-hover:opacity-0">
                <div>
                    <p className="text-paragraph text-sm">Residential</p>
                    <p className="uppercase text-2xl text-white font-[Teko] font-medium max-w-[240px] mt-1">{title}</p>
                </div>
                <div width='38.999'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38.999" height="10.997"><path fill="#ffd800" d="m31 0 8 5.5-8 5.5ZM0 6V5h31v1Z" data-name="arrow view"/></svg>
                </div>
            </div>
            <div className="absolute top-0 left-0 p-12 opacity-0 transition duration-300 transition duration-300 group-hover:opacity-100">
                <p className="text-paragraph">Residential</p>
                <p className="uppercase text-3xl font-[Teko]">{title}</p>
                <p className="text-paragraph mt-9">{description}</p>
            </div>
        </div>
    )
}
