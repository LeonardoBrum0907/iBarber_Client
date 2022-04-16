import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AvailabilitiesProvider } from '../availabilitiesContext';
import { makeServer } from '../services/mirage';
import { GlobalStyle } from '../styles/global';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  const [desactiveButton, setDesactiveButton] = useState(false);

  function handleCloseButton() {
    setDesactiveButton(false);
}

  return (
    <QueryClientProvider client={queryClient}>
      <AvailabilitiesProvider>
        <Component closeButton={handleCloseButton} isDesactive={desactiveButton} {...pageProps} />

        <GlobalStyle />

        <ReactQueryDevtools />
      </AvailabilitiesProvider>
    </QueryClientProvider>
  )
}

export default MyApp
