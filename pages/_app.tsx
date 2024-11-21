import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import Layout from '../components/Layout'; // Ajusta la ruta según tu estructura
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme'; // Asegúrate de que la ruta sea correcta

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
