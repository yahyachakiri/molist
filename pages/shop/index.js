/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link'
import { useState } from 'react'
import client from '../../apollo/client'
import { ArticleHeader } from '../../components/ArticleHeader'
import { Container } from '../../components/Container'
import { ContainerSecond } from '../../components/ContainerSecond'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import { Project } from '../../components/Project'
import { GET_MENU } from '../../queries/get-menu'
import { GET_PRODUCTS } from '../../queries/get-products'
import { GET_PROJECTS } from '../../queries/get-projects'

export default function Shop({headerMenus, categories, shopContent, products}) {
    const [projectCategory,  setProjectCategory] = useState('all');
    return (
        <div className='bg-white pb-6'>
            <Header headerMenus={headerMenus} />
            <ArticleHeader title='Shop' image='./images/projects.png' white />
            <ContainerSecond>
            <div className="flex gap-12 flex-wrap my-14">
                {
                    categories.map(item => {
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
            <Container className='flex gap-12 justify-center flex-wrap'>
                {
                    products.filter(e => e?.productCategories?.nodes[0]?.id === projectCategory | projectCategory === 'all').length === 0 ?
                    <p className='text-paragraph font-semibold mb-12'>There is no products in this category</p>
                    :
                    products.filter(e => (e?.productCategories?.nodes[0]?.id === projectCategory | projectCategory === 'all') && e?.slug).map(product => {
                        return (
                                <Product  key={products.indexOf(product)}
                                    title={product?.name}
                                    link={product?.id}
                                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                                    image={product?.image?.sourceUrl}
                                />
                        )
                    })
                }
            </Container>
        </div>
    )
}
export async function getStaticProps(context) {
    const {data, loading} = await client.query({
        query: GET_PRODUCTS
    });
    return {
        props: {
            headerMenus:data?.menuItems?.edges,
            products:data?.products?.nodes,
            categories:data?.Categories?.nodes,
            shopContent:data?.Shop?.content,
        },
        revalidate: 1
    }
}