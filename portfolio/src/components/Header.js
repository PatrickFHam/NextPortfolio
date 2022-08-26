import { Container, Text } from '@nextui-org/react';

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

import styles from "../styles/Header.module.scss";

export default function Header(props) {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <header className={styles.Header}>
      HEADER
      <Switch
        checked={isDark}
        size="sm"
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        iconOn={<MoonIcon filled />}
        iconOff={<SunIcon filled />}
      />
    </header>
  );
};
