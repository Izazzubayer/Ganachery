import { getProducts } from '@/services/productService';
import HomePageClient from './HomePageClient';

export default async function Home() {
    const products = await getProducts(12);

    return (
        <>
            <HomePageClient initialProducts={products} />
        </>
    );
}
