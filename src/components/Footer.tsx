import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo-text.png"
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-16">
            <aside>
                <img src={Logo} alt="" />
                <p>
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
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;