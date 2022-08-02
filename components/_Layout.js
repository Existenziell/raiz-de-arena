import { useRouter } from 'next/router'
import Nav from './Nav'
import Footer from './Footer'
import NextNprogress from 'nextjs-progressbar'
import DarkModeToggle from './DarkModeToggle'
import Notification from './Notification'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Notification />

      <NextNprogress
        height={3}
        startPosition={0.3}
        stopDelayMs={100}
        showOnShallow={true}
        color='var(--color-brand)'
        options={{ showSpinner: false }}
      />
      <div className='flex justify-between z-20 dark:bg-brand-dark'>
        <Nav />
        <DarkModeToggle />
      </div>

      <main className='w-full text-center bg-cloth-pattern bg-repeat dark:bg-none dark:bg-brand-dark dark:text-gray-300'>
        {children}
      </main>

      {router.pathname != '/visit' &&
        <Footer />
      }
    </>
  )
}

export default Layout
