import { ReactNode } from "react";

export default function ProjectCard({ description, links, name, img }: { description: string; links: { icon: ReactNode, href: string }[]; name: string; img: string }) {
    return (
        <div className="w-full h-min flex flex-col items-center justify-between px-5 pb-3 text-center group border border-[#55AD9B] rounded-md gap-2">
            <div className="max-h-0 w-full overflow-hidden delay-200 duration-500 group-hover:max-h-96">
                <img className="object-cover w-full h-full" src={img}/>
            </div>
            <div className="w-full h-16 relative flex items-center justify-end delay-200 duration-500">
                <div className="w-28 h-16 absolute left-0 overflow-hidden duration-200 group-hover:w-0">
                    <img className="object-cover w-full h-full" src={img}/>
                </div>
                <p className="font-bold text-lg right-0 absolute transition-all duration-200 group-hover:right-1/2 group-hover:translate-x-1/2">{name}</p>
            </div>
            <div className="max-h-0 w-full overflow-hidden delay-200 duration-500 group-hover:max-h-96">
                <p className="font-medium text-sm">{description}</p>
                <div className="flex justify-center gap-2 mt-2">
                    {links.map(link => <a key={link.href} href={link.href} className="p-2 rounded-full text-[#55AD9B]">{link.icon}</a>)}
                </div>
            </div>
        </div>
    )
}
