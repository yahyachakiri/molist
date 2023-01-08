/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import client from '../../apollo/client'
import { ArticleHeader } from '../../components/ArticleHeader'
import { Container } from '../../components/Container'
import { ContainerSecond } from '../../components/ContainerSecond'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Service } from '../../components/Service'
import { GET_CONTACT } from '../../queries/get-contact'
import { GET_SERVICES } from '../../queries/get-services'
import { GET_SOCIALMEDIA } from '../../queries/social-media'
import { classValue } from '../../util/classValue'

export default function services({menuItems, contactContent, categories, serviceImg, servicesInfo, dataSocialMedia, seo}) {
    const [serviceCategory,  setServiceCategory] = useState('all');
    return (
        <>
        <Head>
            { seo?.title && <title>{seo?.title}</title>}
            { seo?.metaDesc && <meta name="description" content={seo?.metaDesc} />}
            { seo?.metaKeywords && <meta name="keywords" content={seo?.metaKeywords} />}
            { (seo?.metaRobotsNofollow && seo?.metaRobotsNoindex) && <meta name="robots" content={`${seo?.metaRobotsNofollow}, ${seo?.metaRobotsNoindex}`} />}
        </Head>
        <Header menuItems={menuItems} />
        <div className='bg-white pb-6'>
            <ArticleHeader title='services' image={serviceImg} white />
            <ContainerSecond className='pb-[60px]'>
            <div className="flex gap-12 flex-wrap my-14">
                {
                    categories.map(item => {
                        return (
                            <button key={item.id} onClick={() => setServiceCategory(item.id)} className="font-black uppercase group">
                                <hr className={`"w-35 bg-main mb-2 h-1 w-8 group-hover:opacity-100" ${serviceCategory === item.id ? "opacity-100" : "opacity-0"}`} />
                                <p className={`"group-hover:text-black" ${serviceCategory === item.id ? "text-black" : "text-paragraph"}`}>{item.name}</p>
                            </button>
                        )
                    })
                }
                <button onClick={() => setServiceCategory('all')} className="font-black uppercase group">
                    <hr className={`"w-35 bg-main mb-2 h-1 w-8 group-hover:opacity-100" ${serviceCategory === 'all' ? "opacity-100" : "opacity-0"}`} />
                    <p className={`"group-hover:text-black" ${serviceCategory === 'all' ? "text-black" : "text-paragraph"}`}>All</p>
                </button>
            </div>
            </ContainerSecond>
            
            <Container className='flex gap-12 justify-center flex-wrap'>
                {
                    servicesInfo.filter(e => e.categories.nodes[0].id === serviceCategory | serviceCategory === 'all').length === 0 ?
                    <p className='text-paragraph font-semibold mb-12'>There is no service in this category</p>
                    :
                    servicesInfo.filter(e => e.categories.nodes[0].id === serviceCategory | serviceCategory === 'all').map(service => {
                        return (
                                <Service key={servicesInfo.indexOf(service)}
                                id={service.id}
                                name={service?.title}
                                image={service?.featuredImage?.node?.sourceUrl}
                                description={classValue(service?.content, "<p")}
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
    const {data} = await client.query({
        query: GET_SERVICES
    });
    const dataContact = await client.query({
        query: GET_CONTACT
    });
    const dataSocialMedia = await client.query({
        query: GET_SOCIALMEDIA
      });
    return {
        props: {
            categories:data?.categories?.nodes[0]?.children?.nodes,
            menuItems: data?.menuItems?.edges,
            seo: data?.servicesPage?.seo,
            servicesInfo:data?.services?.nodes,
            serviceImg:data?.servicesImg?.featuredImage?.node?.sourceUrl,
            contactContent:dataContact?.data?.Contact?.content,
            dataSocialMedia:dataSocialMedia?.data?.socialMedias?.socialMedia,
        },
        revalidate: 1
    }
}