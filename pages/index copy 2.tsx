import type { NextPage } from 'next'
import Head from 'next/head'
// import { SteppedLineTo } from 'react-lineto';
import Xarrow from "react-xarrows";

import { useQuery } from 'react-query'
import { useFetch } from 'usehooks-ts'

import Card from '../components/Card'
import Cell from '../components/Cell'
import CustomLineChart from '../components/CustomLineChart'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'
import Battery from '../components/Battery'
import Load from '../components/Load'
import Pv from '../components/Pv'
import WeatherStation from '../components/WeatherStation'
import { fetchData } from '../lib/utils'
// import { batteryLabel, gridLabel, loadLabel, pvLabel } from '../lib/variables'



const Home: NextPage = () => {
  const { data, status } = useQuery('data', fetchData, {
    refetchInterval: Number(process.env.NEXT_PUBLIC_REFETCH_INTERVAL || 60000),
  })

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Head>
        <title>
          Microgrid Digital Twin - Lab. Energy Management, Engineering Physics,
          ITB
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {
          <main className="container mb-7">
          {status === 'loading' && <p>Loading...</p>}
          {status === 'error' && <p>Data could not be loaded</p>}
          {data && (
            <section className='main px-12 py-4'>
              <section className="flex sm:gap-2 md:gap-40 flex-wrap">
                <WeatherStation data={data.weather_station}/>
                <Pv data={data.pv}/>
              </section>

              <section className="flex flex-wrap justify-center mt-16">
              </section>

              <section className="mt-10 flex flex-wrap justify-center gap-20">
                <Grid data={data.grid}/>
                <Battery data={data.battery}/>
                <div id="sec-between"></div>
                <Load data={data.load}/>
                <Xarrow start="sec-grid" end="sec-battery" path="grid" strokeWidth={2} color="#18a8ffc0" dashness={{animation: 1}}  showHead={false}/>
                <Xarrow start="sec-battery" end="sec-pv" path="grid" strokeWidth={2} color="#18a8ffc0" dashness={{animation: 1}}  showHead={false}/>
                <Xarrow start="sec-battery" end="sec-load" path="grid" strokeWidth={2} color="#18a8ffc0" dashness={{animation: 1}}  showHead={false}/>
                {/* <Xarrow start="sec-battery" end="sec-between" path="grid" strokeWidth={2} color="#18a8ffc0" dashness={{animation: 1}} showHead={false}/> */}
                {/* <Xarrow start="sec-between" end="sec-load" path="grid" strokeWidth={2} color="#18a8ffc0" dashness={{animation: 1}} showHead={false}/> */}
                {/* <Xarrow start="sec-between" end="sec-pv" path="grid" strokeWidth={2} color="#18a8ffc0" dashness={{animation: 1}} showHead={false}/> */}
              </section>


            </section>

              
            
          )}
        </main>
      }

      <Footer />
    </div>
  )
}

export default Home
