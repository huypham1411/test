import Image from 'next/image';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import MainBody from '../components/MainBody';

export default function Home() {
  return (
    <main>
      <Nav />
      <Banner />
      <MainBody />
    </main>
  );
}
