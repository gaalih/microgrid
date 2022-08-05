import Image from 'next/image'

import { WifiIcon } from '@heroicons/react/outline'
import { gridLabel } from '../lib/variables'
import Detail from './Detail'

type GridProps = {
  data: { [key: string]: number }
}

function Grid({ data }: GridProps) {
  return (
    // <div>
    //     <div className="flex justify-center">
    //       <div id='sec-grid' className="card-compact card w-24 bg-base-100 shadow-xl">
    //         <div className="flex gap-4 justify-center p-2">
    //           <div>
    //             <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">Grid</h1>
    //             <div className="card w-20 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
    //               <WifiIcon className="text-slate-100"/>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //       <div className="card-compact card w-42 bg-base-100 shadow-xl mt-2">
    //         <div className="flex gap-4 justify-center p-2 mt-4">
    //         <Detail
    //                 data={data}
    //                 label={gridLabel}
    //                 className="text-xs"
    //               />
    //         </div>
    //       </div>
    // </div>
    <div className="card card-compact h-max w-auto bg-base-100 p-3 shadow-xl">
      <div className="flex justify-end gap-8">
        <div>
          <div
            id="sec-grid"
            className="card grid h-full w-24 place-content-center content-center bg-gradient-to-tl from-[#4B51FE] to-[#7E4FFE] p-3"
          >
            <WifiIcon className="h-auto w-16 text-slate-100" />
          </div>
        </div>
        <div>
          <h1 className="text-blue-custom pb-1 text-center text-sm font-bold">
            Grid
          </h1>
          <Detail data={data} label={gridLabel} className="text-xs" />
        </div>
      </div>
    </div>
  )
}

export default Grid
