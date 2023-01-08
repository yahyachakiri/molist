import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../apollo/client";
import { ArticleHeader } from "../components/ArticleHeader";
import { ContainerSecond } from "../components/ContainerSecond";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SEND_EMAIL } from "../queries/email";
import { SEND_EMAIL_RECEIPT } from "../queries/email-receipt";
import { GET_CART } from "../queries/get-cart";
import { GET_CONTACT } from "../queries/get-contact";
import { GET_MENU } from "../queries/get-menu";
import { GET_PRODUCT } from "../queries/get-product";
import { GET_PRODUCTS } from "../queries/get-products";
import { GET_SOCIALMEDIA } from "../queries/social-media";

export default function Cart({menuItems, productsInfo, categories, contactContent, cartImg, dataSocialMedia, seo}) {
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
        if (items[0] !== "") {
            localStorage.setItem("cart", items);
        }
    }, [items])
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
    let itemsGrouped = divide(items.sort());
    let name;
    let email;
    let message;
    const [sendEmailFunc, sendEmailReturn] = useMutation(SEND_EMAIL);
    const [sendEmailReceiptFunc, sendEmailReceiptReturn] = useMutation(SEND_EMAIL_RECEIPT);
    if (sendEmailReturn.error) {
        console.log(sendEmailReturn.error);
    }
    if (sendEmailReturn.data) {
        console.log(sendEmailReturn.data);
    }
    if (sendEmailReceiptReturn.error) {
        console.log(sendEmailReceiptReturn.error);
    }
    if (sendEmailReceiptReturn.data) {
        console.log(sendEmailReceiptReturn.data);
    }
    let productProperties = [];
    const getProduct = useQuery(GET_PRODUCTS);
    let emailSend = "";
    let emailReceipt = "";
    const emailMessage = (client) => {
        productProperties = [];
        itemsGrouped.forEach(item => {
            productProperties.push(
                {
                    name: getProduct.data?.products?.nodes.filter(e => e.id === item[0])[0].name,
                    image: getProduct.data?.products?.nodes.filter(e => e.id === item[0])[0].image?.sourceUrl,
                    quantity: item.length
                })
        });
        console.log(productProperties);
        let productsDiv = [];
        productProperties.forEach(property => {
            productsDiv.push(
                `<tr>
                    <td><img src="${property.image}" alt="" height="100" width="100" style="object-fit: cover;"></td>
                    <td><p><b>${property.name}</b> x ${property.quantity}</p></td>
                </tr>`
            )
        }
            )
        emailSend = `
            <div style="color: #000;">
                <p style="color: #000;">Hello ${client.name},</p>
                <p style="color: #000;">We have received your request and we will send you a quote soon!</p>
                <table cellspacing="3" style="color: #000;">
                ${productsDiv.join("\n")}
                </table>
                
                <br>
                <br>
                <p style="color: #000;">Thank you!</p>
                <p style="color: #FBAD02;">- Molist team</p>
            </div>
            `;
        emailReceipt = `
            <div style="color: #000;">
                <p style="color: #000;">Request from: ${client.name},</p>
                <p style="color: #000;">Email: ${client.email},</p>
                <p style="color: #000;">${client.message && `Message: ${client.message}`}</p>
                <table cellspacing="3" style="color: #000;">
                ${productsDiv.join("\n")}
                </table>
            </div>
            `;
        
    }
    const [sendRequest, setSendRequest] = useState(false);
    const [sendRequestMsg, setSendRequestMsg] = useState("");
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );


    return (
    <>
        <Head>
            { seo?.title && <title>{seo?.title}</title>}
            { seo?.metaDesc && <meta name="description" content={seo?.metaDesc} />}
            { seo?.metaKeywords && <meta name="keywords" content={seo?.metaKeywords} />}
            { (seo?.metaRobotsNofollow && seo?.metaRobotsNoindex) && <meta name="robots" content={`${seo?.metaRobotsNofollow}, ${seo?.metaRobotsNoindex}`} />}
        </Head>
        <Header menuItems={menuItems} items={items} />
        <ArticleHeader title='Cart' image={cartImg} small />
        <div className={`pb-[100px] ${itemsGrouped[0]?.length === 0 && 'flex items-center justify-center'}`}>
            <ContainerSecond>
                {
                    itemsGrouped[0]?.length > 0 && itemsGrouped[0] && itemsGrouped[0][0]?.length > 0 &&
                    <div className="w-full h-0.5 bg-black my-4 mt-32"></div>
                }
                {
                    itemsGrouped[0]?.length > 0 && itemsGrouped[0] && itemsGrouped[0][0]?.length > 0 ? itemsGrouped.map(item => {
                        return (
                            <div key={itemsGrouped.indexOf(item)} className='flex items-center flex-wrap gap-4 mb-6'>
                                <div className="flex items-center flex-wrap gap-4">
                                <Link href={`/shop/${item[0]}`}><img src={productsInfo?.filter(e => e.id === item[0])[0]?.image?.sourceUrl} className="transition duration-300 hover:opacity-90 object-cover object-center lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]" width="150" height="150" alt="" /></Link>
                                <div>
                                <Link href={`/shop/${item[0]}`}><p className="font-helveticaneue-medium-extended text-xl sm:w-[300px] w-[200px]">{productsInfo?.filter(e => e.id === item[0])[0]?.name}</p></Link>
                                <div className="flex items-center gap-2 mt-4">
                                    <button onClick={() => {
                                        itemsGrouped[itemsGrouped.indexOf(item)].pop();
                                        setItems(itemsGrouped.flat())
                                    }} className="group">
                                        <svg className="group-hover:fill-mainSecond fill-darkBg"  xmlns="http://www.w3.org/2000/svg" width="18" height="18" data-name="Layer 1" viewBox="0 0 24 24"><path d="M0 11h24v2H0z"/></svg>
                                    </button>
                                    <p className="font-helveticaneue-medium-extended text-xl">{item.length}</p>
                                    <button onClick={() => setItems([...items, item[0]])} className="group">
                                        <svg className="group-hover:fill-mainSecond fill-darkBg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 11H13V0h-2v11H0v2h11v11h2V13h11v-2z" data-name="01 align center"/></svg>
                                    </button>
                                </div>
                                </div>
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
                            if (validEmail.test(email.value) && name.value !== "") {
                                setSendRequest(true);
                                setSendRequestMsg("Loading...");
                                emailMessage({name: name.value, email: email.value, message: message.value});
                                sendEmailFunc({ variables: { email: email.value, body: emailSend } })
                                .then(e => { 
                                    if (e.data?.sendEmail?.sent) {
                                        setSendRequestMsg("Request Sent");
                                        sendEmailReceiptFunc({ variables: { body: emailReceipt }});
                                    } else setSendRequestMsg("Request Not Sent Try Again")})
                                .catch(e => {console.log(e);setSendRequestMsg("There is a problem try again later")});
                            } else {
                                setSendRequest(true); 
                                setSendRequestMsg("Please enter your name and a valid email")
                            }
                        }
                        }
                    >
                        <h2 className="font-teko font-medium text-2xl uppercase text-black">Request a quote</h2>
                        <div className="flex gap-16 flex-wrap max-w-[671px] mt-8">
                            <input ref={node => { name = node;}} type="text" placeholder='Name' className='py-4 w-full text-darkBg contact:w-[300px] placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' />
                            <input ref={node => { email = node;}} type="text" placeholder='Email' className='py-4 w-full text-darkBg contact:w-[300px] placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' />
                        </div>
                        <textarea ref={node => { message = node;}} rows="7" className='mt-11 block w-full text-darkBg placeholder-paragraph border-solid border-b-[2px] border-paragraph focus:border-main' placeholder='Additional Information (Optional)' />
                        <div className="flex justify-between items-end">
                            <div className="flex gap-4 items-center mt-11 w-fit group">
                                <input type="submit" className='cursor-pointer border-none bg-transparent text-mainThird font-black uppercase hover:text-black' value="Send" />
                                {/* <svg className="group-hover:fill-black fill-[#F3B03C]" xmlns="http://www.w3.org/2000/svg" width="38.999" height="10.997"><path d="m31 0 8 5.5-8 5.5ZM0 6V5h31v1Z" data-name="arrow view"/></svg> */}
                                {sendRequest && <p className="uppercase font-bold text-black">{sendRequestMsg}</p>}
                            </div>
                            <button onClick={() => setItems([])} className="font-bold hover:text-mainThird text-black">CLEAR ALL</button>
                        </div>
                    </form>
                }
            </ContainerSecond>
        </div>
        <Footer contactContent={contactContent} menuItems={menuItems} dataSocialMedia={dataSocialMedia} />
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
    const cartImg = await client.query({
        query: GET_CART
      });
      const dataSocialMedia = await client.query({
        query: GET_SOCIALMEDIA
      });
    return {
        props: {
            menuItems:data?.menuItems?.edges,
            productsInfo:data?.products?.nodes,
            categories:data?.Categories?.nodes,
            shopContent:data?.Shop?.content,
            contactContent:dataContact?.data?.Contact?.content,
            cartImg:cartImg?.data?.Cart?.featuredImage?.node?.sourceUrl,
            seo:cartImg?.data?.Cart?.seo,
            dataSocialMedia:dataSocialMedia?.data?.socialMedias?.socialMedia,
        },
        revalidate: 1
    }
}