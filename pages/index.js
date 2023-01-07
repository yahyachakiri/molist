/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import client from "../apollo/client";
import { Arrow } from "../components/Arrow";
import { Container } from "../components/Container";
import { ContainerSecond } from "../components/ContainerSecond";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Partners } from "../components/Partners";
import { Services } from "../components/Services";
import { GET_CONTACT } from "../queries/get-contact";
import { GET_HOME } from "../queries/get-home";
import { GET_MENU } from "../queries/get-menu";
import { GET_PARTNERS } from "../queries/get-partners";
import { GET_PROJECTS } from "../queries/get-projects";
import { GET_SERVICES } from "../queries/get-services";
import { GET_SOCIALMEDIA } from "../queries/social-media";
import main from "./../public/images/main.png";

export default function Home({ homeContent, contactContent, projectsItems, servicesItems, servicesCategories, menuItems, homeImg, dataSocialMedia,partnersData}) {
  console.log(partnersData);
  const [countProject, setCountProject] = useState(0);
  const [count, setCount] = useState(1);
  const [rightDisable, setRightDisable] = useState(false);
  const [leftDisable, setLeftDisable] = useState(true);
  const [widthBar, setWidthBar] = useState(`30%`);
  const [paragArray, setParagArray] = useState([]);
  const onProjectClickRight = () => {
    if (projectsItems.length > countProject + 2) {
      setCountProject(countProject + 2);
    }
  }
  const onProjectClickLeft = () => {
    if (countProject > 0) {
      setCountProject(countProject - 2);
    }
  }
  useEffect(() => {
    if (count == Math.ceil(paragArray.length/3) - 1) {
      setRightDisable(true);
    }
    if (count >= Math.ceil(paragArray.length/3) && count > 1) {
      setLeftDisable(true);
    }
  }, [])
  useEffect(() => {
    setWidthBar(`${parseInt((count/Math.ceil(paragArray.length/3))*100)}%`)
  }, [count])
  const onClickRight = () => {
    if (count < Math.ceil(servicesItems.length/3)) {
      setCount(count + 1);
    }
    if (count == Math.ceil(servicesItems.length/3) - 1) {
      setRightDisable(true);
    }
    setLeftDisable(false);
  }
  const onClickLeft = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    // if (count >= Math.ceil(servicesItems.length/3) && count > 1) {
    if (count == 2) {
      setLeftDisable(true);
    }
    setRightDisable(false);
  }
  // console.log(homeContent.split('src="')[1].split('"')[0]);
  // console.log(homeContent.split('<p className="parag">')[2].split('</p>')[0]);
  // useEffect(() => {
  //   main();
  // }, []);
  const [submainArray, setSubmainArray] = useState([]);
    for (let i = 1; i < homeContent.split('main-p').length; i++) {
    paragArray[i-1] = {title: homeContent.split('main-p')[i]?.split('>')[1]?.split('</')[0]}
    }

    for (let i = 1; i < homeContent.split('main-img').length; i++) {
      paragArray[i-1] = {title: paragArray[i-1].title, image: homeContent?.split('main-img')[i]?.split('src="')[1]?.split('"')[0]}
    }
  const mainArray = (i) => {
    paragArray.length;
    paragArray.split(i-3, i*3)
  }
  let projects = [];
  const [project, setProject] = useState(0);
  for (let i = 1; i < homeContent.split('project-img').length; i++) {
    projects.push({
      title: homeContent.split('project-title')[i]?.split('>')[1]?.split('</')[0],
      type: homeContent.split('project-type')[i]?.split('>')[1]?.split('</')[0],
      img: homeContent.split('project-img')[i]?.split('src="')[1]?.split('"')[0]
    });
  }

  let clients = [];
  for (let i = 1; i < homeContent.split('client-review').length; i++) {
    clients.push({
      review: homeContent.split('client-review')[i]?.split('>')[1]?.split('</')[0],
      name: homeContent.split('client-name')[i]?.split('>')[1]?.split('</')[0],
      position: homeContent.split('client-position')[i]?.split('>')[1]?.split('</')[0],
      img: homeContent.split('client-img')[i]?.split('src="')[1]?.split('"')[0]
    });
  }
  
  return (
    <div>
      <Header menuItems={menuItems} />
      <div loading="lazy" style={{backgroundImage: `url(${homeImg})`}} className={` bg-no-repeat bg-cover bg-center`}>
        <Container className="flex flex-wrap min-h-screen mx-auto text-white py-40 relative justify-center main:justify-between min-w-full">
          <div className="px-[70px]">
            <h1 className="uppercase text-4xl sm:text-6xl mt-12 font-helveticaneue-black">
              <span className="font-bodoni text-[32px] sm:text-[56px]">Embody</span>{" "}
              <span className=" font-black">
                Your
                <br />
                Imagination
              </span>
            </h1>
          </div>
          <div className="absolute left-6 bottom-8 flex flex-col gap-4">
            <Link href={dataSocialMedia?.facebook ? dataSocialMedia?.facebook : ""} className="group"><i className="fa-brands fa-facebook-f group-hover:text-mainSecond text-xl"></i></Link>
            <Link href={dataSocialMedia?.intagram ? dataSocialMedia?.intagram : ""} className="group"><i className="fa-brands fa-instagram group-hover:text-mainSecond text-xl"></i></Link>
            <Link href={dataSocialMedia?.linkedin ? dataSocialMedia?.linkedin : ""} className="group"><i className="fa-brands fa-linkedin-in group-hover:text-mainSecond text-xl"></i></Link>
          </div>
          <div>
            <div className="flex items-end gap-5 w-fit ml-auto">
              <p className=" text-[30px] font-black">
                <span className="text-[72px]">0{count}</span>/0{Math.ceil(servicesItems.length/3)}
              </p>
              <div className="h-[3px] w-[180px] bg-[#C2C2C2] mb-8 relative">
                <div style={{width: widthBar}} className={`bar absolute bg-main top-0 left-0 h-full transition duration-700`}></div>
              </div>
            </div>
            <div className="flex items-end sm:gap-[30px] gap-[15px]">
              {
                servicesItems.slice((count - 1)*3, 3 * count).map(item => {
                  return (
                    <Link key={servicesItems.indexOf(item)} href={`/services/${item?.id}`} className="font-medium group">
                      <div className="w-9 bg-main opacity-0 group-hover:opacity-100 transition duration-300"></div>
                      <p className="mb-3 group-hover:text-main transition duration-300 w-[150px] max-h-[48px] overflow-hidden">
                        {
                          item?.title
                        }
                      </p>
                      <img
                        src={item?.featuredImage?.node?.sourceUrl}
                        alt=""
                        width="200"
                        height="300"
                        className="h-[300px] w-[200px] object-cover object-center"
                      />
                    </Link>
                  )
                })
              }
            </div>
            <div className="absolute bottom-0 right-12 flex">
              <Arrow left onClickAction={onClickLeft} disabled={leftDisable} />
              <Arrow right onClickAction={onClickRight} disabled={rightDisable} />
            </div>
          </div>
        </Container>
      </div>
      <Info homeContent={homeContent} />
      <Services homeContent={homeContent} servicesItems={servicesItems} servicesCategories={servicesCategories} />
      {
        projectsItems.length > 0 &&
        <div className="flex relative flex-col lg:flex-row">
        <div className="absolute left-[5%] top-1/2 translate-y-[-50%] z-10">
          <Arrow left onClickAction={onProjectClickLeft} />
        </div>
        <div className="absolute right-[5%] top-1/2 translate-y-[-50%] z-10">
          <Arrow right onClickAction={onProjectClickRight} />
        </div>
        {
          projectsItems.slice(countProject, countProject + 2).map(projectItem => {
            return (
              <Link href={`/projects/${projectItem?.slug}`} key={projectItem?.slug} className="lg:w-1/2 h-[700px] relative group">
                <img
                  src={projectItem?.featuredImage?.node?.sourceUrl}
                  className="absolute w-full h-full object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 px-14 py-10 bg-darkBg">
                  <p className="text-sm text-paragraph mb-2 capitalize">{projectItem?.categories?.nodes[0]?.name}</p>
                  <p className="text-white text-4xl font-teko max-w-[295px] group-hover:text-main">
                  {projectItem?.title}
                  </p>
                </div>
              </Link>
            )
          })
        }
        </div>
      }
      <div className="bg-white py-[65px]">
        <ContainerSecond>
        {
          clients.length > 0 &&
          <>
          <hr className="w-35 bg-main mb-8 h-0.5 w-40" />
          <p className="uppercase font-teko text-2xl font-medium w-[100px] leading-none">
            Happy client says
          </p>
          <div className="flex flex-wrap justify-center gap-8 w-full mt-14">
            {
              clients.map(client => {
                return (
                  <div key={client.name}>
                    <p className="text-paragraph max-w-[500px]">
                      {client.review}
                    </p>
                    <div className="flex gap-6 mt-10">
                      <img
                        src={client.img}
                        width="55"
                        height="55"
                        className="border-round object-cover object-center"
                        alt=""
                      />
                      <div>
                        <p className="font-medium font-teko text-lg">{client.name}</p>
                        <p className="opacity-50 text-sm">{client.position}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          </>
        }
        <Partners partnersData={partnersData} />
      </ContainerSecond>
      </div>
      <Footer contactContent={contactContent} menuItems={menuItems} dataSocialMedia={dataSocialMedia} />
    </div>
  );
}

export async function getStaticProps(context) {
  const {data, loading} = await client.query({
    query: GET_HOME
  });
  const dataContact = await client.query({
    query: GET_CONTACT
  });
  const dataProjects = await client.query({
    query: GET_PROJECTS
  });
  const dataServices = await client.query({
    query: GET_SERVICES
  });
  const dataSocialMedia = await client.query({
    query: GET_SOCIALMEDIA
  });
  const dataPartners = await client.query({
      query: GET_PARTNERS
  });
  return {
    props: {
      menuItems:data?.menuItems?.edges,
      homeContent:data?.Home?.content,
      homeImg:data?.Home?.featuredImage?.node?.sourceUrl,
      projectsItems:dataProjects?.data?.projects?.nodes,
      servicesItems:dataServices?.data?.services?.nodes,
      servicesCategories:dataServices?.data?.categories?.nodes[0]?.children?.nodes,
      contactContent:dataContact?.data?.Contact?.content,
      dataSocialMedia:dataSocialMedia?.data?.socialMedias?.socialMedia,
      partnersData:dataPartners?.data?.partners?.nodes,
    },
    revalidate: 1
  }
}