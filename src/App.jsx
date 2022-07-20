import { useRoutes, Router, Link } from 'solid-app-router';

import Header from './components/Header';
import { useCarbonIntensity } from './context/carbonIntensity';

import { routes } from './routes';

export const App = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <div class='App'>
        <Link href='/' class='mobile-title'>
          <h1>INGI</h1>
        </Link>

        <Header />

        <main className='page-wrap'>
          <Routes />
        </main>
      </div>
    </Router>
  );
};

export default App;
