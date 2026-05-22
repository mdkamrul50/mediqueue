import AvailableTutors from '@/components/AvailableTutors';
import Banner from '@/components/Banner';
import TransformSection from '@/components/TransformSection';
import TutorServices from '@/components/TutoreServices';

import Image from 'next/image';

export const metadata = {
  title: 'Home | MediQueue',
  description: 'Find expert tutors and book learning sessions easily.',
};

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
