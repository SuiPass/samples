import { requestApi } from '@/apis';
import { Button, Container } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export function Home() {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const onGainMoreClick = () => {
    window.location.href = 'https://suipass.xyz';
  };
  const onRevealClick = () => {
    setShowMsg(true);
  };
  const userDetailQuery = useQuery({ queryKey: ['userDetail'], queryFn: requestApi.userDetail });

  return (
    <Container>
      <main className="flex flex-col self-center mt-40 w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex flex-col items-center gap-5 w-full self-start text-base font-semibold">
          <p>Demo</p>
          {userDetailQuery.data && (
            <>
              <p>Wallet: {userDetailQuery.data.address}</p>
              <p>Total score on SuiPass: {userDetailQuery.data.totalScore}</p>
            </>
          )}
          <p>Your Identity score need to be at least 1000 to reveal the secret message</p>
          <Button onClick={onGainMoreClick}>Gain more identity scores</Button>
          <Button
            onClick={onRevealClick}
            disabled={userDetailQuery.data && userDetailQuery.data.totalScore < 1000}
          >
            Reveal the secret message
          </Button>
          <div className="bg-slate-800 p-10 rounded-xl text-white">
            <p>Secret Message: {showMsg ? 'Hello from SuiPass' : '****'}</p>
          </div>
        </div>
      </main>
    </Container>
  );
}
