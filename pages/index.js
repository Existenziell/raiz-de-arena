import Head from 'next/head'
import Link from 'next/link'
import AddToHomeScreen from '../components/AddToHomeScreen'
import SVGText from '../components/SVGText'
import SVGTree from '../components/SVGTree'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const Home = ({ i18n }) => {

  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='px-4 md:px-8 leading-relaxed py-24' id='anchor'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center'>
          <div className='w-full md:w-1/2 mb-8 md:mb-0'>
            <SVGTree />
          </div>
          <div className='w-full md:w-1/2'>
            <SVGText />
            <p className='mt-16 leading-loose'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{` `}
              <Link href='/contact'><a className='button-glitch block mt-16 mx-auto'>Contact us</a></Link>
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center px-6'>
        <AddToHomeScreen />
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.home :
    i18n = langES.home
  return {
    props: { i18n },
  }
}

export default Home
