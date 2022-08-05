import type { NextPage } from 'next'
import Head from 'next/head'
// import { SteppedLineTo } from 'react-lineto';
import Xarrow from 'react-xarrows'

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
    // <div className="flex min-h-screen flex-col bg-gradient-to-tl from-[#ECF2F7] to-[#FFFFFF]">
    <div className="flex min-h-screen flex-col bg-[#ECF2F7]">
      <Head>
        <title>
          Microgrid Digital Twin - Lab. Energy Management, Engineering Physics,
          ITB
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {
        <main className="mx-10 mb-7">
          {data && (
            <div class="grid grid-cols-3 gap-4">
              <div class="left-column ">
                <div class="grid grid-flow-col grid-rows-3 gap-4">
                  <section className="h-100 flex flex-wrap">
                    <WeatherStation data={data.weather_station} />
                  </section>
                  <section className="row-span-2 flex flex-wrap justify-center">
                    <Grid data={data.grid} />

                    {/* <div
                      id="sec-between"
                      className="h-10 w-10 bg-red-800"
                    ></div> */}
                  </section>
                </div>
              </div>

              <div class="center-column pt-10">
                <div class="grid grid-flow-col grid-rows-3 gap-5">
                  <section className="flex flex-wrap">
                    <Pv data={data.pv} />
                  </section>
                  <section className="flex flex-wrap">
                    <Battery data={data.battery} />
                  </section>
                  <section className="flex flex-wrap">
                    <Load data={data.load} />
                  </section>
                </div>
                <Xarrow
                  start="sec-grid"
                  end="sec-battery-1"
                  path="grid"
                  strokeWidth={3}
                  color="rgba(28, 147, 255,0.3)"
                  dashness={{ animation: 0.5 }}
                  showHead={true}
                  showTail={true}
                  headShape="circle"
                  tailShape="circle"
                />
                <Xarrow
                  start="sec-battery"
                  end="sec-pv"
                  path="grid"
                  strokeWidth={3}
                  color="rgba(28, 147, 255,0.3)"
                  dashness={{ animation: 0.5 }}
                  showHead={true}
                  showTail={true}
                  headShape="circle"
                  tailShape="circle"
                />
                <Xarrow
                  start="sec-battery"
                  end="sec-load"
                  path="grid"
                  strokeWidth={3}
                  color="rgba(28, 147, 255,0.3)"
                  dashness={{ animation: 0.5 }}
                  showHead={false}
                />
              </div>
              <div class="right-culumn bg-blue-100">05</div>
            </div>
          )}
          {/* <br />
<div class="grid grid-rows-3 grid-flow-col gap-4">
  <div class="row-span-3 bg-blue-100">01</div>
  <div class="col-span-2 bg-blue-100">02</div>
  <div class="row-span-2 col-span-2 bg-blue-100">03</div>
</div> */}
        </main>
      }

      <Footer />
    </div>
  )
}

export default Home
