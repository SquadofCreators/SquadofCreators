// Enhanced ServicesSingle Component
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/ServicesData";

function ServicesSingle() {
    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const service = servicesData.find((item) => item.id === parseInt(id));

    if (!service) {
        return <div className="text-center text-red-500">Service not found</div>;
    }

    return (
        <section className="max-w-screen-lg mx-auto p-6">
            <div className="flex flex-col items-center justify-center">
                <div className="text-6xl text-indigo-600">{service.icon}</div>
                <h1 className="text-4xl font-bold mt-4 text-gray-800">{service.title}</h1>
                <p className="text-gray-600 mt-2 text-center max-w-2xl">{service.description}</p>
            </div>

            {/* Pricing */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800">Pricing</h2>
                <p className="text-gray-600 mt-2">{service.pricing}</p>
            </div>

            {/* Features */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
                <ul className="list-disc list-inside text-gray-600 mt-4">
                    {service.features.map((feature, index) => (
                        <li key={index} className="mt-2">{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Additional Details */}
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-800">More Details</h2>
                <p className="text-gray-600 mt-2">{service.details}</p>
            </div>
        </section>
    );
}

export default ServicesSingle;