/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import client from '../../apollo/client';
import { ContainerSecond } from '../../components/ContainerSecond';
import { Header } from '../../components/Header';
import { GET_PRODUCTS } from '../../queries/get-products';
import { GET_PRODUCT } from '../../queries/get-product';
import {imgValue, loopImgValue} from '../../util/classValue'
import { Footer } from '../../components/Footer';
import { GET_CONTACT } from '../../queries/get-contact';
import { GET_SERVICES } from '../../queries/get-services';
import { GET_SERVICE } from '../../queries/get-service';
import { ArticleHeader } from '../../components/ArticleHeader';
import { GET_SOCIALMEDIA } from '../../queries/social-media';
import Head from 'next/head';

export default function Page({menuItems, title, content, image, id, contactContent, loading, dataSocialMedia, seo}) {

  if (loading == false && title) {
    return (
      <>
        <Head>
            { seo?.title && <title>{seo?.title}</title>}
            { seo?.metaDesc && <meta name="description" content={seo?.metaDesc} />}
            { seo?.metaKeywords && <meta name="keywords" content={seo?.metaKeywords} />}
            { (seo?.metaRobotsNofollow && seo?.metaRobotsNoindex) && <meta name="robots" content={`${seo?.metaRobotsNofollow}, ${seo?.metaRobotsNoindex}`} />}
        </Head>
        <Header menuItems={menuItems}/>
        <ArticleHeader title={title} image={image} />
        <ContainerSecond className='py-10'>
          <div className='services' dangerouslySetInnerHTML={{__html: content}}/>
        </ContainerSecond>
        <Footer contactContent={contactContent} menuItems={menuItems} dataSocialMedia={dataSocialMedia} />
      </>
    )
  }
  return (
    <>
      <Header menuItems={menuItems} />
        <ContainerSecond className='pt-32 sm:pt-52 pb-40 sm:pb-60 bg-white flex flex-wrap gap-12 flex items-center justify-center'>
          <p className='font-[Teko] font-medium text-xl'>Loading...</p>
        </ContainerSecond>
        <Footer contactContent={contactContent} menuItems={menuItems} dataSocialMedia={dataSocialMedia} />
    </>
  )
}

export async function getStaticProps({params}) {
  
  const {data, loading} = await client.query({
      query: GET_SERVICE,
      variables: {
        id: params?.id,
      },
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
          loading: loading,
          title: data?.service?.title,
          id: data?.service?.id,
          image:data?.service?.featuredImage?.node?.sourceUrl,
          content: data?.service?.content,
          seo: data?.service?.seo,
          contactContent:dataContact?.data?.Contact?.content,
          dataSocialMedia:dataSocialMedia?.data?.socialMedias?.socialMedia,
      },
      revalidate: 1
  }
}

export async function getStaticPaths() {
	const {data} = await client.query( {
		query: GET_SERVICES
	} );

	const pathsData = [];

  data?.services?.nodes.map(service => {
    if (service?.id !== "undefined") {
      pathsData.push( {params: {id: service?.id}} );
    }
  })

	return {
		paths: [],
		fallback: true
	};
}