import Image from 'next/image'

import Logo from '../assets/weather-station.jpg'
import { SunIcon } from '@heroicons/react/outline'
import { weatherStationLabel } from '../lib/variables'
import Detail from './Detail'
import WsImage from "../assets/weather_station.jpg"


type WeatherStationProps = {
  data: { [key: string]: number }
}

function WeatherStation({ data }: WeatherStationProps) {
  return (
    //ver 02
    <div className="card-main card-compact card w-auto h-max p-3 shadow-embross">
            <div className="flex gap-4 justify-start">
            <div>
                <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">Weather Station</h1>
                 <Detail data={data} label={weatherStationLabel} className="text-xs" />
              </div>
              <div>
              <div className="grid content-center place-content-center card w-24 h-full bg-gradient-to-tl from-[#FF9051] to-[#FBD560] p-3">
                <SunIcon className="text-slate-100 w-16 h-auto" />
              </div>
              </div>
              
            </div>
          </div>
    //end ver 02

        // ver 03

        // <div className="card w-72 h-56 shadow-xl">
        // <figure>
        // <Image
        //     src={WsImage}
        //     layout="fill"
        //   />
        //   </figure>
        // <div className="relative card-body gap-0.5 bg-gradient-to-r from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.1)] grid content-end text-xs p-0 pl-3 pb-3">
        //       <h2 className='card-title text-lg font-bold text-slate-100 uppercase mb-1'>Weather Station</h2>
        //       <p className="justify-start">
        //       <Detail
        //        data={data}
        //        label={weatherStationLabel}
        //        className="text-xs text-white"
        //      /></p>
        // </div>
        //   </div>
      
          //end ver 03
  )
}

export default WeatherStation
