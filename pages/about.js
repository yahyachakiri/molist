import React from "react";
import client from "../apollo/client";
import { ArticleHeader } from "../components/ArticleHeader";
import { Container } from "../components/Container";
import { ContainerSecond } from "../components/ContainerSecond";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Partners } from "../components/Partners";
import { Services } from "../components/Services";
import { TeamMember } from "../components/TeamMember";
import { GET_ABOUT } from "../queries/get-about";
import { GET_CONTACT } from "../queries/get-contact";
import { GET_MENU } from "../queries/get-menu";
import { imgValue } from "../util/classValue";

export default function about({headerMenus, partnersContent, homeContent, aboutContent, contactContent}) {
    let members = [];
    for (let i = 1; i < aboutContent.split('member-img').length; i++) {
        members.push({
            img: aboutContent.split('member-img')[i]?.split('src="')[1]?.split('"')[0],
            name: aboutContent.split('member-name')[i]?.split('>')[1]?.split('</')[0],
            position: aboutContent.split('member-position')[i]?.split('>')[1]?.split('</')[0],
            description: aboutContent.split('member-description')[i]?.split('>')[1]?.split('</')[0],
        });
    }
    return (
        <div>
        <Header headerMenus={headerMenus} />
        <ArticleHeader image={imgValue(aboutContent, 'banner')} title='About us' />
        <Info homeContent={homeContent} />
        <Services about homeContent={homeContent} />
        <ContainerSecond className="bg-white pt-[50px]">
            <hr className="w-28 bg-main mb-8 h-0.5 w-40" />
            <p className="uppercase font-teko text-2xl font-medium leading-none">
            Meet <br />
            our team
            </p>
        </ContainerSecond>
        <div className="py-[50px] bg-white">
            <Container className="flex flex-wrap justify-center gap-10 pb-[50px] bg-white'">
            {
                members.map(member => {
                    return (
                        <TeamMember
                            key={members?.indexOf(member.name)}
                            image={member.img}
                            name={member.name}
                            position={member.position}
                            description={member.description}
                        />
                    )
                })
            }
            {/* <TeamMember
                image="./images/member-1.png"
                title="General Manager"
                name="Souhaib Younes"
                description="Tarek Hama, received his higher education at the Higher School of Fine
                    Arts in Algiers, where he established his first company in 2002 in the
                    design and decor field. He also had many impressions in the world of
                    art by creating a group of companies specialized in the department of
                    advertising and garden decoration. In addition to that, due to his
                    partnership with the French company, Lafarge, he was able to have high
                    credit and acknowledgment in preparing facades and interior and
                    exterior decoration for a large group of major facilities around the
                    world before he landed in Istanbul."
            />
            <TeamMember
                image="./images/member-2.png"
                title="Product Manager"
                name="Tarek Hamma"
                description="Tarek Hama, received his higher education at the Higher School of Fine
                    Arts in Algiers, where he established his first company in 2002 in the
                    design and decor field. He also had many impressions in the world of
                    art by creating a group of companies specialized in the department of
                    advertising and garden decoration. In addition to that, due to his
                    partnership with the French company, Lafarge, he was able to have high
                    credit and acknowledgment in preparing facades and interior and
                    exterior decoration for a large group of major facilities around the
                    world before he landed in Istanbul."
            />
            <TeamMember
                image="./images/member-3.png"
                title="General Manager"
                name="Souhaib Younes"
                description="Tarek Hama, received his higher education at the Higher School of Fine
                    Arts in Algiers, where he established his first company in 2002 in the
                    design and decor field. He also had many impressions in the world of
                    art by creating a group of companies specialized in the department of
                    advertising and garden decoration. In addition to that, due to his
                    partnership with the French company, Lafarge, he was able to have high
                    credit and acknowledgment in preparing facades and interior and
                    exterior decoration for a large group of major facilities around the
                    world before he landed in Istanbul."
            />
            <TeamMember
                image="./images/member-4.png"
                title="General Manager"
                name="Souhaib Younes"
                description="Tarek Hama, received his higher education at the Higher School of Fine
                    Arts in Algiers, where he established his first company in 2002 in the
                    design and decor field. He also had many impressions in the world of
                    art by creating a group of companies specialized in the department of
                    advertising and garden decoration. In addition to that, due to his
                    partnership with the French company, Lafarge, he was able to have high
                    credit and acknowledgment in preparing facades and interior and
                    exterior decoration for a large group of major facilities around the
                    world before he landed in Istanbul."
            /> */}
            </Container>
            <Partners partnersContent={partnersContent} />
        </div>
        <Footer contactContent={contactContent} />
        </div>
    );
}

export async function getStaticProps(context) {
    const {data} = await client.query({
        query: GET_ABOUT
    });
    const dataContact = await client.query({
        query: GET_CONTACT
      });
    return {
        props: {
            headerMenus:data?.menuItems?.edges,
            homeContent:data?.Home?.content,
            aboutContent:data?.About?.content,
            partnersContent: data?.Partners?.content,
            contactContent:dataContact?.data?.Contact?.content
        },
        revalidate: 1
    }
}