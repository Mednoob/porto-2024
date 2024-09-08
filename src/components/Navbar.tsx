import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" }
];

export default function Navbar() {
    const location = useLocation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let prev = 0;
        const listener = () => {
            if (ref.current) {
                const scroll = window.scrollY;
                ref.current.style.animation = `${scroll >= prev ? "drag-up" : "drag-down"} 0.25s forwards`;
                prev = scroll;
            }
        };

        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, [ref]);

    return <div ref={ref} className="w-screen-no-scroll absolute z-10 flex justify-center">
        <nav className="flex space-x-4 px-7 rounded-b-md bg-[#55AD9B] border-b border-[#55AD9B] text-[#F1F8E8]">
            {links.map(link => <Link key={link.href} to={link.href} className={`py-3 font-semibold ${location.pathname === link.href ? "border-b-2 border-[#F1F8E8]" : ""} duration-100 hover:border-b-2 hover:border-[#F1F8E8]`}>{link.text}</Link>)}
        </nav>
    </div>
}