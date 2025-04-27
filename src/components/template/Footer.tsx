import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface LinkItem {
    text: string;
    path: string;
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and Copyright */}
                    <div className="text-center md:text-left">
                        <h1 className="text-sm text-gray-700">
                            ©{new Date().getFullYear()} <span className="font-semibold">gogetwell.ai</span>
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-wrap justify-center gap-4">
                        {links.map((item, i) => (
                            <li key={i}>
                                <Link
                                    to={item.path}
                                    className="text-sm text-gray-600 hover:text-blue-500 hover:underline transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Links */}
                    <div className="flex gap-4">
                        <Link
                            to="https://x.com/gogetwellai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <FaTwitter size={20} />
                        </Link>
                        <Link
                            to="https://www.linkedin.com/company/gogetwellai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            <FaLinkedinIn size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
