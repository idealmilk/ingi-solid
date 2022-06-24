import { MetaProvider } from 'solid-meta';

import SEO from './../components/SEO';
import Events from './../components/Events';

export default function EventsPage() {
  return (
    <MetaProvider>
      <SEO title='Events' />
      <Events />
    </MetaProvider>
  );
}
