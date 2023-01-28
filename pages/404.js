/* eslint-disable react-hooks/rules-of-hooks */
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import client from '../apollo/client'
import { ArticleHeader } from '../components/ArticleHeader'
import { Container } from '../components/Container'
import { ContainerSecond } from '../components/ContainerSecond'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Service } from '../components/Service'
import { GET_CONTACT } from '../queries/get-contact'
import { GET_SERVICES } from '../queries/get-services'
import { GET_SOCIALMEDIA } from '../queries/social-media'
import { classValue } from '../util/classValue'

export default function services({menuItems, contactContent, categories, serviceImg, servicesInfo, dataSocialMedia, seo}) {
    const [serviceCategory,  setServiceCategory] = useState('all');
    return (
        <>
        <Head>
            <title>Page not found - Molist.net</title>
        </Head>
        <Header menuItems={menuItems} />
        <div className="flex flex-col min-h-screen">
            <div className='flex-grow flex items-center justify-center'>
                <p className='font-teko font-medium text-xl my-24'>Page Not Found</p>
            </div>
            <Footer contactContent={contactContent} menuItems={menuItems} dataSocialMedia={dataSocialMedia} />
        </div>
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