import Image from 'next/image'

import { LightningBoltIcon } from '@heroicons/react/outline'
import { batteryLabel } from '../lib/variables'
import Detail from './Detail'

type BatteryProps = {
  data: { [key: string]: number }
}

function Battery({ data }: BatteryProps) {
  return (
    <div>
        <div className="flex justify-center">
          <div id='sec-battery' className="card-compact card w-24 bg-base-100 shadow-xl">
            <div className="flex gap-4 justify-center p-2">
              <div>
                <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">Bess</h1>
                <div className="card w-20 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
                  <LightningBoltIcon className="text-slate-100"/>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="card-compact card w-72 bg-base-100 shadow-xl mt-2">
            <div className="flex gap-4 p-2 mt-4">
            <Detail
                    data={{total_voltage: data.total_voltage,
                      est_soc: data.est_soc,
                      meas_soc: data.meas_soc,
                      current: data.current,
                      max_temp: data.max_temp}}
                    label={batteryLabel}
                    header="DC Side"
                    className="text-xs items-start"
                  />
                  <Detail
                    data={{ volt_output: data.volt_output,
                      current_output: data.current_output,
                      frequency: data.frequency,
                      pactive: data.pactive,
                      preactive: data.preactive}}
                    label={batteryLabel}
                    header="AC Side"
                    className="text-xs items-end"
                  />
            </div>
          </div>
    </div>
  )
}

export default Battery
