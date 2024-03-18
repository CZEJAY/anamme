import { Computer, Figma, Github, PaintBucket, SheetIcon } from "lucide-react"
import { BsHouse, BsWater } from "react-icons/bs"
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