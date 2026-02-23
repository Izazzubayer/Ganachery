import { notFound } from 'next/navigation';
import { getProductByHandle } from '@/services/productService';
import ProductClient from './ProductClient';

interface ProductPageProps {
    params: Promise<{
        handle: string;
    }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const resolvedParams = await params;
    const product = await getProductByHandle(resolvedParams.handle);

    if (!product) {
        notFound();
    }

    return <ProductClient product={product} />;
}
