/* eslint-disable react-hooks/rules-of-hooks */
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
import { imgValue } from '../../util/classValue'

export default function Shop({headerMenus, categories, shopContent, products, contactContent}) {
    const [projectCategory,  setProjectCategory] = useState('all');
    const [cart, setCart] = useState("");
    return (
        <>
        <Header headerMenus={headerMenus} cart={cart} />
        <div className='bg-white pb-6'>
            <ArticleHeader title='Shop' image={imgValue(shopContent, 'banner')} white />
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
                                />
                        )
                    })
                }
            </Container>
        </div>
        <Footer contactContent={contactContent} />
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
            headerMenus:data?.menuItems?.edges,
            products:data?.products?.nodes,
            categories:data?.Categories?.nodes,
            shopContent:data?.Shop?.content,
            contactContent:dataContact?.data?.Contact?.content
        },
        revalidate: 1
    }
}