import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo-text.png"
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-16">
            <aside>
                <img src={Logo} alt="" />
                <p className="text-gray-500">
                    Curated tools, technologies, and resources for developers building
                    modern software.
                </p>
                <div className="grid grid-flow-col text-xl gap-4">
                    <a>
                        <FaGithub />
                    </a>
                    <a>
                        <FaXTwitter />
                    </a>
                    <a>
                        <FaLinkedin />
                    </a>
                </div>
            </aside>
            <nav>
                <h6 className="text-black font-semibold">Services</h6>
                <a className="link link-hover text-gray-500 ">Branding</a>
                <a className="link link-hover text-gray-500">Design</a>
                <a className="link link-hover text-gray-500">Marketing</a>
                <a className="link link-hover text-gray-500">Advertisement</a>
            </nav>
            <nav>
                <h6 className="text-black font-semibold">Company</h6>
                <a className="link link-hover text-gray-500">About us</a>
                <a className="link link-hover text-gray-500">Contact</a>
                <a className="link link-hover text-gray-500">Jobs</a>
                <a className="link link-hover text-gray-500">Press kit</a>
            </nav>
            <nav>
                <h6 className=" text-black font-semibold">Legal</h6>
                <a className="link link-hover text-gray-500">Terms of use</a>
                <a className="link link-hover text-gray-500">Privacy policy</a>
                <a className="link link-hover text-gray-500">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;