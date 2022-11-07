import { ArticleHeader } from '../../components/ArticleHeader'
import { Container } from '../../components/Container'
import { ContainerSecond } from '../../components/ContainerSecond'
import { Project } from '../../components/Project'

export default function projects() {
    return (
        <div className='bg-white pb-6'>
            <ArticleHeader title='projects' image='./images/projects.png' white />
            <ContainerSecond className='py-[60px]'>
            <hr className="w-35 bg-main mb-2 h-0.5 w-40" />
            <h1 className="uppercase text-4xl sm:text-5xl">
                <span className="font-bodoni">Embody</span>{" "}
                <span className=" font-black">
                    Your
                    <br />
                    Imagination
                </span>
            </h1>
            <div className="flex gap-12 flex-wrap my-14">
                <button className="font-black uppercase group">
                    <hr className="w-35 bg-main mb-2 h-1 w-8 opacity-0 group-hover:opacity-100" />
                    <p className='text-paragraph group-hover:text-black'>Interfaces</p>
                </button>
                <button className="font-black uppercase group">
                    <hr className="w-35 bg-main mb-2 h-1 w-8 opacity-0 group-hover:opacity-100" />
                    <p className='text-paragraph group-hover:text-black'>Moulds</p>
                </button>
                <button className="font-black uppercase group">
                    <hr className="w-35 bg-main mb-2 h-1 w-8 opacity-0 group-hover:opacity-100" />
                    <p className='text-paragraph group-hover:text-black'>Garden Furniture</p>
                </button>
                <button className="font-black uppercase group">
                    <hr className="w-35 bg-main mb-2 h-1 w-8 opacity-0 group-hover:opacity-100" />
                    <p className='text-paragraph group-hover:text-black'>Holograms</p>
                </button>
            </div>
            </ContainerSecond>
            <Container className='flex gap-12 justify-center flex-wrap'>
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-1.png'
                />
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-2.png'
                />
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-3.png'
                />
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-4.png'
                />
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-5.png'
                />
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-6.png'
                />
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-7.png'
                />
                <Project 
                    title='Class aptent taciti sociosqu ad litora torquent'
                    description='Class aptent taciti sociosqu ad litora  torquent per conubia nostra.faucibus sed  dolor eget posuere Nam ac elit a ante vitae viverra urna nulla. Mauris elementum  accumsan leo vel tempor.'
                    image='./images/projects-8.png'
                />
            </Container>
        </div>
    )
}
