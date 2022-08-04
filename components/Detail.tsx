import React from 'react'

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
    <div
      className={classNames([
        'grid grid-cols-[auto_auto] gap-x-2',
        className ?? '',
      ])}
    >
      {header && (
        <h3 className="col-span-2 mb-1 text-center font-bold text-xs text-blue-custom">{header}</h3>
      )}
      {Object.entries(data).map(([key, value], index) => (
        <React.Fragment key={index}>
          <div
            dangerouslySetInnerHTML={{ __html: label[key].name }}
            className="font-medium text-blue-custom"
          />
          <div
            dangerouslySetInnerHTML={{
              __html: displayVariable(value, label[key].unit),
            }}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Detail
