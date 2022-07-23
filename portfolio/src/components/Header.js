import { Container, Text } from '@nextui-org/react';
import Navigation from '../components/Navigation';
import styles from '../styles/Header.module.css';

export default function Header( { currentPage, handlePageChange } ) {

  return (
    <header className={styles.header}>
      <Container className='logo-box'><Text h1>PFH</Text></Container>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
};
