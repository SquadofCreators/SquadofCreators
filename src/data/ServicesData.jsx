// Services Data [icon, title, description, link]

import { IoIosDesktop } from "react-icons/io";
import { RiSparkling2Line } from "react-icons/ri";
import { TbDeviceMobile } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

export const servicesData = [
    {
        id: 1,
        link: "/services/1",
        icon: <RiSparkling2Line className="text-indigo-600" />,
        title: "AI-Powered Tech",
        description: "Harness the power of Artificial Intelligence and Machine Learning to create transformative technology.",
        pricing: "₹5999 - ₹19999",
        features: [
            "Advanced AI algorithms",
            "Custom model development",
            "Real-time data processing",
            "Seamless integration with existing systems",
        ],
        details: "Our AI solutions are designed to enhance productivity, improve decision-making, and provide unparalleled insights into your business.",
    },
    {
        id: 2,
        link: "/services/2",
        icon: <IoIosDesktop className="text-indigo-600" />,
        title: "Web Development",
        description: "We build websites that are fast, secure, and easy to use. We use the latest technologies to ensure that your website is always up to date.",
        pricing: "₹2499 - ₹9999",
        features: [
            "Responsive design",
            "SEO optimization",
            "E-commerce capabilities",
            "Custom CMS integration",
        ],
        details: "Our web development services focus on creating an engaging and user-friendly experience that drives results for your business.",
    },
    {
        id: 3,
        link: "/services/3",
        icon: <MdDesignServices className="text-indigo-600" />,
        title: "UI Designing",
        description: "We design intuitive, modern, and user-friendly interfaces that captivate and engage your audience.",
        pricing: "₹1999 - ₹7999",
        features: [
            "Custom UI designs",
            "Prototyping and wireframing",
            "Cross-platform compatibility",
            "User testing and feedback",
        ],
        details: "Our UI design services focus on creating visually stunning and functional designs that improve the user experience.",
    },
];
