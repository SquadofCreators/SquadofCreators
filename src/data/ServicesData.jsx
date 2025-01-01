// Services Data [icon, title, description, link]

import { IoIosDesktop } from "react-icons/io";
import { RiSparkling2Line } from "react-icons/ri";
import { TbDeviceMobile } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

export const servicesData = [
    {
        id: 1,
        icon: <RiSparkling2Line className="text-indigo-600"/>,
        title: "AI-Powered Tech",
        description: "Harness the power of Artificial Intelligence and Machine Learning to create transformative technology.",
        link: "/services/1"
    },
    {
        id: 2,
        icon: <IoIosDesktop className="text-indigo-600"/>,
        title: "Web Development",
        description: "We build websites that are fast, secure, and easy to use. We use the latest technologies to ensure that your website is always up to date.",
        link: "/services/2"
    },
    {
        id: 3,
        icon: <MdDesignServices className="text-indigo-600"/>,
        title: "UI/UX Designing",
        description: "We design intuitive, modern, and user-friendly interfaces that captivate and engage your audience.",
        link: "/services/3"
    }
];
