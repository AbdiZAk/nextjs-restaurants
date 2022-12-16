// next imports
import Head from 'next/head';

// react imports
import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <Fragment>
            <Head>
                <title>Ist 363 Restaurants</title>
                <meta name='description' content='This is discription about our project'/>
            </Head>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </Fragment>

        
    );
}

export default Layout;
