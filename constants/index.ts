import { Computer, Figma, Github, HandHelping, MapPin, PaintBucket, SheetIcon, Target, WorkflowIcon } from "lucide-react"
import React from "react";
import { BsHouse, BsQuestionCircle, BsWater } from "react-icons/bs"
import { CgNpm } from "react-icons/cg";
import { DiDigitalOcean } from "react-icons/di";
import { FaCloudflare, FaFly } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { GiThunderBlade } from "react-icons/gi";
import { GrGoogle } from "react-icons/gr";
import { MdBallot, MdReport } from "react-icons/md"

export const navbarLinks = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "Contact",
        link: "/contact"
    }
]

export const milestones = [
    {
        title: "WASH PMP",
        icon: BsWater,
        short: "Tracks and manages water and sanitation initiatives, ensuring effective implementation and monitoring of related projects.",
        body: "The Water, Sanitation, and Hygiene (WASH) Performance Monitoring Platform (PMP) is a comprehensive system designed to track and manage water and sanitation initiatives, ensuring effective implementation and monitoring of related projects.",
        image: "https://source.unsplash.com/800x600/?water"
    },
    {
        title: "UNICAL Hostel Management System",
        icon: BsHouse,
        wide: true,
        short: "Efficiently manages hostel facilities, streamlining processes like room allocation, fee management, and maintenance requests.",
        body: "The UNICAL Hostel Management System is a robust software solution tailored for efficiently managing hostel facilities within the University of Calabar (UNICAL). It streamlines processes such as room allocation, fee management, and maintenance requests, enhancing the overall living experience for students.",
        image: "https://source.unsplash.com/800x600/?hostel"
    },
    {
        title: "UNIUYO Hostel Management System",
        icon: BsHouse,
        wide: true,
        short: "Manages hostel facilities, ensuring optimal resource utilization and improved student satisfaction at the University of Uyo.",
        body: "Similar to the UNICAL Hostel Management System, this system is specifically designed for managing hostel facilities at the University of Uyo (UNIUYO). It facilitates seamless administration of hostel operations, ensuring optimal utilization of resources and improved student satisfaction.",
        image: "https://source.unsplash.com/800x600/?university"
    },
    {
        title: "UNIUYO CBT for GST",
        icon: Computer,
        short: "Offers a modern approach to conducting examinations, enabling students to take tests using computers.",
        body: "The Computer-Based Testing (CBT) platform for General Studies (GST) at the University of Uyo (UNIUYO) offers a modern approach to conducting examinations. It enables students to take tests using computers, providing a more efficient and secure assessment process.",
        image: "https://source.unsplash.com/800x600/?computer"
    },
    {
        title: "E-Voting System for Universities",
        icon: MdBallot,
        short: "Revolutionizes the electoral process within academic institutions, promoting democracy and student participation.",
        body: "The E-Voting System for Universities is a digital solution aimed at revolutionizing the electoral process within academic institutions. It leverages technology to conduct transparent and accessible elections, promoting democracy and student participation.",
        image: "https://source.unsplash.com/800x600/?vote"
    },
    {
        title: "Artificial Intelligence Reporting System",
        icon: SheetIcon,
        wide: true,
        short: "Utilizes cutting-edge AI technologies to generate insightful reports and analytics, empowering decision-makers with actionable information.",
        body: "The Artificial Intelligence Reporting System utilizes cutting-edge AI technologies to generate insightful reports and analytics. It analyzes vast amounts of data to provide valuable insights and trends, empowering decision-makers with actionable information.",
        image: "https://source.unsplash.com/800x600/?ai"
    },
];

export const services = [
    {
        title: "Website Development",
        body: "Crafting bespoke websites that merge innovation with functionality, our service transforms visions into captivating digital experiences. Our expert team of designers and developers collaborates seamlessly, using cutting-edge technologies to create user-centric, responsive websites. From sleek interfaces to robust architectures, we ensure each site embodies your brand essence, engaging your audience and driving impactful results.",
        image: '/web-development.jpg'
    },
    {
        title: "Software Development",
        body: "Bringing visions to life through innovative software solutions, our service epitomizes cutting-edge development. With a team of skilled engineers and experts, we craft bespoke software tailored to your needs. From concept to execution, we harness leading technologies to create robust, scalable, and intuitive applications that streamline processes, boost efficiency, and drive success for your business.",
        image: '/soft-dev.jpg'
    },
    {
        title: "Database Development / Management",
        body: "Efficiently organizing, securing, and harnessing data’s power defines our database management service. With expertise honed over years, our specialists oversee seamless data organization, ensuring its integrity and accessibility. From optimizing performance to safeguarding valuable information, we provide comprehensive solutions that empower businesses to leverage their data effectively, driving informed decisions and enhancing operational efficiency.",
        image: '/db-man.jpg'
    },
    {
        title: "Web & Mobile Applications",
        body: "Empowering innovation through tailored web and mobile applications defines our service. Our adept team merges cutting-edge technology with user-centric design to create intuitive, engaging, and high-performance applications. From dynamic web solutions to seamless mobile experiences, we craft versatile applications that elevate user engagement, streamline operations, and drive growth for businesses across diverse industries.",
        image: '/web-mob.jpg'
    },
    {
        title: "Computer-Based Testing",
        body: "Revolutionizing assessments, our computer-based testing service offers a seamless and efficient examination experience. Leveraging advanced technology, we provide secure and customizable testing solutions. From robust test delivery platforms to comprehensive monitoring and analysis, we ensure a reliable and streamlined testing environment that meets the diverse needs of educational institutions, certification bodies, and corporate assessments.",
        image: '/cbt.jpg'
    },
    {
        title: "Supply of Computer Systems",
        body: "Delivering cutting-edge computing solutions, our service provides a seamless supply of top-tier computer systems. With a focus on quality and reliability, we offer a range of customizable hardware configurations to meet diverse needs. From high-performance workstations to scalable server setups, our offerings cater to businesses, institutions, and individuals seeking efficient, innovative, and dependable computing solutions that drive productivity and success.",
        image: '/comp-supply.jpg'
    },
]

