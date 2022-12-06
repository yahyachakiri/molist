/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'
import client from '../../apollo/client';
import { ContainerSecond } from '../../components/ContainerSecond';
import { Header } from '../../components/Header';
import { GET_PRODUCTS } from '../../queries/get-products';
import { GET_PRODUCT } from '../../queries/get-product';
import {imgValue, loopImgValue} from '../../util/classValue'

export default function Page({headerMenus, title, description, image}) {
  if (title) {
    return (
      <>
        <Header headerMenus={headerMenus} />
        <ContainerSecond className='pt-32 sm:pt-52 pb-40 sm:pb-60 bg-white flex flex-wrap gap-12'>
        <img src={image} className="transition duration-300 hover:opacity-90 object-cover object-center min-w-[250px] min-h-[250px] w-[350px] h-[350px]" width="250" height="250" alt="" />
        <div>
          <p className='font-[Teko] font-medium text-6xl'>{title}</p>
          <div className='my-6 max-w-[500px]' dangerouslySetInnerHTML={{__html: description}}/>
          <button className="bg-darkBg w-full p-4 uppercase font-[Teko] font-medium text-xl text-white hover:text-mainSecond transition duration-300">Add to cart</button>
        </div>
        </ContainerSecond>
      </>
    )
  }
  return (
    <>
      <Header headerMenus={headerMenus} />
        <ContainerSecond className='pt-32 sm:pt-52 pb-40 sm:pb-60 bg-white flex flex-wrap gap-12 flex items-center justify-center'>
          <p className='font-[Teko] font-medium text-xl'>Loading...</p>
        </ContainerSecond>
    </>
  )
}

export async function getStaticProps({params}) {
  
  const {data, loading} = await client.query({
      query: GET_PRODUCT,
      variables: {
        id: params?.id,
      },
  });
  return {
      props: {
          headerMenus:data?.menuItems?.edges,
          title: data?.product?.name,
          image:data?.product?.image?.sourceUrl,
          description: data?.product?.description,
      },
      revalidate: 1
  }
}

export async function getStaticPaths() {
	const {data} = await client.query( {
		query: GET_PRODUCTS
	} );

	const pathsData = [];

  data?.products?.nodes.map(product => {
    if (product?.id !== "undefined") {
      pathsData.push( {params: {id: product?.id}} );
    }
  })
  console.log(pathsData)

	return {
		paths: [],
		fallback: true
	};
}