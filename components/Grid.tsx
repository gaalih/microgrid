import Image from 'next/image'

import { WifiIcon } from '@heroicons/react/outline'
import { gridLabel } from '../lib/variables'
import Detail from './Detail'
import SutetImage from '../assets/sutet.jpg'
import GridIcon from '../assets/grid.svg'

type GridProps = {
  data: { [key: string]: number }
}

function Grid({ data }: GridProps) {
  return (
    //end ver 01

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

    //end ver 01

    // ver 02

    <div
      id="sec-grid"
      className="card-main shadow-embross card-compact card h-max w-auto p-3 bg-default"
    >
      <div className="flex justify-start gap-4">
        <div>
          <h1 className="card-title pb-1 text-center text-sm">Grid</h1>
          {/* <Detail data={data} label={gridLabel} className="text-xs" /> */}
          <Detail
            data={{
              pactive: data.pactive,
              preactive: data.preactive,
            }}
            label={gridLabel}
            className="text-xs"
          />
        </div>
        <div>
          <div className="card grid h-full w-24 place-content-center content-center bg-gradient-to-tl from-[#4B51FE] to-[#7E4FFE] p-3">
            <Image src={GridIcon} />
          </div>
        </div>
      </div>

      {/* <button className="btn-detail absolute bottom-2 right-2 btn btn-xs btn-warning uppercase text-2xs shadow-md">Detail</button> */}
    </div>

    // end ver02

    // ver 03
    // <div className="card-utama card bg-[#ECF2F7] p-4">
    //   <div id="sec-grid" className="card card-main shadow-md shadow-inner">
    // <figure>
    // <Image
    //     src={SutetImage}
    //     layout="fill"
    //   />
    //   </figure>
    // <div className="relative card-body gap-0.5 bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.1)] grid content-end text-xs">
    //       <h2 className='card-title text-lg font-bold text-slate-100 uppercase mb-1'>Grid</h2>
    //       <p className="justify-start">
    //       <Detail
    //        data={{
    //          pactive: data.pactive,
    //          preactive: data.preactive
    //        }}
    //        label={gridLabel}
    //        className="text-xs text-white"
    //      /></p>
    // </div>
    //   </div>
    //</div>

    //end ver 03
  )
}

export default Grid
