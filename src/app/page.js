import AvailableTutors from '@/components/AvailableTutors';
import Banner from '@/components/Banner';
import TransformSection from '@/components/TransformSection';
import TutorServices from '@/components/TutoreServices';

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Banner />
      <AvailableTutors />
      <TutorServices />
      <TransformSection />
    </main>
  );
}
