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
    <ResponsiveContainer className="col-span-3">
      <LineChart data={data}>
        <CartesianGrid />
        <XAxis
          dataKey="timestamp"
          domain={['dataMin', 'dataMax']}
          tickFormatter={(value) => format(new Date(value), 'HH:mm')}
        />
        <YAxis interval="preserveStartEnd" domain={domain}>
          <Label
            value={label + (unit ? ` (${unit})` : '')}
            position="insideTopLeft"
            dy={-27}
            dx={55}
            className="font-medium"
          />
        </YAxis>
        <Tooltip
          labelFormatter={(label) =>
            format(new Date(label), 'dd MMMM yyyy, HH:mm:ss')
          }
        />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ top: 0 }}
          formatter={capitalize}
        />
        <Line
          type="monotone"
          dataKey="estimated"
          stroke="#065f46"
          dot={false}
        />
        <Line type="monotone" dataKey="measured" stroke="#fbbf24" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CustomLineChart
