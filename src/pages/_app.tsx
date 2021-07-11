import "../styles/tailwind.css";

import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";

import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />;
      </AnimatePresence>
    </>
  );
}
export default MyApp;
