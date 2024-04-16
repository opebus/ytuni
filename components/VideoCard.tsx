import Image from 'next/image';
import Link from 'next/link';

interface VideoCardProps {
  id: string;
  title: string;
  author: string;
  thumbnail: string | boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  author,
  thumbnail,
}) => {
  //const imageSrc = typeof thumbnail === 'string' ? thumbnail : '/thumbnail.jpg';
  const imageSrc = '/thumbnail.jpg';

  return (
    <Link
      href={`/read/${id}`}
      className='block group overflow-hidden rounded-lg hover:bg-white p-3'
    >
      <div className='relative w-full h-48 md:h-40 xl:h-32'>
        <Image
          src={imageSrc}
          alt={title}
          layout='fill'
          sizes='100vw'
          className='transform group-hover:scale-105 transition-transform rounded-md '
        />
      </div>
      <div className='p-1 h-20 overflow-hidden'>
        <p className='text-sm font-bold py-2 text-gray-900 line-clamp-2'>
          {author}
        </p>
        <p className='text-sm text-gray-900 line-clamp-2'>{title}</p>
      </div>
    </Link>
  );
};
export default VideoCard;
