import React from 'react';
import AboutPage from '../containers/AboutPage';

export default function About() {
    return <AboutPage />;
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
