import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';
import Events from './../components/Events';

export default function AboutPage() {
  return (
    <MetaProvider>
      <SEO title='About' />
      <h2>Born in Reykjavík, lives in London, loves techno</h2>
      <Events />
    </MetaProvider>
  );
}
