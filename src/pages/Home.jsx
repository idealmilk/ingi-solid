import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';

export default function HomePage() {
  return (
    <MetaProvider>
      <SEO title='Home' />
      <h1>Home</h1>
    </MetaProvider>
  );
}
