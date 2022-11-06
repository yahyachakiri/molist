import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
    return (
        <>
        <Head>
            <title>Molist</title>
            <meta name="description" content="" />
        </Head>
        <div className="min-h-screen flex flex-col">
            <Header />
                <main className="flex-grow">
                    {children}
                </main>
            <Footer />
        </div>
        </>
    );
};

export default Layout;
