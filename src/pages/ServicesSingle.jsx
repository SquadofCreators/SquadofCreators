import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/ServicesData";

function ServicesSingle() {

    // Scroll to the top of the page when the component mounts
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const service = servicesData.find((item) => item.id === parseInt(id));

    if (!service) {
        return <div className="text-center text-red-500">Service not found</div>;
    }

    return (
        <section className="max-w-screen-lg mx-auto p-6">
            <div className="text-3xl">{service.icon}</div>
            <h1 className="text-4xl font-bold mt-4">{service.title}</h1>
            <p className="text-gray-700 mt-4">{service.description}</p>
        </section>
    );
}

export default ServicesSingle;
