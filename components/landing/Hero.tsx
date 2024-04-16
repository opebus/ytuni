const Hero = () => {
  return (
    <div>
      <h1
        className='animate-fade-up text-black text-center font-display text-4xl font-bold tracking-[-0.02em]  opacity-0 drop-shadow-sm [text-wrap:balance] md:text-6xl md:leading-[5rem]'
        style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
      >
        An Open University for Everyone
      </h1>
      <p
        className='mt-6 animate-fade-up text-center text-gray-400 opacity-0 [text-wrap:balance] md:text-lg'
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        Learn anything with YouTube videos. Turn videos into bite-sized content.
        Share and curate.
      </p>
      <div
        className='mx-auto mt-10 flex animate-fade-up items-center justify-center space-x-5 opacity-0'
        style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
      >
        <a
          className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border bg-rose-900 px-6 font-medium text-white transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]'
          href='/explore'
        >
          <p>Explore</p>
        </a>
        <a
          className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-500 bg-white px-3 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]'
          href='#learn'
        >
          <p>Learn More</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
