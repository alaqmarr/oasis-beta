import React from 'react';
import IndustriesPage from '../../containers/IndustriesPage';

export default function Industries() {
    return <IndustriesPage />;
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
