import Image from 'next/image'

import { HomeIcon } from '@heroicons/react/outline'
import { loadLabel } from '../lib/variables'
import Detail from './Detail'
import LoadImage from "../assets/load.png"

type LoadProps = {
  data: { [key: string]: number }
}

function Load({ data }: LoadProps) {
  return (
    // <div>
    //     <div className="flex justify-center">
    //       <div id='sec-load' className="card-compact card w-24 bg-base-100 shadow-xl">
    //         <div className="flex gap-4 justify-center p-2">
    //           <div>
    //             <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">Load</h1>
    //             <div className="card w-20 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
    //               <HomeIcon className="text-slate-100"/>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //       <div className="card-compact card w-42 bg-base-100 shadow-xl mt-2">
    //         <div className="flex gap-4 justify-center p-2 mt-4">
    //         <Detail
    //                 data={{voltage: data.voltage,
    //                   current: data.current,
    //                   pf: data.pf,
    //                   frequency: data.frequency,}}
    //                 label={loadLabel}
    //                 className="text-xs"
    //               />
    //         </div>
    //       </div>
    // </div>

    //ver 02
    <div className="card-main card-compact card w-auto h-max p-3 shadow-embross">
            <div className="flex gap-4 justify-start">
              <div>
                <div id="sec-load" className="grid content-center place-content-center card w-24 h-full bg-gradient-to-tl from-[#1B93FF] to-[#34C0FE] p-3">
                   <HomeIcon className="text-slate-100 w-16 h-auto"/>
                </div>
              </div>
              <div>
                <h1 className="card-title font-bold text-sm text-blue-custom pb-1 text-center">Load</h1>
                <Detail
                     data={{current: data.current,
                       frequency: data.frequency,}}
                     label={loadLabel}
                     className="text-xs"
                   />
              </div>
              
            </div>
          </div>
    //end ver 02

     // ver 03

    //  <div id="sec-load" className="card card-main shadow-xl">
    //  <figure>
    //  <Image
    //      src={LoadImage}
    //      layout="fill"
    //    />
    //    </figure>
    //  <div className="relative card-body gap-0.5 bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] grid content-end text-xs">
    //        <h2 className='card-title text-lg font-bold text-slate-100 uppercase mb-1'>Load</h2>
    //        <p className="justify-start">
    //        <Detail
    //         data={{
    //           current: data.current,
    //           frequency: data.frequency
    //         }}
    //         label={loadLabel}
    //         className="text-xs text-white"
    //       /></p>
    //  </div>
    //    </div>
   
       //end ver 03
  )
}

export default Load
