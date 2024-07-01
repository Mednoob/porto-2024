import { Link, useLocation } from "react-router-dom";

const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" }
];

export default function Navbar() {
    const location = useLocation();

    return <div className="w-screen-no-scroll fixed flex justify-center">
        <nav className="flex space-x-4 px-7 rounded-b-md bg-green-400 border-b border-green-400 text-white">
            {links.map(link => <Link key={link.href} to={link.href} className={`py-3 font-semibold ${location.pathname === link.href ? "border-b-2 border-white" : ""} duration-100 hover:border-b-2 hover:border-white`}>{link.text}</Link>)}
        </nav>
    </div>
}