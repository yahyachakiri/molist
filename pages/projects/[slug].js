import { useRouter } from 'next/router'
import React from 'react'
import client from '../../apollo/client';
import { ContainerSecond } from '../../components/ContainerSecond';
import { Header } from '../../components/Header';
import { GET_PROJECT } from '../../queries/get-project';
import { GET_PROJECTS } from '../../queries/get-projects';
import {imgValue, loopImgValue} from '../../util/classValue'

export default function Page({headerMenus, title, projectContent}) {
  let propertyArray = [];
  for (let i = 1; i < projectContent.split('property-title').length; i++) {
      propertyArray.push({
        title: projectContent.split('property-title')[i]?.split('>')[1]?.split('</')[0],
        description: projectContent.split('property-descripton')[i]?.split('>')[1]?.split('</')[0],
      })
  }
  let paragraphArray = [];
  for (let i = 1; i < projectContent?.split('header')?.length; i++) {
      paragraphArray.push({
        title: projectContent.split('header')[i]?.split('>')[1]?.split('</')[0],
        description: projectContent?.split('paragraph')[i]?.split('>')[1]?.split('</')[0],
      })
  }
  return (
    <>
      <Header headerMenus={headerMenus} />
      <div className='pt-32 sm:pt-52 pb-40 sm:pb-60 bg-white'>
            <img src={imgValue(projectContent, 'banner')} alt="" className='w-full h-[300px] sm:h-[633px] object-cover object-center' />
            <ContainerSecond>
                <h1 className="text-6xl sm:text-8xl font-black uppercase mt-32 sm:mt-40">{title}</h1>
                <hr className="w-35 bg-main my-7 h-0.5 w-40 inline-block" />
                <div className="flex flex-wrap gap-10">
                  {
                    propertyArray.map(property => {
                      return (
                      <div key={propertyArray.indexOf(property)} className='w-[300px]'>
                          <p className="font-teko text-3xl uppercase">{property.title}</p>
                          <p className='text-lg text-paragraph'>{property.description}</p>
                      </div>
                      )
                    })
                  }
                </div>
                {
                  paragraphArray.map(paragraph => {
                    return (
                      <div key={paragraphArray.indexOf(paragraph)} className="pt-24">
                          <h2 className='font-teko text-4xl font-medium mb-7'>{paragraph.title}</h2>
                          <p className="text-paragraph">{paragraph.description}</p>
                      </div>
                    )
                  })
                }
                <div className="mt-40">
                  {
                    loopImgValue(projectContent, 'slider')?.map(img => {
                      return  <img key={loopImgValue(projectContent, 'slider').indexOf(img)} src=".././images/project.png" className='h-[300px] sm:h-[706px] object-cover object-center' alt="" />
                    })
                  }
                </div>
            </ContainerSecond>
        </div>
    </>
  )
}

export async function getStaticProps({params}) {
  
  const {data, loading} = await client.query({
      query: GET_PROJECT,
      variables: {
        slug: params?.slug,
      },
    });
    console.log(params);
  return {
      props: {
          headerMenus:data?.menuItems?.edges,
          title: data?.Project?.title,
          projectContent: data?.Project?.content,
      },
      revalidate: 1
  }
}

export async function getStaticPaths() {
	const {data} = await client.query( {
		query: GET_PROJECTS
	} );

	const pathsData = [];

  data?.projects?.nodes.map(project => {
    if (project?.slug !== "undefined") {
      pathsData.push( {params: {slug: project?.slug}} );
    }
  })

	return {
		// paths: pathsData,
    paths: pathsData,
		fallback: false
	};
}