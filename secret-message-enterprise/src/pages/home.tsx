import { requestApi } from '@/apis';
import { Button, Container, Loader } from '@/components';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

export function Home() {
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const onGainMoreClick = () => {
    window.location.href = 'https://suipass.xyz';
  };
  const onRevealClick = () => {
    setShowMsg(true);
  };

  const apiKey = useMemo(() => {
    return localStorage.getItem('ENTERPRISE_KEY');
  }, []);

  const userDetailQuery = useQuery({
    queryKey: ['userDetail', apiKey],
    queryFn: () => requestApi.userDetail(apiKey!),
    enabled: !!apiKey,
  });

  const entQuery = useQuery({
    queryKey: ['ent', apiKey],
    queryFn: () => requestApi.enterprise(apiKey!),
    enabled: !!apiKey,
  });

  if (!apiKey)
    return (
      <Container>
        <main className="flex flex-col self-center mt-40 w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex flex-col items-center gap-5 w-full self-start text-base font-semibold">
            <p>Missing API KEY</p>
            <p>Please set it in the localStorage with name ENTERPRISE_KEY</p>
          </div>
        </main>
      </Container>
    );

  if (!entQuery.data)
    return (
      <Container>
        <main className="flex flex-col self-center mt-40 w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex flex-col items-center gap-5 w-full self-start text-base font-semibold">
            <Loader />
          </div>
        </main>
      </Container>
    );

  return (
    <Container>
      <main className="flex flex-col self-center mt-40 w-full max-w-[1120px] max-md:max-w-full">
        <div className="flex flex-col items-center gap-5 w-full self-start text-base font-semibold">
          {userDetailQuery.data && (
            <>
              <p>Wallet: {userDetailQuery.data.address}</p>
              <p>Total score on SuiPass: {userDetailQuery.data.totalScore}</p>
            </>
          )}

          <p>
            Your Identity score need to be at least {entQuery.data.threshold} to reveal the secret
            message
          </p>
          <Button onClick={onGainMoreClick}>Gain more identity scores</Button>
          <Button
            onClick={onRevealClick}
            disabled={userDetailQuery.data && !userDetailQuery.data.isValid}
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
