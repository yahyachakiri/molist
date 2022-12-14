/* eslint-disable react-hooks/rules-of-hooks */
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
import { imgValue } from '../../util/classValue'

export default function projects({menuItems, ProjectsCategory, projects, projectsContent, contactContent}) {
    const [projectCategory,  setProjectCategory] = useState('all');
    return (
        <>
        <Header menuItems={menuItems} />
        <div className='bg-white pb-6'>
            <ArticleHeader title='projects' image={imgValue(projectsContent, 'banner')} white />
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
                    ProjectsCategory.map(item => {
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
                                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
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
        <Footer contactContent={contactContent} menuItems={menuItems} />
        </>
    )
}
export async function getStaticProps(context) {
    const {data, loading} = await client.query({
        query: GET_PROJECTS
    });
    const dataContact = await client.query({
        query: GET_CONTACT
    })
    return {
        props: {
            menuItems:data?.menuItems?.edges,
            ProjectsCategory:data?.ProjectsCategory?.nodes[0]?.children?.nodes,
            projects:data?.projects?.nodes,
            projectsContent:data?.Content?.content,
            contactContent:dataContact?.data?.Contact?.content
        },
        revalidate: 1
    }
}