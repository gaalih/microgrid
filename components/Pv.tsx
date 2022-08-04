import Image from 'next/image'

import { DesktopComputerIcon } from '@heroicons/react/outline'
import { pvLabel } from '../lib/variables'
import Detail from './Detail'

type PvProps = {
  data: { [key: string]: number }
}

function Pv({ data }: PvProps) {
  return (
    <div>
        <div className="flex gap-5 justify-center ml-20">
          <div className="card-compact card w-44 bg-base-100 shadow-xl">
            <div className="flex gap-4 justify-center p-2">
            <Detail
                    data={{vdc: data.vdc,
                      idc: data.idc,
                      vac: data.vac,
                      iac: data.iac,
                      frequency: data.frequency,
                      pac: data.pac}}
                    label={pvLabel}
                    className="text-xs"
                  />
            </div>
          </div>


          <div id='sec-pv' className="card-compact card w-24 bg-base-100 shadow-xl">
            <div className="flex gap-4 justify-center p-2">
              <div>
                <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">PV</h1>
                <div className="card w-20 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
                  <DesktopComputerIcon className="text-slate-100"/>
                </div>
              </div>
            </div>
          </div>


        </div>

    </div>
  )
}

export default Pv
