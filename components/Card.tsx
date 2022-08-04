import { Icon } from '@iconify/react'

const ICON = {
  grid: 'icon-park-outline:signal-tower-one',
  load: 'mdi:home-lightning-bolt',
  pv: 'icon-park-outline:solar-energy',
  battery: 'icon-park-outline:battery-charge',
}

const LABEL = {
  grid: 'Grid',
  load: 'Load',
  pv: 'PV',
  battery: 'BESS',
}

type CardProps = {
  type: 'grid' | 'load' | 'pv' | 'battery'
}

function Card({ type }: CardProps) {
  return (
    <article className="relative w-fit">
      <h3 className="absolute inset-x-0 -top-1/4 text-center text-xl font-medium">
        {LABEL[type]}
      </h3>
      <Icon
        icon={ICON[type]}
        className="mx-auto h-32 w-32 rounded-2xl border-2 border-gray-300 bg-gray-100 p-4 text-blue-600"
      />
    </article>
  )
}

export default Card
