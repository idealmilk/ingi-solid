import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';

export default function AboutPage() {
  return (
    <MetaProvider>
      <SEO title='About' />
      <p>Born in Reykjavík, lives in London</p>
    </MetaProvider>
  );
}
