import Image from 'next/image'

import Logo from '../assets/weather-station.jpg'
import { SunIcon } from '@heroicons/react/outline'
import { weatherStationLabel } from '../lib/variables'
import Detail from './Detail'

type WeatherStationProps = {
  data: { [key: string]: number }
}

function WeatherStation({ data }: WeatherStationProps) {
  return (
    <div className="card-compact card w-auto h-max p-3 bg-base-100 shadow-xl">
            <div className="flex gap-4">
              <div>
              <div className="grid content-center place-content-center card w-24 h-full bg-gradient-to-tl from-[#FF9051] to-[#FBD560] p-3">
                <SunIcon className="text-slate-100 w-16 h-auto" />
              </div>
              </div>
              <div>
                <h1 className="font-bold text-sm text-blue-custom pb-1 text-center">Weather Station</h1>
                 <Detail data={data} label={weatherStationLabel} className="text-xs" />
              </div>
            </div>
          </div>
  )
}

export default WeatherStation
