import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Importación corregida

const socials = [
  { icon: <FaGithub />, path: "https://github.com/jefergv28" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/jeferson-galvis-4078a5202/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/jefergv28/" },
  { icon: <FaXTwitter />, path: "https://x.com/Jefersongv28" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(
        (item, index) =>
          !!item.path && ( // Evitar enlaces vacíos
            <Link
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyles}
            >
              {item.icon}
            </Link>
          )
      )}
    </div>
  );
};

export default Social;
