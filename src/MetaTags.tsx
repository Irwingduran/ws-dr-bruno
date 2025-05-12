import { Helmet } from 'react-helmet-async';

export default function MetaTags() {
  return (
    <Helmet>
      <title>Dr. Bruno Rubí López</title>
      <meta name="description" content=" El Dr. Bruno, un destacado cirujano urológico en México " />
      <meta name="keywords" content="urologo, urología, cirugía HOLEP,  próstata,  Centro de urología" />
      <meta name="author" content="Dr. Bruno Rubí López" />
      <meta property="og:title" content="Urologo | Dr. Bruno Rubí López" />
      <meta property="og:description" content="Destacado cirujano urológico en México." />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
