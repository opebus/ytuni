export default function Footer() {
  return (
    <div className='absolute w-full py-5 text-center text-slate-400 font-thin'>
      <div>
        Made by{' '}
        <a
          className='font-semibold underline-offset-4 transition-colors hover:underline'
          href='https://twitter.com/benxneo'
          target='_blank'
          rel='noopener noreferrer'
        >
          @benneo
        </a>{' '}
        &{' '}
        <a
          className='font-semibold underline-offset-4 transition-colors hover:underline'
          href='https://twitter.com/benxneo'
          target='_blank'
          rel='noopener noreferrer'
        >
          {' '}
          @weichun
        </a>
      </div>
    </div>
  );
}
