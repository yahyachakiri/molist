/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { Arrow } from "../components/Arrow";
import { Container } from "../components/Container";
import { ContainerSecond } from "../components/ContainerSecond";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Parteners } from "../components/Parteners";
import { Services } from "../components/Services";
import main from "./../public/images/main.png";

export default function Home() {
  const [count, setCount] = useState(1);
  const [rightDisable, setRightDisable] = useState(false);
  const [leftDisable, setLeftDisable] = useState(true);
  const [widthBar, setWidthBar] = useState(`30%`);
  useEffect(() => {
    // setWidthBar((count/3)*100)
    setWidthBar(`${parseInt((count/3)*100)}%`)
  }, [count])
  const onClickRight = () => {
    if (count < 3) {
      setCount(count + 1);
    }
    if (count < 3 && count > 1) {
      setRightDisable(true);
    }
    setLeftDisable(false);
  }
  const onClickLeft = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (count < 3 && count > 1) {
      setLeftDisable(true);
    }
    setRightDisable(false);
  }
  return (
    <div>
      {/* <Header /> */}
      {/* <div style={{background: 'url("./images/main.png")'}} className='object-cover bg-bottom bg-no-repeat'> */}
      <div className={`background bg-no-repeat bg-cover bg-center`}>
        {/* <Container className="flex flex-wrap min-h-screen  text-white py-40 relative justify-center main:justify-between">
          <div className="px-[70px]">
            <h1 className="uppercase text-5xl sm:text-6xl mt-12">
              <span className="font-bodoni">Embody</span>{" "}
              <span className=" font-black">
                Your
                <br />
                Imagination
              </span>
            </h1>
            <div className="h-[70px] w-[70px] bg-[#111111] relative mt-20 ml-[115px]">
              <p className="uppercase font-medium font-teko absolute w-[75px] top-[50%] left-9 translate-y-[-50%]">
                View Project
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-end gap-5 w-fit ml-auto">
              <p className=" text-[30px] font-black">
                <span className="text-[72px]">0{count}</span>/03
              </p>
              <div className="h-[3px] w-[180px] bg-[#C2C2C2] mb-8 relative">
                <div style={{width: widthBar}} className={`bar absolute bg-main top-0 left-0 h-full transition duration-700`}></div>
              </div>
            </div>
            <div className="flex sm:gap-[30px] gap-[15px]">
              <div className="font-medium group">
                <div className="h-1 w-9 bg-main opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <p className="mb-3 group-hover:text-main transition duration-300 w-[90px]">
                  Living Room Decor
                </p>
                <img
                  src="./images/main-1.png"
                  alt=""
                  width="200"
                  height="300"
                />
              </div>
              <div className="font-medium group">
                <div className="h-1 w-9 bg-main opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <p className="mb-3 group-hover:text-main transition duration-300 w-[90px]">
                  Office Decor design 2020
                </p>
                <img
                  src="./images/main-2.png"
                  alt=""
                  width="200"
                  height="300"
                />
              </div>
              <div className="font-medium group">
                <div className="h-1 w-9 bg-main opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <p className="mb-3 group-hover:text-main transition duration-300 w-[90px]">
                  Kitchen Room Decor
                </p>
                <img
                  src="./images/main-3.png"
                  alt=""
                  width="200"
                  height="300"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-12 flex">
              <Arrow left onClickAction={onClickLeft} disabled={leftDisable} />
              <Arrow right onClickAction={onClickRight} disabled={rightDisable} />
            </div>
          </div>
        </Container> */}
      </div>
      <Info />
      <Services />
      <div className="flex relative flex-col lg:flex-row">
        <div className="absolute left-[5%] top-1/2 translate-y-[-50%] z-10">
          <Arrow left />
        </div>
        <div className="absolute right-[5%] top-1/2 translate-y-[-50%] z-10">
          <Arrow right />
        </div>
        <div className="lg:w-1/2 h-[700px] relative group">
          <img
            src="./images/project-1.png"
            className="absolute w-full h-full object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 px-14 py-10 bg-darkBg">
            <p className="text-sm text-paragraph mb-2">Residential</p>
            <p className="text-white text-4xl font-teko max-w-[295px] group-hover:text-main">
              Class aptent taciti sociosqu ad litora torquent
            </p>
          </div>
        </div>
        <div className="hidden lg:w-1/2 lg:block h-[700px] relative group">
          <img
            src="./images/project-2.png"
            className="absolute w-full h-full object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 px-14 py-10 bg-darkBg">
            <p className="text-sm text-paragraph mb-2">Residential</p>
            <p className="text-white text-4xl font-teko max-w-[295px] group-hover:text-main">
              Class aptent taciti sociosqu ad litora torquent
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-[65px]">
        <ContainerSecond>
          <hr className="w-35 bg-main mb-8 h-0.5 w-40" />
          <p className="uppercase font-teko text-2xl font-medium w-[100px] leading-none">
            Happy client says
          </p>
          <div className="flex flex-wrap justify-center gap-8 w-full mt-14">
            <div>
              <p className="text-paragraph max-w-[500px]">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra.faucibus sed dolor eget posuere Nam ac elit a ante vitae
                viverra urna nulla. Mauris elementum accumsan leo vel tempor.
              </p>
              <div className="flex gap-6 mt-10">
                <img
                  src="./images/client-1.png"
                  width="55"
                  height="55"
                  className="border-round object-cover object-center"
                  alt=""
                />
                <div>
                  <p className="font-medium font-teko text-lg">Jont Hennry</p>
                  <p className="opacity-50 text-sm">Ceo chiart</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-paragraph max-w-[500px]">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra.faucibus sed dolor eget posuere Nam ac elit a ante vitae
                viverra urna nulla. Mauris elementum accumsan leo vel tempor.
              </p>
              <div className="flex gap-6 mt-10">
                <img
                  src="./images/client-2.png"
                  width="55"
                  height="55"
                  className="border-round object-cover object-center"
                  alt=""
                />
                <div>
                  <p className="font-medium font-teko text-lg">Jont Hennry</p>
                  <p className="opacity-50 text-sm">Ceo chiart</p>
                </div>
              </div>
            </div>
          </div>
          <Parteners />
          <div className="py-[65px]">
            <hr className="w-35 bg-main mb-8 h-0.5 w-40" />
            <p className="uppercase font-teko text-2xl font-medium w-[150px] leading-none">
              Our
              <br /> blog & news
            </p>
            <div className="flex flex-wrap justify-between mt-16 gap-14">
              <div>
                <img src="./images/blog-1.png" width='443' height='275' className='object-cover object-center' alt="blog" />
                <p className="text-paragraph mb-4 mt-9">Residential | 06/01/2020</p>
                <p className="max-w-[338px] font-teko text-[27px] leading-none">Class aptent taciti sociosqu ad litora torquent</p>
              </div>
              <div>
                <img src="./images/blog-2.png" width='443' height='275' className='object-cover object-center' alt="blog" />
                <p className="text-paragraph mb-4 mt-9">Residential | 06/01/2020</p>
                <p className="max-w-[338px] font-teko text-[27px] leading-none">Class aptent taciti sociosqu ad litora torquent</p>
              </div>
              <div>
                <img src="./images/blog-3.png" width='443' height='275' className='object-cover object-center' alt="blog" />
                <p className="text-paragraph mb-4 mt-9">Residential | 06/01/2020</p>
                <p className="max-w-[338px] font-teko text-[27px] leading-none">Class aptent taciti sociosqu ad litora torquent</p>
              </div>
            </div>
          </div>
        </ContainerSecond>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
