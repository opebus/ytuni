import { videos } from '@/constants';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

const ReaderView = ({ params }: any) => {
  const { slug } = params;
  const video = videos.find((video) => video.id === slug);

  if (!video) {
    return <div className='text-center py-10'>Video not found</div>;
  }

  return (
    <div className='py-10 px-4'>
      <div className='mb-8 max-w-2xl'>
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={1000}
          height={360}
          className='rounded-lg'
        />
      </div>
      <h1 className='max-w-2xl text-3xl font-bold mb-12'>{video.title}</h1>
      <div className='prose'>
        <ReactMarkdown>{video.summary}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ReaderView;
