"use client";

import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { ProductService } from '@/app/components/ProductService';

export default function CarouselFeed() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 4))); // Adjusted to show 4 cards
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="w-full rounded-lg"  >
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{product.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{product.description}</span>
                
                </div>
            </div>
        );
    };

    return (
        <div className="card"  style={{
            background: "url('/bg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 p-2">Welcome to Our Community</h2>
                <h3 className="text-xl font-semibold text-gray-700 p-2">Join us and connect with amazing people</h3>
                <p className="text-gray-500 p-6">Explore our diverse range of products and services that cater to all your needs.</p>
            </div>
            
            <Carousel
                value={products}
                numVisible={3}
                numScroll={3}
                responsiveOptions={responsiveOptions}
                className="custom-carousel"
                circular
                autoplayInterval={3000}
                itemTemplate={productTemplate}
            />
        </div>
    );
}
