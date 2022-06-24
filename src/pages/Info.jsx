import { MetaProvider } from 'solid-meta';

import SEO from '../components/SEO';

export default function InfoPage() {
  return (
    <MetaProvider>
      <SEO title='Info' />
      <h2>Born in Reykjavík, lives in London</h2>
    </MetaProvider>
  );
}
