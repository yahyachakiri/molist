/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import { useState } from 'react'
import client from '../../apollo/client'
import { ArticleHeader } from '../../components/ArticleHeader'
import { Container } from '../../components/Container'
import { ContainerSecond } from '../../components/ContainerSecond'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import { GET_CONTACT } from '../../queries/get-contact'
import { GET_PRODUCTS } from '../../queries/get-products'
import { GET_SOCIALMEDIA } from '../../queries/social-media'
import { imgValue } from '../../util/classValue'

export default function Shop({menuItems, categories, shopContent, products, contactContent, shopImg, dataSocialMedia, seo}) {
    const [projectCategory,  setProjectCategory] = useState('all');
    const [cart, setCart] = useState("");
    const [cartItems, setCartItems] = useState([]);
    return (
        <>
        <Head>
            { seo?.title && <title>{seo?.title}</title>}
            { seo?.metaDesc && <meta name="description" content={seo?.metaDesc} />}
            { seo?.metaKeywords && <meta name="keywords" content={seo?.metaKeywords} />}
            { (seo?.metaRobotsNofollow && seo?.metaRobotsNoindex) && <meta name="robots" content={`${seo?.metaRobotsNofollow}, ${seo?.metaRobotsNoindex}`} />}
        </Head>
        <Header menuItems={menuItems} cart={cart} />
        <div className='bg-white pb-6'>
            <ArticleHeader title='Shop' image={shopImg} white />
            <ContainerSecond>
            <div className="flex gap-12 flex-wrap my-14">
                {
                    categories.filter(e => e.name != 'Uncategorized').map(item => {
                        return (
                            <button key={item.id} onClick={() => setProjectCategory(item.id)} className="font-black uppercase group">
                                <hr className={`"w-35 bg-main mb-2 h-1 w-8 group-hover:opacity-100" ${projectCategory === item.id ? "opacity-100" : "opacity-0"}`} />
                                <p className={`"group-hover:text-black" ${projectCategory === item.id ? "text-black" : "text-paragraph"}`}>{item.name}</p>
                            </button>
                        )
                    })
                }
                <button onClick={() => setProjectCategory('all')} className="font-black uppercase group">
                    <hr className={`"w-35 bg-main mb-2 h-1 w-8 group-hover:opacity-100" ${projectCategory === 'all' ? "opacity-100" : "opacity-0"}`} />
                    <p className={`"group-hover:text-black" ${projectCategory === 'all' ? "text-black" : "text-paragraph"}`}>All</p>
                </button>
            </div>
            </ContainerSecond>
            <Container className='flex gap-12 justify-center flex-wrap pb-14'>
                {
                    products.filter(e => e?.productCategories?.nodes[0]?.id === projectCategory | projectCategory === 'all').length === 0 ?
                    <p className='text-paragraph font-semibold mb-12'>There is no products in this category</p>
                    :
                    products.filter(e => (e?.productCategories?.nodes[0]?.id === projectCategory | projectCategory === 'all') && e?.slug).map(product => {
                        return (
                                <Product key={products.indexOf(product)}
                                    id={product.id}
                                    title={product?.name}
                                    link={product?.id}
                                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                                    image={product?.image?.sourceUrl}
                                    cart={cart}
                                    setCart={setCart}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                />
                        )
                    })
                }
            </Container>
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
      const dataSocialMedia = await client.query({
        query: GET_SOCIALMEDIA
      });
    return {
        props: {
            menuItems:data?.menuItems?.edges,
            products:data?.products?.nodes,
            categories:data?.Categories?.nodes,
            shopContent:data?.Shop?.content,
            seo:data?.Shop?.seo,
            shopImg:data?.Shop?.featuredImage?.node?.sourceUrl,
            contactContent:dataContact?.data?.Contact?.content,
            dataSocialMedia:dataSocialMedia?.data?.socialMedias?.socialMedia,
        },
        revalidate: 1
    }
}