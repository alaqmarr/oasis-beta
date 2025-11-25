import React from 'react';
import HomePage from '../containers/HomePage';

export default function Home() {
    return <HomePage />;
}

export async function getStaticProps() {
    return {
        props: {}, // No dynamic data needed for home page currently, but enables SSG
    };
}
