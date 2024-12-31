import React from 'react'
import { Link } from 'react-router-dom';
import CustomBadge from '../CustomBadge'
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { RiArrowRightLine } from "react-icons/ri";

import Product1 from '../../assets/products/product-1.png';
import Product2 from '../../assets/products/product-2.png';
import Product3 from '../../assets/products/product-3.png';
import Product4 from '../../assets/products/product-4.png';

function Products() {

    // Products Data with unique page links using slug
    const productsData = [
        {
            id: 1,
            title: "Product 1",
            slug: "product-1",
            description: "Product 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores dolor unde! Odit, maxime vero quam doloribus quasi, eligendi nesciunt aut animi magnam consequatur unde adipisci a, consectetur ullam veniam!", 
            image: Product1,
        },
        {
            id: 2,
            title: "Product 2",
            slug: "product-2",
            description: "Product 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores dolor unde! Odit, maxime vero quam doloribus quasi, eligendi nesciunt aut animi magnam consequatur unde adipisci a, consectetur ullam veniam!", 
            image: Product2,
        },
        {
            id: 3,
            title: "Product 3",
            slug: "product-3",
            description: "Product 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores dolor unde! Odit, maxime vero quam doloribus quasi, eligendi nesciunt aut animi magnam consequatur unde adipisci a, consectetur ullam veniam!", 
            image: Product3,
        },
        {
            id: 4,
            title: "Product 4",
            slug: "product-4",
            description: "Product 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores dolor unde! Odit, maxime vero quam doloribus quasi, eligendi nesciunt aut animi magnam consequatur unde adipisci a, consectetur ullam veniam!",
            image: Product4,
        }
    ];
    

  return (
    <section id='products' className='max-w-screen-lg w-5/6 flex flex-col items-center justify-center py-6 md:py-20'>
       
        <div className='flex flex-col items-center justify-center'>
            <CustomBadge 
            icon={<HiOutlineViewGridAdd className="text-indigo-600"/>} 
            text="Our Innovative Products" 
            />

            <h1 className="px-4 text-lg md:leading-snug md:text-5xl font-bold text-center text-gray-800">
                Streamline Your <span className="text-indigo-600">Workflow</span> <br />
                with Our Products
            </h1>

        </div>
        
        <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-center gap-8 md:gap-8 my-10">
            {/* First Product */}
            <div className="col-span-1 md:col-span-2 row-span-1">
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 p-4 md:p-8 border border-gray-500/20 rounded-lg'>
                    <div className='flex flex-col items-start justify-between gap-4 order-2 md:order-1'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl font-bold'>{productsData[0].title}</h1>
                            <p>{productsData[0].description}</p>
                        </div>

                        <button className="px-4 py-2 mt-6 bg-white text-gray-600 border border-gray-500/35 rounded-full">
                            View Product
                        </button>
                    </div>

                    <img
                        src={productsData[0].image}
                        alt={productsData[0].title}
                        className="md:w-1/2 object-cover rounded-lg order-1 md:order-2"
                    />
                </div>
            </div>

            {/* Smaller Images */}
            {productsData.slice(1, productsData.length - 1).map((item, index) => (
                <div key={index} className="relative col-span-1 md:col-span-1">
                    <div className='flex flex-col justify-center items-center gap-6 p-4 md:p-8 border border-gray-500/20 rounded-lg'>
                        <div className='flex flex-col items-start justify-between gap-4 order-2 md:order-1'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl font-bold'>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>

                            <button className="px-4 py-2 my-4 bg-white text-gray-600 border border-gray-500/35 rounded-full">
                                View Product
                            </button>
                        </div>

                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full md:h-[240px] object-cover rounded-lg"
                        />
                    </div>
                </div>
            ))}

            {/* Last Product */}
            <div className="col-span-1 md:col-span-2 row-span-1">
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 p-4 md:p-8 border border-gray-500/20 rounded-lg'>
                    <div className='flex flex-col items-start justify-between gap-4 order-2 md:order-1'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-xl font-bold'>{productsData[productsData.length - 1].title}</h1>
                            <p>{productsData[productsData.length - 1].description}</p>
                        </div>

                        <button className="px-4 py-2 mt-6 bg-white text-gray-600 border border-gray-500/35 rounded-full">
                        View Product
                        </button>
                    </div>
                    <img
                        src={productsData[productsData.length - 1].image}
                        alt={productsData[productsData.length - 1].title}
                        className="md:w-1/2 object-cover rounded-lg order-1 md:order-2"
                    />
                </div>
            </div>

        </div>

        <Link
            to="/products"
            className="flex items-center justify-center gap-2 mt-8 px-4 py-2 text-indigo-600 hover:text-white border hover:bg-indigo-600 border-indigo-600 rounded-full transition-colors duration-300"
        >
            More Products <RiArrowRightLine/>
        </Link>

    </section>
  )
}

export default Products