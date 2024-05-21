import { Button } from '.';
import { Link } from '@tanstack/react-router';
import { useAppWallet } from '@/hooks';

export function Header() {
  const { isLogged, disconnect } = useAppWallet();

  const logoutBtnOnClick = () => {
    disconnect();
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black px-12 py-6 max-md:px-5">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center max-md:flex-wrap">
        <Link to="/">
          <div className="flex flex-1 gap-4 text-2xl font-semibold">
            <span className="text-white">Secret Message</span>
          </div>
        </Link>
        {isLogged && <Button onClick={logoutBtnOnClick}>Logout</Button>}
      </div>
    </header>
  );
}
