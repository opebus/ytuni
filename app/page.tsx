import Categories from '@/components/landing/Categories';
import { FAQ } from '@/components/landing/Faq';
import Hero from '@/components/landing/Hero';
import Nav from '@/components/landing/nav';

export default function Home() {
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center py-32 overflow-hidden'>
      <Nav />
      <div className='z-10 w-full max-w-3xl px-5 xl:px-0'>
        <Hero />
        <Categories />
        {/*<FAQ />*/}
      </div>
    </div>
  );
}
