import Head from 'next/head';
import React from 'react';
import Navbar from '../Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Obol Pokemon App</title>
            </Head>
            <main>
                <Navbar />
                {children}
            </main>
        </>
    );
}
