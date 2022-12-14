/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
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

export default function Page({menuItems, title, content, image, id, contactContent, loading}) {
    console.log(title, loading, menuItems, title, content, image);
//   const [cart, setCart] = useState("");
//     useEffect(() => {
//         if (cart === id) {
//             if (localStorage.getItem("cart") !== "" && localStorage.getItem("cart")) {
//                 localStorage.setItem("cart", [...localStorage.getItem("cart")?.split(","), cart]);
//             } else {
//                 localStorage.setItem("cart", [cart]);
//             }
//         }
//         return () => {
//             setCart("");
//         }
//     }, [cart])

  if (title) {
    return (
      <>
        <Header menuItems={menuItems}/>
        <ArticleHeader title={title} image={image} small />
        <ContainerSecond className='py-10'>
          <div className='services' dangerouslySetInnerHTML={{__html: content}}/>
        </ContainerSecond>
        <Footer contactContent={contactContent} menuItems={menuItems} />
      </>
    )
  }
  return (
    <>
      <Header menuItems={menuItems} />
        <ContainerSecond className='pt-32 sm:pt-52 pb-40 sm:pb-60 bg-white flex flex-wrap gap-12 flex items-center justify-center'>
          <p className='font-[Teko] font-medium text-xl'>Loading...</p>
        </ContainerSecond>
        <Footer contactContent={contactContent} menuItems={menuItems} />
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
  })
  return {
      props: {
          menuItems:data?.menuItems?.edges,
        loading: loading,
        title: data?.service?.title,
        id: data?.service?.id,
        image:data?.service?.featuredImage?.node?.sourceUrl,
        content: data?.service?.content,
        contactContent:dataContact?.data?.Contact?.content
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