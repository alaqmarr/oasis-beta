import React from 'react';
import IndustryDetailPage from '../../containers/IndustryDetailPage';

import { GetStaticPaths, GetStaticProps } from 'next';
import { INDUSTRIES } from '../../data/industries';

export default function IndustryDetail() {
    return <IndustryDetailPage />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = INDUSTRIES.map((industry) => ({
        params: { slug: industry.id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {},
    };
};
