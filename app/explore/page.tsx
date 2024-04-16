import VideoCarousel from '@/components/VideoCarousel';
import { videos } from '@/constants';
import { categories } from '@/constants';
import CategoriesNav from '@/components/Categories';

const Explore = () => {
  return (
    <div className='container mx-auto p-10'>
      <div>
        <h2 className='text-2xl mb-2 font-bold '>Categories</h2>
        <p className=' mb-6 font-light'>
          Explore all {categories.length} categories
        </p>
        <CategoriesNav />
      </div>

      <div className='mt-20'>
        <h2 className='text-2xl mb-2 font-bold'>Trending</h2>
        <p className=' mb-6 font-light'>What's trending now</p>
        <VideoCarousel videos={videos} />
      </div>

      <div className='mt-20'>
        <h2 className='text-2xl mb-2 font-bold'>Latest</h2>
        <p className=' mb-6 font-light'>Recently saved by others</p>
        <VideoCarousel videos={videos} />
      </div>
    </div>
  );
};

export default Explore;
