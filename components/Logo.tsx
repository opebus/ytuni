import Image from 'next/image';
import Link from 'next/link';
interface LogoProps {
  logoOnly: boolean; // Now it accepts any boolean value
}

const Logo = ({ logoOnly = false }: LogoProps) => {
  return (
    <Link href='/' className='flex items-center font-display text-2xl'>
      {logoOnly ? (
        <Image
          src='/logo.png'
          alt='Onyx'
          width={30}
          height={30}
          className='mr-2 rounded-sm'
        ></Image>
      ) : (
        <>
          <Image
            src='/logo.png'
            alt='Onyx'
            width={30}
            height={30}
            className='mr-2 rounded-sm'
          ></Image>
          <p>Onyx</p>
        </>
      )}
    </Link>
  );
};

export default Logo;
