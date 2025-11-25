import React from 'react';
import ProductsPage from '../../containers/ProductsPage';

export default function Products() {
    return <ProductsPage />;
}

export async function getStaticProps() {
    return {
        props: {},
    };
}
