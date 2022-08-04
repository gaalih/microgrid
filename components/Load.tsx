import Image from 'next/image'

import { HomeIcon } from '@heroicons/react/outline'
import { loadLabel } from '../lib/variables'
import Detail from './Detail'

type LoadProps = {
  data: { [key: string]: number }
}

function Load({ data }: LoadProps) {
  return (
    <div>
        <div className="flex justify-center">
          <div id='sec-load' className="card-compact card w-24 bg-base-100 shadow-xl">
            <div className="flex gap-4 justify-center p-2">
              <div>
                <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">Load</h1>
                <div className="card w-20 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
                  <HomeIcon className="text-slate-100"/>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="card-compact card w-42 bg-base-100 shadow-xl mt-2">
            <div className="flex gap-4 justify-center p-2 mt-4">
            <Detail
                    data={{voltage: data.voltage,
                      current: data.current,
                      pf: data.pf,
                      frequency: data.frequency,}}
                    label={loadLabel}
                    className="text-xs"
                  />
            </div>
          </div>
    </div>
  )
}

export default Load
