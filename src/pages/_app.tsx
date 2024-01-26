import { FlexBetween, FlexCenter, FlexItemCenter } from '@/common'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Box, Container } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box className={`bg-gradient-to-tr from-indigo-400 to-blue-800 bg-cover min-h-screen`}>
        <Header />
      <Box className={`px-10 text-white`}>
        <FlexItemCenter className={`w-full gap-10`}>
          <NavBar />
          <Component {...pageProps} />
        </FlexItemCenter>
      </Box>
    </Box>
  )
}
