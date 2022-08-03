import Head from 'next/head'
import langEN from '../i18n/en.json'
import langES from '../i18n/es.json'

const Contact = ({ i18n }) => {
  return (
    <>
      <Head>
        <title>{i18n.title}</title>
        <meta name='description' content={i18n.desc} />
      </Head>

      <div className='px-4 md:px-8 pt-12 pb-24'>
        <h1 className='text-6xl my-4'>{i18n.T1}</h1>

        <div className='mb-12 max-w-2xl mx-auto leading-relaxed text-xl text-left'>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps(context) {
  let i18n
  context.locale === 'en' ?
    i18n = langEN.contact :
    i18n = langES.contact
  return {
    props: { i18n },
  }
}

export default Contact
