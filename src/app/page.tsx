import Header from '@/components/Header';
import Bio from '@/components/Bio';
import ProyectoMusical from '@/components/ProyectoMusical';
import Mixing from '@/components/Mixing';
import DjSets from '@/components/DjSets';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Bio />
      <ProyectoMusical />
      <Mixing />
      <DjSets />
      <Contact />
    </main>
  );
}
