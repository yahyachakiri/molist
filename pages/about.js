import React from "react";
import { ArticleHeader } from "../components/ArticleHeader";
import { Container } from "../components/Container";
import { ContainerSecond } from "../components/ContainerSecond";
import { Info } from "../components/Info";
import { Parteners } from "../components/Parteners";
import { Services } from "../components/Services";
import { TeamMember } from "../components/TeamMember";

export default function about() {
    return (
        <div>
        <ArticleHeader image="./images/about.png" />
        <Info />
        <Services />
        <ContainerSecond className="bg-white pt-[50px]">
            <hr className="w-28 bg-main mb-8 h-0.5 w-40" />
            <p className="uppercase font-[Teko] text-2xl font-medium leading-none">
            Meet <br />
            our team
            </p>
        </ContainerSecond>
        <div className="py-[50px] bg-white">
            <Container className="flex flex-wrap justify-center gap-10 pb-[50px] bg-white'">
            <TeamMember
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
            />
            </Container>
            <Parteners />
        </div>
        </div>
    );
}
