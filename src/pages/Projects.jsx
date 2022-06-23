import { MetaProvider } from 'solid-meta';

import Projects from './../components/Projects';
import SEO from './../components/SEO';

export default function ProjectPage() {
  return (
    <MetaProvider>
      <SEO title='Projects' />
      <Projects />
    </MetaProvider>
  );
}
