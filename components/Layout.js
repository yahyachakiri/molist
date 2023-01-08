import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Molist</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        </Head>
        <div className="min-h-screen flex flex-col">
            {/* <Header /> */}
                <main className="flex-grow">
                    {children}
                </main>
            {/* <Footer /> */}
        </div>
        </>
    );
};

export default Layout;
