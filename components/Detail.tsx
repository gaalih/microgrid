import React from 'react'
import Parse from 'html-react-parser'

import { classNames, displayVariable } from '../lib/utils'
import type { Label } from '../lib/variables'

type DetailProps = {
  data: { [key: string]: number }
  label: { [key: string]: Label }
  header?: string
  className?: string
}

function Detail({ data, label, header, className }: DetailProps) {
  return (
    <div className={classNames(['space-y-0', className ?? ''])}>
      {header && (
        <h3 className="text-blue-custom col-span-2 mb-1 text-center text-xs font-bold">
          {header}
        </h3>
      )}
      {Object.entries(data).map(([key, value], index) => (
        <React.Fragment key={index}>
          <div>
            <p className="card-label -mb-1.5 text-xs">
              {Parse(label[key].name.toString())}
            </p>
            <h5 className="card-value text-xl font-bold">
              {value.toString()}
              {/* <span className="ml-1 text-xs" dangerouslySetInnerHTML={{ __html: label[key].unit! }}></span> */}
              <span className="card-unit ml-1 text-xs">
                {label[key].unit
                  ? Parse(label[key].unit!.toString())
                  : label[key].unit}
              </span>
            </h5>
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Detail
