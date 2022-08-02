import Head from 'next/head';
import React from 'react';

import Navbar from '../Navbar';
import SearchWidget from '../SearchWidget';
import { styled } from '../../../styles/theme';

const PageContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px 0px',
    gap: '48px',
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Obol Pokemon App</title>
            </Head>
            <main>
                <Navbar />
                <PageContent>
                    <SearchWidget />
                    {children}
                </PageContent>
            </main>
        </>
    );
}
