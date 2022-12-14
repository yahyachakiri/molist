import { useMutation } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../apollo/client";
import { ArticleHeader } from "../components/ArticleHeader";
import { ContainerSecond } from "../components/ContainerSecond";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SEND_EMAIL } from "../queries/email";
import { GET_CONTACT } from "../queries/get-contact";
import { GET_MENU } from "../queries/get-menu";
import { GET_PRODUCTS } from "../queries/get-products";

export default function Cart({menuItems, productsInfo, categories, contactContent}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("cart")?.split(",")) {
            setItems(localStorage.getItem("cart")?.split(","));
        }
        /* console.log(items.sort().forEach(item => {
            if
        })); 
        for (let i = 0; i < items.length; i++) {
            const array = []
            if (items[i] == items[i+1]) {
                array.push(items[i])
            }
        }
        */
    },[]);
    useEffect(() => {
        // console.log(items);
        if (items[0] !== "") {
            localStorage.setItem("cart", items);
        }
    }, [items])
    // console.log(productsInfo)
    // console.log(productsInfo.filter(e => e.id === "cHJvZHVjdDoxMzA0")[0].image.sourceUrl)
    function divide(array) {
        let allArrays = [];
        for (let i = 0; i < array.length; i++) {
        if(!allArrays.flat().includes(array[i])) 
        allArrays.push(array.filter(el => el === array[i]));
        }
        return allArrays;
    }
    const arrayMinusElement = (array, element) => {
        array.shift(element)
        setItems(array);
    }
    // let array = ["one", "one", "two", "one"];
    // console.log(array)
    // array.shift("one")
    // console.log(array)
    let itemsGrouped = divide(items.sort());
    let input;
    const [addTodo, { data, loading, error }] = useMutation(SEND_EMAIL);

  return (
    <>
        <Header menuItems={menuItems} items={items} />
        <ArticleHeader title='Cart' image='./images/about.png' small />
        <div className={`pb-[100px] ${itemsGrouped[0]?.length === 0 && 'flex items-center justify-center'}`}>
            <ContainerSecond>
                {
                    itemsGrouped[0]?.length > 0 && itemsGrouped[0] && itemsGrouped[0][0]?.length > 0 &&
                    <div className="w-full h-0.5 bg-black my-4 mt-32"></div>
                }
                {
                    itemsGrouped[0]?.length > 0 && itemsGrouped[0] && itemsGrouped[0][0]?.length > 0 ? itemsGrouped.map(item => {
                        // return item[0] + " " + item.length + " " 
                        return (
                            <div key={itemsGrouped.indexOf(item)} className='flex items-center gap-4 mb-6'>
                                <Link href={`/shop/${item[0]}`}><img src={productsInfo?.filter(e => e.id === item[0])[0]?.image?.sourceUrl} className="transition duration-300 hover:opacity-90 object-cover object-center w-[150px] h-[150px]" width="150" height="150" alt="" /></Link>
                                <Link href={`/shop/${item[0]}`}><p className="font-semibold text-xl w-[300px]">{productsInfo?.filter(e => e.id === item[0])[0]?.name}</p></Link>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => {
                                        itemsGrouped[itemsGrouped.indexOf(item)].pop();
                                        setItems(itemsGrouped.flat())
                                    }} className="p-2 bg-darkBg hover:bg-mainSecond rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </button>
                                    <p className="font-semibold text-xl">{item.length}</p>
                                    <button onClick={() => setItems([...items, item[0]])} className="p-2 bg-darkBg hover:bg-mainSecond rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                        </svg>
                                    </button>
                                </div>
                                <button onClick={() => {
                                    setItems(itemsGrouped.flat().filter(e => e !== item[0]));
                                }} 
                                className="group ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="22.627" height="22.627"><g className='group-hover:fill-mainSecond fill:darkBg' data-name="Group 17"><path d="M0 21.213 21.213 0l1.414 1.414L1.414 22.627z" data-name="Op component 1"/><path d="m1.414 0 21.213 21.213-1.414 1.414L0 1.414z"/></g></svg>
                                </button>
                            </div>
                        )
                    })
                    :
                    <div className="mx-auto w-fit pt-24">There is no product in the cart</div>
                }
                {
                    itemsGrouped[0]?.length > 0 && itemsGrouped[0] && itemsGrouped[0][0]?.length > 0 &&
                    <div className="w-full h-0.5 bg-black my-4"></div>
                }
                {
                    itemsGrouped[0]?.length > 0 && itemsGrouped[0] && itemsGrouped[0][0]?.length > 0 &&
                    <form action="" className='text-paragraph'
                        onSubmit={e => {
                            e.preventDefault();
                            addTodo({ variables: { type: input.value } }).then(e => console.log("success")
                            ).catch(e => console.log("fail"));
                            input.value = '';
                        }}
                    >
                        <h2 className="font-teko font-medium text-2xl uppercase text-black">Request a quote</h2>
                        <div className="flex gap-16 flex-wrap max-w-[671px] mt-8">
                            <input ref={node => { input = node;}} type="text" placeholder='Name' className='py-4 w-full text-darkBg contact:w-[300px] placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' />
                            <input type="text" placeholder='Email' className='py-4 w-full text-darkBg contact:w-[300px] placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' />
                        </div>
                        <textarea rows="7" className='mt-11 block w-full text-darkBg placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' placeholder='Additional Information (Optional)' />
                        <div className="flex gap-2 items-center mt-11 cursor-pointer w-fit group">
                            <input type="submit" className='cursor-pointer border-none bg-transparent text-mainThird font-black uppercase group-hover:text-black' value="Send" />
                            <svg className="group-hover:fill-black fill-[#F3B03C]" xmlns="http://www.w3.org/2000/svg" width="38.999" height="10.997"><path d="m31 0 8 5.5-8 5.5ZM0 6V5h31v1Z" data-name="arrow view"/></svg>
                        </div>
                    </form>
                }
            </ContainerSecond>
        </div>
        <Footer contactContent={contactContent} menuItems={menuItems} />
    </>
  )
}
export async function getStaticProps(context) {
    const {data, loading} = await client.query({
        query: GET_PRODUCTS
    });
    const dataContact = await client.query({
        query: GET_CONTACT
      });
    return {
        props: {
            menuItems:data?.menuItems?.edges,
            productsInfo:data?.products?.nodes,
            categories:data?.Categories?.nodes,
            shopContent:data?.Shop?.content,
            contactContent:dataContact?.data?.Contact?.content
        },
        revalidate: 1
    }
}