import { Home } from '@/pages/home';
import { Auth } from '@/pages/auth';
import { rootStore } from '@/stores';
import { createLazyFileRoute } from '@tanstack/react-router';

function IndexComponent() {
  const isLogged = rootStore.app.use.isLogged();
  return isLogged ? <Home /> : <Auth />;
}

export const Route = createLazyFileRoute('/dashboard')({
  component: IndexComponent,
});
