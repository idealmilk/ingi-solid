import { Title, Meta } from 'solid-meta';
import { useLocation } from '@solidjs/router';

export default function SEO({ title, description, image, type }) {
  const { pathname } = useLocation();

  const siteUrl = 'https://google.com/';

  const seo = {
    title: title || 'Eco Template',
    description: description || 'Sustainable and accessible website template',
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
    type: type || 'website',
    twitterUsername: 'twitter-username',
  };

  return (
    <>
      <Title>{seo.title}</Title>
      <Meta name='description' content={seo.description} />
      <Meta name='image' content={seo.image} />
      <Meta property='og:url' content={seo.url} />
      <Meta property='og:type' content={seo.url} />
      <Meta property='og:title' content={seo.title} />
      <Meta property='og:description' content={seo.description} />
      <Meta property='og:image' content={seo.type} />
      <Meta property='twitter:card' content='summary_large_image' />
      <Meta property='twitter:creator' content={seo.twitterUsername} />
      <Meta property='twitter:title' content={seo.title} />
      <Meta property='twitter:description' content={seo.description} />
      <Meta property='twitter:image' content={seo.image} />
    </>
  );
}
