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
    <div className="card-compact card w-72 bg-base-100 shadow-xl">
            <div className="flex gap-4 p-2">
              <div>
              <div className="card w-24 bg-gradient-to-r from-cyan-500 to-sky-600 p-3">
                <SunIcon className="text-slate-100" />
              </div>
              </div>
              <div>
                <h1 className="font-bold text-sm text-blue-custom pb-1">Weather Station</h1>
                 <Detail data={data} label={weatherStationLabel} className="text-xs" />
              </div>
            </div>
          </div>
  )
}

export default WeatherStation
