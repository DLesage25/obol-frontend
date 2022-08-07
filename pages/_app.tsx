import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import globalStyles from '../styles/global';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    globalStyles();

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
