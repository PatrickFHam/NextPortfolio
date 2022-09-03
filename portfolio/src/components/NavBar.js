import { Text, Container } from '@nextui-org/react';
import { Link as NextUILink } from '@nextui-org/react';

import NavButton from "./NavButton";
import styles from '../styles/NavBar.module.scss';

export default function NavBar (props) {

  return (
    <div className={styles.NavBar}>
      {props.navButtons.map(button => (
        <NavButton
          key={button.path}
          path={button.path}
          label={button.label}
          icon={button.icon}
        />
      ))}
    </div>
  )
}
