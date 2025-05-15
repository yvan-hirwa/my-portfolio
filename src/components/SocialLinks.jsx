import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const SocialLinks = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="w-6 h-6" />,
            url: 'https://github.com/yvan-hirwa',
            color: 'hover:text-gray-400'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="w-6 h-6" />,
            url: 'https://linkedin.com/in/yvan-hirwa',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Twitter',
            icon: <FaTwitter className="w-6 h-6" />,
            url: 'https://twitter.com/yvankhirwa',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram className="w-6 h-6" />,
            url: 'https://instagram.com/yvankhirwa',
            color: 'hover:text-pink-400'
        }
    ]

    return (
        <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/90 transition-all duration-300 ${link.color} hover:-translate-y-1`}
                    aria-label={link.name}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    )
}

export default SocialLinks 