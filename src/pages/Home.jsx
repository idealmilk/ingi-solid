import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';
import Collage from './../components/Collage';

export default function HomePage() {
  return (
    <MetaProvider>
      <SEO title='Home' />
      <Collage />
    </MetaProvider>
  );
}
