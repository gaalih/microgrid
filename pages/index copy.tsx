import type { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from 'react-query'
import { useFetch } from 'usehooks-ts'

import Card from '../components/Card'
import Cell from '../components/Cell'
import CustomLineChart from '../components/CustomLineChart'
import Detail from '../components/Detail'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WeatherStation from '../components/WeatherStation'
import { fetchData } from '../lib/utils'
import { batteryLabel, gridLabel, loadLabel, pvLabel } from '../lib/variables'

const Home: NextPage = () => {
  const { data, status } = useQuery('data', fetchData, {
    refetchInterval: Number(process.env.NEXT_PUBLIC_REFETCH_INTERVAL || 60000),
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>
          Microgrid Digital Twin - Lab. Energy Management, Engineering Physics,
          ITB
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {
        <main className="grow overflow-x-auto py-10 px-6">
          {status === 'loading' && <p>Loading...</p>}
          {status === 'error' && <p>Data could not be loaded</p>}
          {data && (
            <section className="container mx-auto">
              <div className="mx-auto grid w-fit grid-cols-[repeat(9,_160px)]">
                {/* Row 1 */}
                <Cell />
                <WeatherStation data={data.weather_station} />
                <Cell />
                <Cell>
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
                  />
                </Cell>
                <Cell lines={['bottom']}>
                  <Card type="pv" />
                </Cell>
                <CustomLineChart
                  data={data.pv.pv_production}
                  label="PV Production"
                  unit="kW"
                  domain={[0, 'auto']}
                />

                {/* Row 2 */}
                <Cell />
                <Cell>
                  <Detail
                    data={{
                      voltage: data.grid.voltage,
                      current: data.grid.current,
                      frequency: data.grid.frequency,
                      pactive: data.grid.pactive,
                      preactive: data.grid.preactive,
                    }}
                    label={gridLabel}
                  />
                </Cell>
                <Cell lines={['right']}>
                  <Card type="grid" />
                </Cell>
                <Cell lines={['left', 'right']} />
                <Cell lines={['left', 'right']}>
                  <Card type="battery" />
                </Cell>
                <Cell lines={['top', 'left', 'right']} />
                <Cell lines={['left', 'right']} />
                <Cell lines={['left']}>
                  <Card type="load" />
                </Cell>
                <Cell>
                  <Detail
                    data={{
                      voltage: data.load.voltage,
                      current: data.load.current,
                      pf: data.load.pf,
                      frequency: data.load.frequency,
                    }}
                    label={loadLabel}
                  />
                </Cell>

                {/* Row 3 */}
                <CustomLineChart
                  data={data.battery.soc_data}
                  label="SoC"
                  unit="%"
                  domain={[0, 100]}
                />
                <Cell />
                <Cell className="-translate-x-1/2">
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
                    className="self-start"
                  />
                </Cell>
                <Cell className="-translate-x-1/2">
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
                    className="self-start"
                  />
                </Cell>
                <CustomLineChart
                  data={data.load.electricity_load}
                  label="Electricity Load"
                  unit="kW"
                  domain={[0, 'auto']}
                />
              </div>
            </section>
          )}
        </main>
      }
      <Footer />
    </div>
  )
}

export default Home
