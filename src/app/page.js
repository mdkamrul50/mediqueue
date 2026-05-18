import Banner from '@/components/Banner';
import TransformSection from '@/components/TransformSection';
import TutorServices from '@/components/TutoreServices';

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Banner />
       <TutorServices />
       <TransformSection />
    </main>
  );
}
