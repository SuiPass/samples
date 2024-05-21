import { Button, Container } from '@/components';
import { useAppWallet } from '@/hooks';
import * as React from 'react';

export const Auth: React.FC = () => {
  const { connect } = useAppWallet();
  return (
    <div className="relative min-h-dvh">
      <Container>
        <main className="relative py-48 max-md:px-4">
          <div className="flex flex-col items-center gap-5 w-full font-semibold">
            <Button size="lg" className="mt-10 w-1/2" onClick={connect}>
              <div className="text-center">Sign in with SUI</div>
            </Button>
          </div>
        </main>
      </Container>
    </div>
  );
};
