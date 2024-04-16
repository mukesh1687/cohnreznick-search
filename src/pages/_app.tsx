//import 'bootstrap/dist/css/bootstrap.min.css'; // Import bootstrap CSS
import '@/styles/main.scss';
import type { Environment } from '@sitecore-search/react';
import { WidgetsProvider } from '@sitecore-search/react';
import 'react-loading-skeleton/dist/skeleton.css';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WidgetsProvider
      env={process.env.NEXT_PUBLIC_SEARCH_ENV as Environment}
      customerKey={process.env.NEXT_PUBLIC_SEARCH_CUSTOMER_KEY}
      apiKey={process.env.NEXT_PUBLIC_SEARCH_API_KEY}
      useToken
      publicSuffix={true}
    >
      <Component {...pageProps} />
    </WidgetsProvider>
  );
}
