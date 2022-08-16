import Image from 'next/image'

import { DesktopComputerIcon } from '@heroicons/react/outline'
import { pvLabel } from '../lib/variables'
import Detail from './Detail'
import PvImage from '../assets/pv.png'
import PvIcon from '../assets/pv.svg'

type PvProps = {
  data: { [key: string]: number }
}

function Pv({ data }: PvProps) {
  return (
    // <div>
    //     <div className="flex gap-5 justify-center ml-20">
    //       <div className="card-compact card w-44 bg-base-100 shadow-xl">
    //         <div className="flex gap-4 justify-center p-2">
    //         <Detail
    //                 data={{vdc: data.vdc,
    //                   idc: data.idc,
    //                   vac: data.vac,
    //                   iac: data.iac,
    //                   frequency: data.frequency,
    //                   pac: data.pac}}
    //                 label={pvLabel}
    //                 className="text-xs"
    //               />
    //         </div>
    //       </div>

    //       <div id='sec-pv' className="card-compact card w-24 bg-base-100 shadow-xl">
    //         <div className="flex gap-4 justify-center p-2">
    //           <div>
    //             <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">PV</h1>
    //             <div className="card w-20 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
    //               <DesktopComputerIcon className="text-slate-100"/>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>

    // </div>

    //ver 02
    <div
      id="sec-pv"
      className="card-main card-compact shadow-embross card h-max w-auto p-3 bg-default"
    >
      <div className="flex justify-start gap-4">
        <div>
          <div className="card grid h-full w-24 place-content-center content-center bg-gradient-to-tl from-[#ff5e62] to-[#ff9966] p-3">
            {/* <DesktopComputerIcon className="text-slate-100 w-16 h-auto"/> */}
            <Image src={PvIcon} />
          </div>
        </div>
        <div>
          <h1 className="text-blue-custom card-title pb-1 text-center text-sm font-bold">
            PV
          </h1>
          <Detail
            data={{
              frequency: data.frequency,
              pac: data.pac,
            }}
            label={pvLabel}
            className="text-xs"
          />
        </div>
      </div>
      <button className="btn-detail btn btn-warning btn-xs text-2xs absolute bottom-2 left-2 uppercase shadow-md">
        Detail
      </button>
    </div>
    //end ver 02

    // ver 03

    // <div id="sec-pv" className="card card-main shadow-xl">
    // <figure>
    // <Image
    //     src={PvImage}
    //     layout="fill"
    //   />
    //   </figure>
    // <div className="relative card-body gap-0.5 bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] grid content-end text-xs">
    //       <h2 className='card-title text-lg font-bold text-slate-100 uppercase mb-1'>PV</h2>
    //       <p className="justify-start">
    //       <Detail
    //        data={{
    //         frequency: data.frequency,
    //         pac: data.pac
    //        }}
    //        label={pvLabel}
    //        className="text-xs text-white"
    //      /></p>
    // </div>
    //   </div>

    //end ver 03
  )
}

export default Pv
