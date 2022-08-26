import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '../styles/NavButton.module.scss';

export const NavButton = (props) => {

  const router = useRouter();

  return (
    <Link href={props.path} >
      <div className={`${styles.NavButton} ${router.asPath === props.path ? `${styles.active}` : ""}` }>
        <div className={styles.Icon}>{props.icon}</div>
        <span className={styles.Label}>{props.label}</span>
      </div>
    </Link>
  )
  
};

export default NavButton;
