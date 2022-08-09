import type { NextPage } from 'next'
import Head from 'next/head'
import Xarrow from 'react-xarrows'

import { useQuery } from 'react-query'
import { useFetch } from 'usehooks-ts'

import Card from '../components/Card'
import Cell from '../components/Cell'
import CustomLineChart from '../components/CustomLineChart'
import Chart from '../components/Chart'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Grid from '../components/Grid'
import Battery from '../components/Battery'
import Load from '../components/Load'
import Pv from '../components/Pv'
import WeatherStation from '../components/WeatherStation'
import { fetchData } from '../lib/utils'
import { batteryLabel, gridLabel, loadLabel, pvLabel } from '../lib/variables'

const Home: NextPage = () => {
  const { data, status } = useQuery('data', fetchData, {
    refetchInterval: Number(process.env.NEXT_PUBLIC_REFETCH_INTERVAL || 60000),
  });

  return (
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
        <main className="main-content mx-10 mb-1 pt-2">
          {data && (
            <div className="grid grid-cols-3 gap-10">
              <div className="left-column">
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                  <section className="h-100 flex flex-wrap">
                    <Grid data={data.grid} />
                    <div class="dropdown dropdown-hover">
                      <label tabindex="0" class="btn-detail absolute bottom-2 right-2 btn btn-xs btn-warning uppercase text-2xs shadow-md">detail</label>
                      <div tabindex="0" class="ml-1 dropdown-content card card-compact w-56 p-2 shadow-lg bg-base-100 text-primary-content">
                        <div className="card-body p-0 my-0">
                          <h3 className="card-title">Grid</h3>
                           <Detail
                              data={{
                                voltage: data.grid.voltage,
                                current: data.grid.current,
                                frequency: data.grid.frequency,
                                pactive: data.grid.pactive,
                                preactive: data.grid.preactive,
                              }}
                              label={gridLabel}
                              className="-mt-3 text-xs flex flex-wrap gap-2"
                            />
                        </div>
                      </div>
                    </div>

                  </section>
                  <section className="row-span-2 flex flex-wrap">
                    <WeatherStation data={data.weather_station} />
                  </section>
                </div>
              </div>

              <div className="center-column">
                <div className="grid grid-flow-col grid-rows-3 gap-5">
                  <section className="flex flex-wrap justify-start">
                    <Battery data={data.battery} />
                  </section>
                  <section className="flex flex-wrap justify-end">
                    <Pv data={data.pv} />
                  </section>
                  <section className="flex flex-wrap justify-start">
                    <Load data={data.load} />
                  </section>
                </div>
                <Xarrow
                  start="sec-grid"
                  end="sec-battery"
                  path="straight"
                  strokeWidth={3}
                  color="#d1d1d1"
                  showHead={false}
                  showTail={false}
                />
                <Xarrow
                  start="sec-battery"
                  end="sec-load"
                  path="straight"
                  strokeWidth={3}
                  color="#d1d1d1"
                  showHead={false}
                  showTail={false}
                />
                <Xarrow
                  start="sec-pv"
                  end="sec-battery"
                  path="grid"
                  gridBreak="100%-500"
                  strokeWidth={3}
                  color="#d1d1d1"
                  endAnchor={{ position: 'bottom', offset: { x: 0.5 } }}
                  showHead={false}
                  showTail={false}
                />
              </div>
              <div className="right-column">
                <div className='h-40 mb-4 shadow-embross card card-compact p-3 flex justify-center'>
                  <CustomLineChart
                    data={data.battery.soc_data}
                    label="SoC"
                    unit="%"
                    domain={[0, 100]}
                  />
                </div>
                <div className='h-40 my-4 shadow-embross card card-compact p-3'>
                  <CustomLineChart
                    data={data.pv.pv_production}
                    label="PV Production"
                    unit="kW"
                    domain={[0, 'auto']}
                  />
                </div>
                <div className='h-40 mt-4 shadow-embross card card-compact p-3'>
                  <CustomLineChart
                    data={data.load.electricity_load}
                    label="Electricity Load"
                    unit="kW"
                    domain={[0, 'auto']}
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      }
      <Footer />
    </div>
  )
}

export default Home
