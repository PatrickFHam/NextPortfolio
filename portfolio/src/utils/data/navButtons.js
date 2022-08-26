import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPerson, faBriefcase, faAddressBook, faFile } from '@fortawesome/free-solid-svg-icons';

// NAVIGATION LINKS
const navButtons = [
  { label: "Home", 
   path: "/",
   icon: <FontAwesomeIcon icon={faHome} />
  },
  {
    label: "About Me",
    path: "/aboutme",
    icon: <FontAwesomeIcon icon={faPerson} />
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    icon: <FontAwesomeIcon icon={faBriefcase} />
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faAddressBook} />
  },
  {
    label: "Resume",
    path: "/resume",
    icon: <FontAwesomeIcon icon={faFile} />
  },
];

export default navButtons;