export const integrations = [
    {
        icon: DiDigitalOcean,
        title: "UNIUYO"
    },
    {
        icon: FaCloudflare,
        title: "UNICAL"
    },
    {
        icon: CgNpm,
        title: "UNICEF"
    },
    {
        icon: FiFigma,
        title: "NEKEDE"
    },
    {
        icon: FaFly,
        title: "ALVAN IKOKU"
    },
    // {
    //     icon: GiThunderBlade
    // },
]

export const aboutText1 = [
    `At our core, we represent a dynamic fusion of diverse expertise and\n
    seasoned professionals. Our team is meticulously crafted, comprising\n
    a mosaic of highly skilled individuals spanning various fields, each\n
    bringing their unique strengths to the table. From seasoned software\n
    engineers adept at crafting innovative solutions to astute data\n
    warehouse experts proficient in handling vast troves of information,\n
    our collective experience spans decades. Moreover, our ensemble\n
    includes adept network and communications specialists who ensure the\n
    seamless integration and fluid functionality of our systems. Working\n
    in tandem with our project managers, who possess a wealth of\n
    knowledge in orchestrating successful ventures, we synergize our\n
    efforts for efficient project execution. Additionally, our team\n
    boasts database analysts proficient in dissecting intricate data\n
    patterns, allowing us to derive actionable insights and drive\n
    informed decisions. Collectively, we wield a combined industry\n
    experience exceeding two decades, a testament to our unwavering\n
    commitment to excellence. This wealth of experience not only\n
    signifies our proficiency in navigating the ever-evolving\n
    technological landscape but also underscores our dedication to\n
    delivering top-tier solutions and services to our clients.`
]

export const anammeTree = [
    {
        title: "Who are we",
        description:"Anamme Nigeria Enterprise is a dynamic team of skilled professionals with a passion for leveraging technology to drive business success. With years of collective experience in the IT and ICT industry, our team brings a wealth of knowledge and expertise to every project we undertake.",
        icon: React.createElement(BsQuestionCircle),
    },
    {
        title: "What we do",
        description:"We offer a wide range of IT and ICT services, including website development, software development, database management, web and mobile applications, and computer-based testing. Our team is constantly evolving and expanding, adding new skills and resources as needed.",
        icon: React.createElement(WorkflowIcon),
    },
    {
        title: "Why choose us",
        description:"We are a trusted partner in the IT and ICT industry, providing innovative solutions and services that drive business growth and profitability. Our team is committed to delivering unparalleled service and support to our clients, helping them navigate the complexities of the digital landscape with confidence and ease.",
        icon: React.createElement(HandHelping),
    },
    {
        title: "Our Mission",
        description: "Our mission at Anamme Nigeria Enterprise is simple yet profound: to empower businesses and individuals with cutting-edge IT and ICT solutions that enhance efficiency, productivity, and overall success. We are committed to delivering unparalleled service and support to our clients, helping them navigate the complexities of the digital landscape with confidence and ease.",
        icon: React.createElement(Target)
    },
]

export const contactInfo = [
    {
        title: "Main Office",
        description: "No. 4 Parke Close, Plot 248 Aguiyi Ironsi Road, Maitama, FCT Abuja",
        icon: React.createElement(MapPin)
    },
    {
        title: "Write us",
        description: "info@anamme.ng"
    },
    {
        title: "Call Us 24x7",
        description: "+234 809 991 1042"
    },
    {
        title: "Branch Offices",
        description: "78 IBB way Calabar, Cross River State",
        decription2: "No. 3 Udoutung Ubo Street Uyo",
        icon: React.createElement(MapPin)
    },
]