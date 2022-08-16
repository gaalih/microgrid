import { format } from 'date-fns'
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { AxisDomain } from 'recharts/types/util/types'

import { capitalize } from '../lib/utils'

type CustomLineChartProps = {
  data: {
    estimated: number
    measured: number
    timestamp: string
  }[]
  label: string
  unit?: string
  domain?: AxisDomain
}

function CustomLineChart({ data, label, unit, domain }: CustomLineChartProps) {
  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        style={{ fontFamily: 'Albert Sans' }}
        className="-ml-5 mt-2 p-0"
      >
        <CartesianGrid />
        <XAxis
          dataKey="timestamp"
          domain={['dataMin', 'dataMax']}
          tickFormatter={(value) => format(new Date(value), 'HH:mm')}
          style={{ fontSize: '70%' }}
        />
        <YAxis
          interval="preserveStartEnd"
          domain={domain}
          style={{ fontSize: '70%' }}
        >
          <Label
            value={label + (unit ? ` (${unit})` : '')}
            position="insideTopLeft"
            dy={-23}
            dx={55}
            style={{
              fontFamily: 'Albert Sans',
              fontSize: '70%',
              fill: '#294285',
              fontWeight: 'bold',
            }}
          />
        </YAxis>
        <Tooltip
          labelFormatter={(label) =>
            format(new Date(label), 'dd MMMM yyyy, HH:mm:ss')
          }
          wrapperStyle={{ fontSize: '70%' }}
        />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ top: 0, fontSize: '70%' }}
          iconType="circle"
          iconSize={9}
          formatter={capitalize}
        />
        <Line
          type="monotone"
          dataKey="estimated"
          stroke="#079992"
          dot={false}
        />
        <Line type="monotone" dataKey="measured" stroke="#fa983a" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CustomLineChart
