import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineProject,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdOutlineContactPage } from "react-icons/md";

const navLinks = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "about",
    icon: <AiOutlineInfoCircle />,
  },

  {
    id: 3,
    url: "/skills",
    text: "skills",
    icon: <GiSkills />,
  },
  {
    id: 4,
    url: "/projects",
    text: "projects",
    icon: <AiOutlineProject />,
  },
  {
    id: 5,
    url: "/contact",
    text: "contact",
    icon: <MdOutlineContactPage />,
  },
];

export default navLinks;
