import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <div className='bg-green-600 bg-blue-600' hidden></div>

    </Layout>
  )
}

export default MyApp
