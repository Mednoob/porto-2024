import { FaGithub, FaGlobe } from "react-icons/fa"
import ProjectCard from "../components/ProjectCard"

const projects = [
    {
        name: "2024 Portfolio",
        img: "./Portfolio.png",
        description: "A portfolio website for the year 2024. Made with React and Tailwind CSS.",
        links: [
            {
                icon: <FaGithub />,
                href: "https://github.com/Mednoob/porto-2024"
            },
            {
                icon: <FaGlobe />,
                href: "https://mednoob.github.io/porto-2024/"
            }
        ]
    }
];

export default function Home() {
    return <div className="w-screen-no-scroll">
        <div className="w-full min-h-screen flex items-center justify-center py-20 px-20 bg-[#55AD9B]">
            <div className="flex flex-col md:flex-row items-center gap-10 text-[#F1F8E8]">
                <div className="text-right">
                    <p className="font-bold text-3xl">Hello! My name is</p>
                    <p className="font-bold text-6xl">Ahmad Yaqdhan</p>
                    <p className="font-bold text-md mt-5">I'm a freelance software developer.</p>
                    <div className="flex justify-end space-x-2 mt-3">
                        <button className="px-5 py-0.5 rounded border border-[#F1F8E8]">E-mail</button>
                    </div>
                </div>
                <img src="./me.jpg" className="w-64 h-64 order-first md:order-none rounded-full border-4 border-[#F1F8E8] shadow-md animate-float" alt="Me" />
            </div>
        </div>
        <div className="h-screen bg-[#F1F8E8] text-[#55AD9B] px-20 py-10">
            <p className="font-bold text-3xl">My Projects</p>
            <hr className="w-full border-b border-[#55AD9B] mt-2 mb-1"/>
            <p className="font-medium text-sm italic">(You can expand each card by hovering them)</p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map(project => <ProjectCard name={project.name} img={project.img} description={project.description} links={project.links} />)}
            </div>
        </div>
    </div>
}
