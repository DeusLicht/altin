import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Section6 from '../components/Section6'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Payments Simplified</title>
        <meta name="description" content="Altin" />
        <link rel="icon" href="assets/Altin.ico" />
      </Head>
      <NavBar/>
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}
