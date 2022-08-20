import React from "react";
import { Text, Container } from '@nextui-org/react';
import { Link as NextUILink } from '@nextui-org/react';
import styles from '../styles/Navigation.module.css';
import { navLinks } from '../utils/data';
import Link from "next/link";

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

export default function Navigation (props) {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <nav>
      <Container>
        <nav>
        <ul className={styles.nav}>
          
          {navLinks.map((link, index) => {
            return (
              <ul>
                <Link href={link.path}>
                  <NextUILink>
                    <li key={index}>{link.name}</li>
                  </NextUILink>
                </Link>
              </ul>
            );
          })}

          <li>
            <Switch
              checked={isDark}
              size="sm"
              onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
              iconOn={<MoonIcon filled />}
              iconOff={<SunIcon filled />}
            />
          </li>
        </ul>
        </nav>
      </Container>
    </nav>
  )
};
