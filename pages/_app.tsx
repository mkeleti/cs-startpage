import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, AppShell, Header } from '@mantine/core'
import { NavbarNested} from "../components/Navbar/Navbar";

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
            navbar={<NavbarNested />}
            header={<Header height={70}>sjd</Header>}
            >
      <Component {...pageProps} />
        </AppShell>
    </MantineProvider>
  )
}

export default MyApp
