import { GetStaticProps } from "next";
import Head from "next/head";
import Script from "next/script";
import slugify from "slugify";

// Data
import graveyard from "graveyard.json";

// Components
import Header from "components/Header";
import App from "components/App";
import Footer from "components/Footer";
import { ProductWithSlug } from "types/Product";

const HomePage: React.FC<{ items: ProductWithSlug[] }> = ({ items }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta
          name="description"
          content="Killed by Sharafdin is the Sharafdin Graveyard. A full list of dead products Killed by Sharafdin in the Sharafdin Cemetery."
        />
        <link rel="shortcut icon" href="favicon.png" />
        <title>Sharafdin Graveyard - Killed by Sharafdin</title>
        <meta name="theme-color" content="#FAFAFA" />
        <link rel="canonical" href="https://killedby.sharafdin.com" />
        <meta itemProp="name" content="Killed by Sharafdin" />
        <meta
          itemProp="description"
          content="Killed by Sharafdin is the Sharafdin Graveyard. A full list of dead products Killed by Sharafdin in the Sharafdin Cemetery."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Killed by Sharafdin" />
        <meta
          name="twitter:description"
          content="Killed by Sharafdin is the Sharafdin Graveyard. A full list of dead products Killed by Sharafdin in the Sharafdin Cemetery."
        />
        <meta name="twitter:site" content="@isasharafdin" />
        <meta name="twitter:creator" content="@isasharafdin" />
        <meta
          name="og:title"
          property="og:title"
          content="Killed by Sharafdin"
        />
        <meta
          name="og:url"
          property="og:url"
          content="https://killedby.sharafdin.com"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Killed by Sharafdin is the open source list of dead Sharafdin products, services, and devices. It serves as a tribute and memorial of beloved services and products Killed by Sharafdin."
        />
        <meta
          name="og:site_name"
          property="og:site_name"
          content="Killed by Sharafdin"
        />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="author" content="Mr Sharafdin" />
        <meta name="msvalidate.01" content="0C9605AF449480F57421EECCA9EB2B8A" />
      </Head>
      <Header />
      <App items={items} />
      <Footer />
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps = async (_context) => {
  slugify.extend({
    "+": "-plus",
    "@": "-at",
  });

  const processed = graveyard
    .map((item) => ({
      ...item,
      slug: slugify(item.name, {
        lower: true,
      }),
    }))
    .sort(
      (a, b) =>
        new Date(b.dateClose).getTime() - new Date(a.dateClose).getTime()
    );

  return {
    props: {
      items: processed,
    },
  };
};
