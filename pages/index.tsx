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
  })

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
        <main className="main-content mx-10 mb-1 h-full pt-2">
          {status === 'loading' && (
            <div className="my-32 mb-80 grid h-auto grid-cols-12 place-content-center gap-4">
              <div className="col-span-5"></div>
              <div className="col-span-2">
                <progress className="progress h-5 w-full"></progress>
                <p className="text-center">Loading...</p>
              </div>
              <div className="col-span-5"></div>
            </div>
          )}
          {status === 'error' && (
            <div className="my-32 mb-64 grid h-auto grid-cols-12 place-content-center gap-4">
              <div className="col-span-5"></div>
              <div className="col-span-2 animate-fadeIn">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 stroke-rose-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="correntColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <p className="text-center font-bold text-rose-500">
                  Something Wrong
                </p>
                <p className="text-center text-xs tracking-wider text-rose-500">
                  Data could not be loaded.
                </p>
              </div>
              <div className="col-span-5"></div>
            </div>
          )}
          {data && (
            <div className="grid animate-fadeIn grid-cols-3 gap-10">
              <div className="left-column">
                <div className="grid grid-flow-col grid-rows-3 gap-4">
                  <section className="h-100 flex flex-wrap">
                    <Grid data={data.grid} />
                    <div className="dropdown dropdown-hover">
                      <label
                        tabindex="0"
                        class="btn-detail btn btn-warning btn-xs text-2xs absolute bottom-2 right-2 uppercase shadow-md"
                      >
                        detail
                      </label>
                      <div
                        tabindex="0"
                        class="card-main card dropdown-content card-compact ml-1 w-fit bg-base-100 p-2 pr-4 text-primary-content shadow-lg"
                      >
                        <div className="card-body my-0 p-0">
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
                            className="text-2xs -mt-3 flex flex-col gap-1"
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
                    <div className="dropdown-hover dropdown dropdown-left">
                      <label
                        tabindex="0"
                        class="btn-detail btn btn-warning btn-xs text-2xs absolute bottom-2 left-2 z-10 uppercase shadow-md"
                      >
                        detail
                      </label>
                      <div
                        tabindex="0"
                        class="card-main card-compact card dropdown-content mr-1 w-fit bg-base-100 p-2 pr-4 text-primary-content shadow-lg"
                      >
                        <div className="card-body my-0 p-0">
                          <h3 className="card-title">Bess</h3>
                          <div className="-mt-3 flex gap-7">
                            <Detail
                              data={{
                                total_voltage: data.battery.total_voltage,
                                est_soc: data.battery.est_soc,
                                meas_soc: data.battery.meas_soc,
                                current: data.battery.current,
                                max_temp: data.battery.max_temp,
                              }}
                              label={batteryLabel}
                              header="DC Side"
                              className="text-2xs flex flex-col gap-1 self-start"
                            />
                            <Detail
                              data={{
                                volt_output: data.battery.volt_output,
                                current_output: data.battery.current_output,
                                frequency: data.battery.frequency,
                                pactive: data.battery.pactive,
                                preactive: data.battery.preactive,
                              }}
                              label={batteryLabel}
                              header="AC Side"
                              className="text-2xs flex flex-col gap-1 self-start"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Battery data={data.battery} />
                  </section>
                  <section className="flex flex-wrap justify-end">
                    <div className="dropdown-hover dropdown dropdown-left">
                      <label
                        tabindex="0"
                        class="btn-detail btn btn-warning btn-xs text-2xs absolute bottom-2 left-2 z-10 uppercase shadow-md"
                      >
                        detail
                      </label>
                      <div
                        tabindex="0"
                        class="card-main card-compact card dropdown-content mr-1 w-fit bg-base-100 p-2 pr-4 text-primary-content shadow-lg"
                      >
                        <div className="card-body my-0 p-0">
                          <h3 className="card-title">Pv</h3>
                          <Detail
                            data={{
                              vdc: data.pv.vdc,
                              idc: data.pv.idc,
                              vac: data.pv.vac,
                              iac: data.pv.iac,
                              frequency: data.pv.frequency,
                              pac: data.pv.pac,
                            }}
                            label={pvLabel}
                            className="text-2xs -mt-3 flex flex-col gap-1"
                          />
                        </div>
                      </div>
                    </div>
                    <Pv data={data.pv} />
                  </section>
                  <section className="flex flex-wrap justify-start">
                    <div className="dropdown-hover dropdown dropdown-left">
                      <label
                        tabindex="0"
                        class="btn-detail btn btn-warning btn-xs text-2xs absolute bottom-2 left-2 z-10 uppercase shadow-md"
                      >
                        detail
                      </label>
                      <div
                        tabindex="0"
                        class="card-main card-compact card dropdown-content mr-1 -mt-20 w-fit bg-base-100 p-2 pr-4 text-primary-content shadow-lg"
                      >
                        <div className="card-body my-0 p-0">
                          <h3 className="card-title">Load</h3>
                          <Detail
                            data={{
                              voltage: data.load.voltage,
                              current: data.load.current,
                              pf: data.load.pf,
                              frequency: data.load.frequency,
                            }}
                            label={loadLabel}
                            className="text-2xs -mt-3 flex flex-col gap-1"
                          />
                        </div>
                      </div>
                    </div>
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
                <div className="shadow-embross card-compact card mb-4 flex h-40 justify-center p-3">
                  <CustomLineChart
                    data={data.battery.soc_data}
                    label="SoC"
                    unit="%"
                    domain={[0, 100]}
                  />
                </div>
                <div className="shadow-embross card-compact card my-4 h-40 p-3">
                  <CustomLineChart
                    data={data.pv.pv_production}
                    label="PV Production"
                    unit="kW"
                    domain={[0, 'auto']}
                  />
                </div>
                <div className="shadow-embross card-compact card mt-4 h-40 p-3">
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
