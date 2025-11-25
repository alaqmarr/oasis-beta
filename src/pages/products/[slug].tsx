import React from 'react';
import ProductDetailPage from '../../containers/ProductDetailPage';

import { GetStaticPaths, GetStaticProps } from 'next';
import { PRODUCTS } from '../../data/products';

export default function ProductDetail() {
    return <ProductDetailPage />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = PRODUCTS.map((product) => ({
        params: { slug: product.id },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // We don't actually need to pass data here because the component reads from the static data file directly
    // based on the router query. However, for SSG to work properly with dynamic routes, we need this.
    // In a real API scenario, we would fetch the specific product here and pass it as props.
    return {
        props: {},
    };
};
