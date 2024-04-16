'use client';
import { Session } from 'next-auth';
import useScroll from '@/lib/hooks/use-scroll';
import Logo from '../Logo';
import { useSignInModal } from '../layout/sign-in-modal';
import UserDropdown from '../layout/user-dropdown';

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  const scrolled = useScroll(50);
  return (
    <>
      <SignInModal />
      <nav
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
            : 'bg-white/0'
        } z-30 transition-all`}
      >
        <div className='mx-5 flex h-16 max-w-screen-md items-center justify-between w-full'>
          <Logo />
          <div>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className='rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black'
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
