// project background images
import netflixBg from "../images/netflix-bg.png";
// import amazonBg from "../images/amazon-bg.png";
import portfolioBg from "../images/portfolio-bg.png";
import resumeBg from "../images/resume-bg.png";
// langugaes images
import htmlLogo from "../images/html-logo.png";
import cssLogo from "../images/css-logo.png";
import javascriptLogo from "../images/javascript-logo.png";
import sassLogo from "../images/sass-logo.png";
import styledComponentsLogo from "../images/styled-components-logo.png";
// libraries images
import reactLogo from "../images/react-logo.png";
import reduxToolkitLogo from "../images/redux-toolkit-logo.png";
import reactRouterLogo from "../images/react-router-logo.png";
// version control systems imgaes
import gitLogo from "../images/git-logo.png";
// internet hosting services images
import gitHubLogo from "../images/github-logo.png";
// deploy platforms images
import netlifyLogo from "../images/netlify-logo.png";
// react icons
import { DiGithubBadge } from "react-icons/di";
import { SiNetlify } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
// resume pdf doc
import resumePdf from "./resume.pdf";

const projects = [
  {
    id: 1,
    title: "netflix clone",
    backgroundImg: netflixBg,
    links: [
      {
        id: 1,
        url: "https://netflix-clone-react-reduxtoolkit.netlify.app",
        icon: <HiExternalLink />,
      },
      {
        id: 2,
        url: "https://github.com/ksrinreddy/netflix-clone-react-reduxtoolkit",
        icon: <DiGithubBadge />,
      },
    ],
    description: `Single page app of NETFLIX frontend build developed with`,
    languages: [
      {
        id: 1,
        name: "html",
        img: htmlLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        id: 2,
        name: "css",
        img: cssLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        id: 3,
        name: "javascript",
        img: javascriptLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: 4,
        name: "sass",
        img: sassLogo,
        url: "https://sass-lang.com/",
      },
    ],
    libraries: [
      {
        id: 1,
        name: "react",
        img: reactLogo,
        url: "https://legacy.reactjs.org/",
      },
      {
        id: 2,
        name: "react toolkit",
        img: reduxToolkitLogo,
        url: "https://redux-toolkit.js.org/",
      },
      {
        id: 3,
        name: "react router",
        img: reactRouterLogo,
        url: "https://reactrouter.com/en/main",
      },
    ],
    vcWhServices: [
      {
        id: 1,
        name: "git",
        img: gitLogo,
        url: "https://git-scm.com/",
      },
      {
        id: 2,
        name: "GitHub",
        img: gitHubLogo,
        url: "https://github.com/",
      },
      {
        id: 3,
        name: "netilfy",
        img: netlifyLogo,
        url: "https://www.netlify.com/",
      },
    ],
  },
  {
    id: 2,
    title: "portfolio",
    backgroundImg: portfolioBg,
    links: [
      {
        id: 1,
        url: "https://portfolio-ksrinreddy.netlify.app",
        icon: <HiExternalLink />,
      },
      {
        id: 2,
        url: "https://github.com/ksrinreddy/portfoilio",
        icon: <DiGithubBadge />,
      },
    ],
    description: `Single page app of PORTFOLIO developed with`,
    languages: [
      {
        id: 1,
        name: "html",
        img: htmlLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        id: 2,
        name: "css",
        img: cssLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        id: 3,
        name: "javascript",
        img: javascriptLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: 4,
        name: "sass",
        img: sassLogo,
        url: "https://sass-lang.com/",
      },
    ],
    libraries: [
      {
        id: 1,
        name: "react",
        img: reactLogo,
        url: "https://legacy.reactjs.org/",
      },
      {
        id: 2,
        name: "react router",
        img: reactRouterLogo,
        url: "https://reactrouter.com/en/main",
      },
    ],
    vcWhServices: [
      {
        id: 1,
        name: "git",
        img: gitLogo,
        url: "https://git-scm.com/",
      },
      {
        id: 2,
        name: "GitHub",
        img: gitHubLogo,
        url: "https://github.com/",
      },
      {
        id: 3,
        name: "netilfy",
        img: netlifyLogo,
        url: "https://www.netlify.com/",
      },
    ],
  },
  {
    id: 3,
    title: "resume",
    backgroundImg: resumeBg,
    links: [
      {
        id: 1,
        url: { resumePdf },
        icon: <HiExternalLink />,
      },
      {
        id: 2,
        url: "https://github.com/ksrinreddy/resume-entry-level",
        icon: <DiGithubBadge />,
      },
    ],
    description: `Resume built with`,
    languages: [
      {
        id: 1,
        name: "html",
        img: htmlLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        id: 2,
        name: "css",
        img: cssLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        id: 3,
        name: "javascript",
        img: javascriptLogo,
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        id: 4,
        name: "styled components",
        img: styledComponentsLogo,
        url: "https://styled-components.com/",
      },
    ],
    libraries: [
      {
        id: 1,
        name: "react",
        img: reactLogo,
        url: "https://legacy.reactjs.org/",
      },
    ],
    vcWhServices: [
      {
        id: 1,
        name: "git",
        img: gitLogo,
        url: "https://git-scm.com/",
      },
      {
        id: 2,
        name: "GitHub",
        img: gitHubLogo,
        url: "https://github.com/",
      },
    ],
  },
];

export default projects;
