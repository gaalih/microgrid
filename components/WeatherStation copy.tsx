import Image from 'next/image'

import Logo from '../assets/weather-station.jpg'
import { weatherStationLabel } from '../lib/variables'
import Detail from './Detail'

type WeatherStationProps = {
  data: { [key: string]: number }
}

function WeatherStation({ data }: WeatherStationProps) {
  return (
    <div className="col-span-2 grid grid-flow-col grid-rows-[auto_auto] items-center justify-items-start">
      <h2 className="mb-2 self-end text-xl font-medium">Weather Station</h2>
      <Detail data={data} label={weatherStationLabel} className="self-start" />
      <div className="row-span-2 h-36 w-36 justify-self-center">
        <Image src={Logo} alt="Weather Station Logo" />
      </div>
    </div>
  )
}

export default WeatherStation
