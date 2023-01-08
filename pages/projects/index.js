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
import { Project } from '../../components/Project'
import { GET_CONTACT } from '../../queries/get-contact'
import { GET_MENU } from '../../queries/get-menu'
import { GET_PROJECTS } from '../../queries/get-projects'
import { GET_SOCIALMEDIA } from '../../queries/social-media'
import { classValue, imgValue } from '../../util/classValue'

export default function projects({menuItems, ProjectsCategory, projects, projectsContent, contactContent, projectsImg, dataSocialMedia, seo}) {
    const [projectCategory,  setProjectCategory] = useState('all');
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
            <ArticleHeader title='projects' image={projectsImg} white />
            <ContainerSecond className='py-[60px]'>
            <hr className="w-35 bg-main mb-2 h-0.5 w-40" />
            <h1 className="uppercase text-4xl sm:text-5xl font-helveticaneue-black">
                <span className="font-bodoni">Embody</span>{" "}
                <span className=" font-black">
                    Your
                    <br />
                    Imagination
                </span>
            </h1>
            <div className="flex gap-12 flex-wrap my-14">
                {
                    ProjectsCategory && ProjectsCategory.map(item => {
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
                    projects.filter(e => e.categories.nodes[0].id === projectCategory | projectCategory === 'all').length === 0 ?
                    <p className='text-paragraph font-semibold mb-12'>There is no projects in this category</p>
                    :
                    projects.filter(e => e.categories.nodes[0].id === projectCategory | projectCategory === 'all').map(project => {
                        return (
                            <Link key={projects.indexOf(project)} href={`/projects/${project.slug}`}>
                                <Project
                                    title={project?.title}
                                    description={classValue(project?.content, "<p")}
                                    // image='./images/projects-1.png'
                                    image={project?.featuredImage?.node?.sourceUrl}
                                    category={project.categories.nodes[0].name}
                                />
                            </Link>
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
        query: GET_PROJECTS
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
            // ProjectsCategory:data?.ProjectsCategory?.nodes[0]?.children?.nodes,
            projects:data?.projects?.nodes,
            projectsContent:data?.Content?.content,
            seo:data?.Content?.seo,
            projectsImg:data?.Content?.featuredImage?.node?.sourceUrl,
            contactContent:dataContact?.data?.Contact?.content,
            dataSocialMedia:dataSocialMedia?.data?.socialMedias?.socialMedia,
        },
        revalidate: 1
    }
}