import { useEffect, useState } from "react";
import client from "../apollo/client";
import { ContainerSecond } from "../components/ContainerSecond";
import { Header } from "../components/Header";
import { GET_MENU } from "../queries/get-menu";

export default function Cart(headerMenus) {
    const [items, setItems] = useState([]);
    const array = [["one", "one", "one"],["two"]];
    useEffect(() => {
        if (localStorage.getItem("cart")?.split(",")) {
            setItems(localStorage.getItem("cart")?.split(","));
        }
        /* console.log(items.sort().forEach(item => {
            if
        })); 
        for (let i = 0; i < items.length; i++) {
            const array = []
            if (items[i] == items[i+1]) {
                array.push(items[i])
            }
        }
        */
    },[])
    function divide(array) {
        let allArrays = [];
        for (let i = 0; i < array.length; i++) {
        if(!allArrays.flat().includes(array[i])) 
        allArrays.push(array.filter(el => el === array[i]));
        }
        return allArrays;
    }

    let itemsGrouped = divide(items.sort());
  return (
    <>
        <Header headerMenus={headerMenus.headerMenus} />
        <div className="pt-32">
            <ContainerSecond>
                {
                    itemsGrouped.map(item => {
                        return item[0] + " " + item.length + " " 
                    })
                }
            </ContainerSecond>
        </div>
    </>
  )
}
export async function getStaticProps(context) {
    const {data, loading} = await client.query({
        query: GET_MENU
    });
    return {
        props: {
            headerMenus:data?.menuItems?.edges,
        },
        revalidate: 1
    }
}