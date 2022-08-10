import Image from 'next/image'

import { LightningBoltIcon } from '@heroicons/react/outline'
import { batteryLabel } from '../lib/variables'
import Detail from './Detail'
import BateraiImage from '../assets/baterai.png'
import BatteryIcon from '../assets/battery.svg'

type BatteryProps = {
  data: { [key: string]: number }
}

function Battery({ data }: BatteryProps) {
  return (
    // <div>
    //     <div className="flex justify-center">
    //       <div id='sec-battery' className="card-compact card w-24 bg-base-100 shadow-xl">
    //         <div className="flex gap-4 justify-center p-2">
    //           <div>
    //             <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">Bess</h1>
    //             <div className="card w-20 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
    //               <LightningBoltIcon className="text-slate-100"/>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //       <div className="card-compact card w-72 bg-base-100 shadow-xl mt-2">
    //         <div className="flex gap-4 p-2 mt-4">
    //         <Detail
    //                 data={{total_voltage: data.total_voltage,
    //                   est_soc: data.est_soc,
    //                   meas_soc: data.meas_soc,
    //                   current: data.current,
    //                   max_temp: data.max_temp}}
    //                 label={batteryLabel}
    //                 header="DC Side"
    //                 className="text-xs items-start"
    //               />
    //               <Detail
    //                 data={{ volt_output: data.volt_output,
    //                   current_output: data.current_output,
    //                   frequency: data.frequency,
    //                   pactive: data.pactive,
    //                   preactive: data.preactive}}
    //                 label={batteryLabel}
    //                 header="AC Side"
    //                 className="text-xs items-end"
    //               />
    //         </div>
    //       </div>
    // </div>

    //Ver 02
    <div
      id="sec-battery"
      className="card-main shadow-embross card-compact card h-max w-auto p-3"
    >
      <div className="flex justify-start gap-4">
        <div>
          <div className="card grid h-full w-24 place-content-center content-center bg-gradient-to-tl from-[#56CEBA] to-[#32CE75] p-3">
            {/* <LightningBoltIcon className="h-auto w-16 text-slate-100" /> */}
            <Image src={BatteryIcon} />
          </div>
        </div>
        <div className="">
          <h1 className="text-blue-custom card-title pb-1 text-center text-sm font-bold">
            Bess
          </h1>
          <div className="flex w-full gap-2">
            <Detail
              data={{
                est_soc: data.est_soc,
                meas_soc: data.meas_soc,
                // current: data.current
              }}
              label={batteryLabel}
              className="items-start text-xs"
            />
          </div>
        </div>
      </div>
      {/* <button className="btn-detail absolute bottom-2 left-2 btn btn-xs btn-warning uppercase text-2xs shadow-md">Detail</button> */}
    </div>

    // end ver 02

    // <div className="card card-compact h-max w-auto bg-base-100 p-3 shadow-xl">
    //   <div className="flex justify-end gap-8">
    //     <div>
    //       <div id="sec-battery-1"></div>
    //       <div
    //         id="sec-battery"
    //         className="card grid h-24 w-full place-content-center content-center bg-gradient-to-tl from-[#56CEBA] to-[#32CE75] p-3"
    //       >
    //         <LightningBoltIcon className="h-auto w-16 text-slate-100" />
    //       </div>
    //       <h1 className="text-blue-custom pb-1 text-center text-sm font-bold">
    //         Bess
    //       </h1>

    //     </div>
    //   </div>
    // </div>

    // ver 03

    //   <div id="sec-battery" className="card card-main shadow-xl">
    // <figure>
    // <Image
    //     src={BateraiImage}
    //     layout="fill"
    //   />
    //   </figure>
    // <div className="relative card-body gap-0.5 bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] grid content-end text-xs">
    //       <h2 className='card-title text-lg font-bold text-slate-100 uppercase mb-1'>BESS</h2>
    //       <div className='grid content-end'>
    //       <div className="flex justify-end">
    //           <p className="justify-self-start">
    //           <Detail
    //           data={{
    //             est_soc: data.est_soc,
    //             meas_soc: data.meas_soc,
    //           }}
    //           label={batteryLabel}
    //           className="text-xs text-white"
    //         /></p>
    //         <p className="justify-self-end">
    //           <Detail
    //           data={{
    //             current: data.current,
    //             }}
    //             label={batteryLabel}
    //             className="text-xs text-white"
    //           /></p>
    //       </div>
    //       </div>
    // </div>
    //   </div>

    //end ver 03
  )
}

export default Battery
