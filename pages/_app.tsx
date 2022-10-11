import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, AppShell } from '@mantine/core'
import { NavbarNested} from "../components/Navbar/Navbar";
import { HeaderSimple} from "../components/Header/Header";

const links = [{link: '/', label: 'Home' }, { link: '/about', label: 'About' }];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        breakpoints: {
          xs: 500,
          sm: 800,
          md: 1000,
          lg: 1200,
          xl: 1400,
        },
      }}
    >
        <AppShell
            padding="md"
            zIndex={50}
            navbar={<NavbarNested />}
            header={<HeaderSimple links={links} />}
            >
      <Component {...pageProps} />
        </AppShell>
    </MantineProvider>
  )
}

export default MyApp
