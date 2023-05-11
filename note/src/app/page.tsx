import Image from 'next/image';
import styles from './page.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <h1>홈페이지다!</h1>;
}
